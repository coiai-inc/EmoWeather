'use client'

import { useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Skeleton,
  Paper,
  LinearProgress,
  Stack,
  Chip,
} from '@mui/material'
import { supabase } from '@/app/lib/supabase'
import { EMOTION_COLORS } from '@/app/theme'
import type { EmotionType } from '@/app/types'

interface EmotionStats {
  emotion: EmotionType
  count: number
  percentage: number
  label: string
  emoji: string
}

interface StatisticsPanelProps {
  city?: string
  refreshInterval?: number
}

/**
 * StatisticsPanel コンポーネント
 * Material UI Grid と Paper を使用した統計表示
 * 感情分布を視覚的に表現
 */
export function StatisticsPanel({
  city,
  refreshInterval = 10000,
}: StatisticsPanelProps) {
  const [stats, setStats] = useState<EmotionStats[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        setError(null)

        const { data, error: queryError } = await supabase
          .from('checkins')
          .select('emotion')
          .limit(1000)

        if (queryError) throw queryError

        // Compute emotion distribution
        const emotionCounts = {
          happy: 0,
          sad: 0,
          angry: 0,
          calm: 0,
          excited: 0,
          neutral: 0,
        } as Record<EmotionType, number>

        data?.forEach((record) => {
          if (record.emotion in emotionCounts) {
            emotionCounts[record.emotion as EmotionType]++
          }
        })

        const total = Object.values(emotionCounts).reduce((a, b) => a + b, 0)
        const emotionLabels: Record<EmotionType, { label: string; emoji: string }> = {
          happy: { label: 'Happy', emoji: '😊' },
          sad: { label: 'Sad', emoji: '😢' },
          angry: { label: 'Angry', emoji: '😠' },
          calm: { label: 'Calm', emoji: '😌' },
          excited: { label: 'Excited', emoji: '🤩' },
          neutral: { label: 'Neutral', emoji: '😐' },
        }

        const newStats: EmotionStats[] = Object.entries(emotionCounts).map(
          ([emotion, count]) => ({
            emotion: emotion as EmotionType,
            count,
            percentage: total > 0 ? Math.round((count / total) * 100) : 0,
            label: emotionLabels[emotion as EmotionType].label,
            emoji: emotionLabels[emotion as EmotionType].emoji,
          }),
        )

        setStats(newStats.sort((a, b) => b.count - a.count))
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to fetch statistics'
        setError(msg)
        console.error('Statistics fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, refreshInterval)
    return () => clearInterval(interval)
  }, [city, refreshInterval])

  if (error) {
    return (
      <Card>
        <CardContent>
          <Typography color="error">Failed to load statistics</Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      sx={{
        background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.8) 0%, rgba(30, 27, 70, 0.5) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            📊 Global Emotion Distribution
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {loading ? 'Loading...' : `Based on ${stats.reduce((a, b) => a + b.count, 0)} recent check-ins`}
          </Typography>
        }
      />

      <CardContent>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 3,
          }}
        >
          {loading ? (
            <>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} variant="rectangular" height={80} sx={{ borderRadius: 1 }} />
              ))}
            </>
          ) : (
            stats.map((stat) => (
              <EmotionStatCard key={stat.emotion} emotion={stat} />
            ))
          )}
        </Box>

        {/* 心理学的インサイト */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(139, 92, 246, 0.1)' }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
            }}
          >
            💡 Emotional Insights
          </Typography>
          <Stack spacing={1}>
            {stats.slice(0, 2).map((stat) => (
              <Typography
                key={stat.emotion}
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                }}
              >
                {stat.emoji} {stat.label} feelings are the most common right now.
              </Typography>
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}

interface EmotionStatCardProps {
  emotion: EmotionStats
}

function EmotionStatCard({ emotion }: EmotionStatCardProps) {
  const color = EMOTION_COLORS[emotion.emotion]

  return (
    <Paper
      sx={{
        p: 2,
        background: `linear-gradient(135deg, ${color}08 0%, ${color}04 100%)`,
        border: `1px solid ${color}30`,
        borderRadius: 1.5,
        transition: 'all 0.3s ease',
        '&:hover': {
          border: `1px solid ${color}60`,
          boxShadow: `0 4px 16px ${color}20`,
        },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1.5 }}>
        <Box sx={{ fontSize: '1.5rem' }}>{emotion.emoji}</Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {emotion.label}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {emotion.count} check-in{emotion.count !== 1 ? 's' : ''}
          </Typography>
        </Box>
        <Chip
          label={`${emotion.percentage}%`}
          size="small"
          sx={{
            backgroundColor: `${color}30`,
            color: color,
            fontWeight: 700,
            fontSize: '0.75rem',
          }}
        />
      </Stack>

      {/* プログレスバー */}
      <LinearProgress
        variant="determinate"
        value={emotion.percentage}
        sx={{
          height: 6,
          borderRadius: 3,
          backgroundColor: `${color}15`,
          '& .MuiLinearProgress-bar': {
            backgroundColor: color,
            borderRadius: 3,
            boxShadow: `0 0 12px ${color}60`,
          },
        }}
      />
    </Paper>
  )
}
