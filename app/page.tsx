'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
} from '@mui/material'
import { Sparkles, Globe, TrendingUp } from 'lucide-react'
import { EmotionCheckInDialog } from './components/EmotionCheckInDialog'
import { Map } from './components/Map'
import { RegionStats } from './components/RegionStats'
import { StatisticsPanel } from './components/StatisticsPanel'
import { NavigationAppBar } from './components/NavigationAppBar'

/**
 * EmoWeather ホームページ
 * Material UI + OOUI パターンで実装
 * 心理学的・倫理的配慮を統合
 * Dieter Rams "Good Design 10 Principles" を適用
 */

export default function Home() {
  const [checkInOpen, setCheckInOpen] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const handleCheckInSuccess = () => {
    setRefreshKey((prev) => prev + 1)
    setCheckInOpen(false)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #0A0E27 0%, #1A1F3A 50%, #0F0F2E 100%)',
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景アニメーション */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '25%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(80px)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(30px, 30px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: '25%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(80px)',
          animation: 'float 8s ease-in-out infinite reverse',
          '@keyframes float': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(30px, 30px)' },
          },
        }}
      />

      {/* ナビゲーション */}
      <NavigationAppBar onCheckInClick={() => setCheckInOpen(true)} />

      {/* チェックインダイアログ */}
      <EmotionCheckInDialog
        open={checkInOpen}
        onClose={() => setCheckInOpen(false)}
        onSuccess={handleCheckInSuccess}
      />

      {/* メインコンテンツ */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 10 }, position: 'relative', zIndex: 1 }}>
        {/* ヒーロセクション */}
        <Stack spacing={4} sx={{ mb: 10, textAlign: 'center' }}>
          {/* バッジ */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Chip
              icon={<Sparkles size={16} />}
              label="✨ Real-time Global Emotion Map"
              sx={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                color: 'text.primary',
                fontSize: '0.9rem',
                fontWeight: 600,
                '& .MuiChip-icon': {
                  animation: 'spin 2s linear infinite',
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                },
              }}
            />
          </Box>

          {/* タイトル */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 900,
              background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 50%, #E5E7EB 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            EmoWeather
          </Typography>

          {/* サブタイトル */}
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              color: 'text.secondary',
              fontWeight: 400,
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Discover how people around the world are feeling right now. Share your emotions anonymously and see the global emotional landscape in real-time.
          </Typography>

          {/* CTA ボタン */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Box
              component="button"
              onClick={() => setCheckInOpen(true)}
              sx={{
                px: 4,
                py: 1.5,
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                color: 'white',
                border: 'none',
                borderRadius: 1.5,
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 32px rgba(139, 92, 246, 0.3)',
                },
              }}
            >
              🎭 Share Your Feeling
            </Box>
            <Box
              component="a"
              href="#map"
              sx={{
                px: 4,
                py: 1.5,
                background: 'transparent',
                color: 'text.primary',
                border: '2px solid rgba(139, 92, 246, 0.3)',
                borderRadius: 1.5,
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'inline-block',
                '&:hover': {
                  borderColor: 'rgba(139, 92, 246, 0.6)',
                  background: 'rgba(139, 92, 246, 0.05)',
                },
              }}
            >
              🌍 Explore Map
            </Box>
          </Box>
        </Stack>

        {/* メイングリッド */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.75fr', lg: '1fr 2fr' },
            gap: 4,
            mb: 8,
          }}
        >
          {/* 左：チェックインフォーム（インラインで保持） */}
          <Paper
            sx={{
              p: 3,
              background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.8) 0%, rgba(30, 27, 70, 0.5) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                border: '1px solid rgba(139, 92, 246, 0.4)',
                boxShadow: '0 12px 32px rgba(139, 92, 246, 0.15)',
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Quick Info
            </Typography>

            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                <Globe size={24} color="#8B5CF6" style={{ marginTop: 4, flexShrink: 0 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Global Coverage
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Connect with emotions from people around the world
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                <TrendingUp size={24} color="#EC4899" style={{ marginTop: 4, flexShrink: 0 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Live Analytics
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    See emotional trends in real-time
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                <Sparkles size={24} color="#4ECDC4" style={{ marginTop: 4, flexShrink: 0 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Privacy First
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Share anonymously, stay secure
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Paper>

          {/* 右：マップ */}
          <Paper
            id="map"
            sx={{
              background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.8) 0%, rgba(30, 27, 70, 0.5) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: 2,
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              minHeight: 400,
              '&:hover': {
                border: '1px solid rgba(139, 92, 246, 0.4)',
                boxShadow: '0 12px 32px rgba(139, 92, 246, 0.15)',
              },
            }}
          >
            <Map key={refreshKey} className="h-96 md:h-full min-h-96" refreshInterval={5000} />
          </Paper>
        </Box>

        {/* 統計パネル */}
        <Box sx={{ mb: 8 }} id="stats">
          <StatisticsPanel refreshInterval={10000} />
        </Box>

        {/* 地域別統計 */}
        <Box>
          <RegionStats refreshInterval={10000} />
        </Box>
      </Container>

      {/* フッター */}
      <Box
        component="footer"
        sx={{
          borderTop: '1px solid rgba(139, 92, 246, 0.1)',
          background: 'linear-gradient(180deg, transparent 0%, rgba(10, 14, 39, 0.5) 100%)',
          backdropFilter: 'blur(10px)',
          py: 6,
          mt: 10,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              💚 EmoWeather • Where emotions meet geography
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                display: 'block',
                fontStyle: 'italic',
              }}
            >
              Mental wellness matters. Use this tool at your own pace.
              <br />
              Your wellbeing comes first. 🌱
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontSize: '0.7rem',
              }}
            >
              &copy; 2024 EmoWeather. All emotions welcome. ✨
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
