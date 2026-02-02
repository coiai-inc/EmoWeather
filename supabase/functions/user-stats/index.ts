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
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase configuration')
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Get user from auth header
    const authHeader = req.headers.get('authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Authorization required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const token = authHeader.replace('Bearer ', '')
    const {
      data: { user },
    } = await supabase.auth.getUser(token)

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Invalid token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Get user's checkins
    const { data: checkins, error: checkinsError } = await supabase
      .from('checkins')
      .select('emotion, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (checkinsError) {
      throw checkinsError
    }

    // Calculate stats
    const totalCheckins = checkins?.length || 0

    // Find favorite emotion
    const emotionCounts: Record<string, number> = {}
    checkins?.forEach((c: any) => {
      emotionCounts[c.emotion] = (emotionCounts[c.emotion] || 0) + 1
    })

    const favoriteEmotion = Object.entries(emotionCounts).sort(([, a], [, b]) => b - a)[0]?.[0] || 'neutral'

    // Get weekly trend (last 7 days)
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    const weeklyCheckins = checkins?.filter((c: any) => new Date(c.created_at) >= sevenDaysAgo) || []

    const weeklyTrend = weeklyCheckins.map((c: any) => c.emotion)

    // Get recent checkins (last 10)
    const recentCheckins = checkins?.slice(0, 10) || []

    // Get or create user profile
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          user_id: user.id,
          email: user.email,
          total_checkins: totalCheckins,
          favorite_emotion: favoriteEmotion,
          emotion_breakdown: emotionCounts,
          weekly_trend: weeklyTrend,
          recent_checkins: recentCheckins,
          profile: profile || null,
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
