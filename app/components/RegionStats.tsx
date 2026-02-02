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
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 text-center text-slate-400">
        Loading statistics...
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Top Emotions */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-4">
          Emotion Trends
          {city && <span className="text-base font-normal text-slate-400 ml-2">in {city}</span>}
        </h2>

        <div className="space-y-3">
          {topEmotions.map((item) => {
            const percentage = stats.length > 0 ? (item.count / stats.reduce((acc, s) => acc + s.count, 0)) * 100 : 0

            return (
              <div key={item.emotion} className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{emotionLabels[item.emotion]}</span>
                  <span className="text-sm text-slate-400">{item.count} check-ins</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-xl">
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {stats.length > 0 ? (
            stats.slice(0, 10).map((stat) => (
              <div key={`${stat.hour}-${stat.emotion}`} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getEmotionEmoji(stat.emotion)}</span>
                  <div>
                    <p className="font-medium capitalize">{stat.emotion}</p>
                    <p className="text-sm text-slate-400">
                      {stat.city && `${stat.city} • `}
                      {new Date(stat.hour).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">{stat.count}</span>
                  {stat.count > 5 && <TrendingUp className="w-4 h-4 text-green-400" />}
                </div>
              </div>
            ))
          ) : (
            <p className="text-slate-400 text-center py-8">No data available yet</p>
          )}
        </div>
      </div>
    </div>
  )
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
