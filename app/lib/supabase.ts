import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper functions for common operations
export async function getCheckins(
  limit: number = 100,
  offset: number = 0,
) {
  const { data, error } = await supabase
    .from('checkins')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)
    .offset(offset)

  if (error) throw error
  return data
}

export async function getCheckinsByCity(city: string, limit: number = 50) {
  const { data, error } = await supabase
    .from('checkins')
    .select('*')
    .eq('city', city)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data
}

export async function getCheckinsByEmotion(emotion: string, limit: number = 50) {
  const { data, error } = await supabase
    .from('checkins')
    .select('*')
    .eq('emotion', emotion)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data
}

export async function getHourlyStats(city?: string) {
  let query = supabase
    .from('emotion_stats_hourly')
    .select('*')
    .gte('hour', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
    .order('hour', { ascending: false })

  if (city) {
    query = query.eq('city', city)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}

export async function insertCheckin(checkin: {
  emotion: string
  lat: number
  lng: number
  city?: string
  country_code?: string
  comment?: string
  user_id?: string
}) {
  const { data, error } = await supabase
    .from('checkins')
    .insert([checkin])
    .select()

  if (error) throw error
  return data[0]
}

export async function subscribeToCheckins(callback: (checkin: any) => void) {
  const subscription = supabase
    .from('checkins')
    .on('*', (payload) => {
      callback(payload.new)
    })
    .subscribe()

  return subscription
}
