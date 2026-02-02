export type EmotionType = 'happy' | 'sad' | 'angry' | 'calm' | 'excited' | 'neutral'

export interface Checkin {
  id: string
  user_id?: string
  emotion: EmotionType
  lat: number
  lng: number
  city?: string
  country_code?: string
  comment?: string
  created_at: string
  updated_at: string
}

export interface CheckinInput {
  emotion: EmotionType
  lat: number
  lng: number
  city?: string
  country_code?: string
  comment?: string
}

export interface EmotionStatsHourly {
  id: string
  hour: string
  city?: string
  country_code?: string
  emotion: EmotionType
  count: number
  avg_lat: number
  avg_lng: number
  created_at: string
  updated_at: string
}

export interface UserProfile {
  id: string
  username?: string
  display_name?: string
  avatar_url?: string
  total_checkins: number
  created_at: string
  updated_at: string
}

export interface HeatmapData {
  checkins: Checkin[]
  stats: EmotionStatsHourly[]
}

export interface TrendData {
  city: string
  emotion: EmotionType
  count: number
  change_percent: number
}

export interface UserStats {
  total_checkins: number
  favorite_emotion: EmotionType
  recent_checkins: Checkin[]
  weekly_trend: EmotionType[]
}

export interface ApiError {
  error: string
  message: string
  status?: number
}
