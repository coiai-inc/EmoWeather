'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/app/lib/supabase'
import type { EmotionStatsHourly, EmotionType } from '@/app/types'
import { TrendingUp } from 'lucide-react'

const emotionLabels: Record<EmotionType, string> = {
  happy: '😊 Happy',
  sad: '😢 Sad',
  angry: '😠 Angry',
  calm: '😌 Calm',
  excited: '🤩 Excited',
  neutral: '😐 Neutral',
}

interface RegionStatsProps {
  city?: string
  refreshInterval?: number
}

export function RegionStats({ city, refreshInterval = 10000 }: RegionStatsProps) {
  const [stats, setStats] = useState<EmotionStatsHourly[]>([])
  const [topEmotions, setTopEmotions] = useState<Array<{ emotion: EmotionType; count: number }>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true)
      try {
        let query = supabase
          .from('emotion_stats_hourly')
          .select('*')
          .gte('hour', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
          .order('hour', { ascending: false })

        if (city) {
          query = query.eq('city', city)
        }

        const { data, error } = await query.limit(100)

        if (error) {
          console.error('Error fetching stats:', error)
          return
        }

        setStats(data || [])

        // Calculate top emotions
        const emotionCount: Record<EmotionType, number> = {
          happy: 0,
          sad: 0,
          angry: 0,
          calm: 0,
          excited: 0,
          neutral: 0,
        }

        data?.forEach((stat) => {
          emotionCount[stat.emotion as EmotionType] += stat.count
        })

        const sorted = Object.entries(emotionCount)
          .map(([emotion, count]) => ({ emotion: emotion as EmotionType, count }))
          .sort((a, b) => b.count - a.count)

        setTopEmotions(sorted)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, refreshInterval)

    return () => clearInterval(interval)
  }, [city, refreshInterval])

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/10 backdrop-blur-md rounded-2xl border border-purple-500/20 p-8 text-center text-purple-300 animate-pulse">
        Loading statistics...
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Top Emotions */}
      <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 backdrop-blur-md rounded-2xl border border-purple-500/30 p-8 shadow-glow-lg hover:border-purple-400/60 transition-all duration-300">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-8">
          Emotion Trends
          {city && <span className="text-lg font-normal text-purple-300 ml-3 block mt-2">in {city}</span>}
        </h2>

        <div className="space-y-5">
          {topEmotions.map((item, idx) => {
            const percentage = stats.length > 0 ? (item.count / stats.reduce((acc, s) => acc + s.count, 0)) * 100 : 0
            const emotionColor = getEmotionColor(item.emotion)

            return (
              <div key={item.emotion} className="space-y-2 group">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-purple-100 group-hover:text-white transition-colors">{emotionLabels[item.emotion]}</span>
                  <span className="text-sm font-bold text-purple-300 group-hover:text-purple-200 transition-colors">{item.count} check-ins</span>
                </div>
                <div className="w-full bg-black/40 rounded-full h-4 overflow-hidden border border-purple-500/30 group-hover:border-purple-400/60 transition-all relative" style={{ boxShadow: `inset 0 0 10px ${emotionColor}20` }}>
                  <div
                    className="h-full transition-all duration-700 rounded-full"
                    style={{ 
                      width: `${percentage}%`,
                      background: `linear-gradient(90deg, ${emotionColor}, ${emotionColor}dd)`,
                      boxShadow: `0 0 15px ${emotionColor}80, inset 0 0 10px ${emotionColor}40`
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 backdrop-blur-md rounded-2xl border border-purple-500/30 p-8 shadow-glow-lg hover:border-purple-400/60 transition-all duration-300">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">Recent Activity</h3>

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {stats.length > 0 ? (
            stats.slice(0, 10).map((stat, index) => (
              <div key={`${stat.hour}-${stat.emotion}`} className="group flex items-center justify-between p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-400/60 hover:bg-purple-500/10 transition-all duration-300" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl transition-transform duration-300 group-hover:scale-125">{getEmotionEmoji(stat.emotion)}</span>
                  <div>
                    <p className="font-semibold capitalize text-purple-100">{stat.emotion}</p>
                    <p className="text-sm text-purple-300/60">
                      {stat.city && `${stat.city} • `}
                      {new Date(stat.hour).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-purple-100 text-lg">{stat.count}</span>
                  {stat.count > 5 && <TrendingUp className="w-4 h-4 text-purple-400 animate-pulse" />}
                </div>
              </div>
            ))
          ) : (
            <p className="text-purple-300/60 text-center py-12">No data available yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

function getEmotionColor(emotion: EmotionType): string {
  const colors: Record<EmotionType, string> = {
    happy: '#FFD700',
    sad: '#6495ED',
    angry: '#FF6B6B',
    calm: '#4ECDC4',
    excited: '#FF1493',
    neutral: '#A0AEC0',
  }
  return colors[emotion]
}

function getEmotionEmoji(emotion: EmotionType): string {
  const emojis: Record<EmotionType, string> = {
    happy: '😊',
    sad: '😢',
    angry: '😠',
    calm: '😌',
    excited: '🤩',
    neutral: '😐',
  }
  return emojis[emotion]
}
