export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  functions: {
    checkin: '/functions/v1/checkin',
    heatmap: '/functions/v1/heatmap',
    trends: '/functions/v1/trends',
    userStats: '/functions/v1/user/stats',
  },
}
