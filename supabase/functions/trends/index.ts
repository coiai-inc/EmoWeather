import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

async function handleRequest(req: Request) {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'GET') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  try {
    const url = new URL(req.url)
    const city = url.pathname.split('/').pop()

    if (!city || city === 'trends') {
      return new Response(
        JSON.stringify({ error: 'City parameter is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase configuration')
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Get current hour stats
    const now = new Date()
    const currentHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours())
    const previousHour = new Date(currentHour.getTime() - 60 * 60 * 1000)

    const { data: currentStats, error: currentError } = await supabase
      .from('emotion_stats_hourly')
      .select('emotion, count')
      .eq('city', city)
      .gte('hour', currentHour.toISOString())
      .lt('hour', new Date(currentHour.getTime() + 60 * 60 * 1000).toISOString())

    const { data: previousStats, error: previousError } = await supabase
      .from('emotion_stats_hourly')
      .select('emotion, count')
      .eq('city', city)
      .gte('hour', previousHour.toISOString())
      .lt('hour', currentHour.toISOString())

    if (currentError || previousError) {
      throw currentError || previousError
    }

    // Calculate trends
    const emotions = ['happy', 'sad', 'angry', 'calm', 'excited', 'neutral']
    const trends = emotions.map((emotion) => {
      const current = currentStats?.find((s: any) => s.emotion === emotion)?.count || 0
      const previous = previousStats?.find((s: any) => s.emotion === emotion)?.count || 0
      const change = previous > 0 ? ((current - previous) / previous) * 100 : 0

      return {
        emotion,
        current_count: current,
        previous_count: previous,
        change_percent: Math.round(change),
      }
    })

    // Get top cities in last 24 hours
    const { data: topCities, error: topCitiesError } = await supabase
      .from('emotion_stats_hourly')
      .select('city, emotion, count')
      .gte('hour', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
      .order('count', { ascending: false })
      .limit(50)

    if (topCitiesError) {
      throw topCitiesError
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          city,
          trends,
          top_cities: topCities,
        },
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
}

serve(handleRequest)
