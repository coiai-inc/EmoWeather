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
    const bbox = url.searchParams.get('bbox')
    const hours = url.searchParams.get('hours') || '24'

    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase configuration')
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Get recent checkins for heatmap
    const hourAgo = new Date(Date.now() - parseInt(hours) * 60 * 60 * 1000).toISOString()

    let query = supabase
      .from('checkins')
      .select('id, emotion, lat, lng, city, created_at')
      .gte('created_at', hourAgo)
      .order('created_at', { ascending: false })

    if (bbox) {
      const [minLng, minLat, maxLng, maxLat] = bbox.split(',').map(Number)
      // Apply bounding box filter (approximate)
      query = query
        .gte('lng', minLng)
        .lte('lng', maxLng)
        .gte('lat', minLat)
        .lte('lat', maxLat)
    }

    const { data: checkins, error } = await query.limit(5000)

    if (error) {
      throw error
    }

    // Get hourly statistics
    const { data: stats, error: statsError } = await supabase
      .from('emotion_stats_hourly')
      .select('*')
      .gte('hour', hourAgo)
      .order('hour', { ascending: false })

    if (statsError) {
      throw statsError
    }

    // Group checkins by emotion
    const emotionGroups: Record<string, Array<any>> = {}
    checkins.forEach((checkin: any) => {
      if (!emotionGroups[checkin.emotion]) {
        emotionGroups[checkin.emotion] = []
      }
      emotionGroups[checkin.emotion].push({
        lat: checkin.lat,
        lng: checkin.lng,
        city: checkin.city,
      })
    })

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          checkins: emotionGroups,
          stats,
          count: checkins.length,
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
