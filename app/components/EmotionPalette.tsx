'use client'

import { useState, useCallback } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Tooltip,
  Stack,
} from '@mui/material'
import { animated, useSpring } from '@react-spring/web'
import { EMOTION_COLORS } from '@/app/theme'
import type { EmotionType } from '@/app/types'

// 感情オブジェクトの定義
interface EmotionObject {
  id: EmotionType
  label: string
  emoji: string
  color: string
  description: string
  psychologyNote: string
}

const emotionObjects: EmotionObject[] = [
  {
    id: 'happy',
    label: 'Happy',
    emoji: '😊',
    color: EMOTION_COLORS.happy,
    description: 'Joy and happiness',
    psychologyNote: 'Yellow promotes happiness and optimism',
  },
  {
    id: 'sad',
    label: 'Sad',
    emoji: '😢',
    color: EMOTION_COLORS.sad,
    description: 'Sadness and melancholy',
    psychologyNote: 'Blue conveys calmness and introspection',
  },
  {
    id: 'angry',
    label: 'Angry',
    emoji: '😠',
    color: EMOTION_COLORS.angry,
    description: 'Anger and frustration',
    psychologyNote: 'Red symbolizes passion and intensity',
  },
  {
    id: 'calm',
    label: 'Calm',
    emoji: '😌',
    color: EMOTION_COLORS.calm,
    description: 'Peace and serenity',
    psychologyNote: 'Teal/turquoise brings tranquility',
  },
  {
    id: 'excited',
    label: 'Excited',
    emoji: '🤩',
    color: EMOTION_COLORS.excited,
    description: 'Excitement and energy',
    psychologyNote: 'Hot pink sparks enthusiasm',
  },
  {
    id: 'neutral',
    label: 'Neutral',
    emoji: '😐',
    color: EMOTION_COLORS.neutral,
    description: 'Neutral feeling',
    psychologyNote: 'Gray represents equilibrium',
  },
]

interface EmotionPaletteProps {
  onSelect: (emotion: EmotionType) => void
  selected?: EmotionType | null
  maxWidth?: number
}

/**
 * EmotionPalette コンポーネント
 * OOUI 実装：感情をオブジェクトとして視覚化
 * マジカルナンバー7±2 に準拠（6 個の感情選択肢）
 * 認知的負荷削減：シンプルで直感的なレイアウト
 */
export function EmotionPalette({
  onSelect,
  selected,
  maxWidth = 600,
}: EmotionPaletteProps) {
  const [hoveredEmotion, setHoveredEmotion] = useState<EmotionType | null>(null)

  const handleSelect = useCallback(
    (emotion: EmotionType) => {
      onSelect(emotion)
    },
    [onSelect],
  )

  return (
    <Box sx={{ maxWidth, width: '100%', mx: 'auto' }}>
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: 700,
          background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          fontSize: { xs: '0.9rem', sm: '1rem' },
        }}
      >
        ✨ Select your emotion
      </Typography>

      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: { xs: 1, sm: 2 },
        }}
      >
        {emotionObjects.map((emotion) => (
          <EmotionCard
            key={emotion.id}
            emotion={emotion}
            isSelected={selected === emotion.id}
            isHovered={hoveredEmotion === emotion.id}
            onSelect={() => handleSelect(emotion.id)}
            onHover={() => setHoveredEmotion(emotion.id)}
            onHoverEnd={() => setHoveredEmotion(null)}
          />
        ))}
      </Stack>

      {/* 心理学的配慮メッセージ */}
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          mt: 3,
          textAlign: 'center',
          color: 'text.secondary',
          fontSize: '0.75rem',
        }}
      >
        💡 There's no &quot;right&quot; emotion. Choose what resonates with you right now.
      </Typography>
    </Box>
  )
}

interface EmotionCardProps {
  emotion: EmotionObject
  isSelected: boolean
  isHovered: boolean
  onSelect: () => void
  onHover: () => void
  onHoverEnd: () => void
}

/**
 * 個別の感情カード
 * OOUI：各感情をオブジェクトとして独立した操作可能なエンティティとして表現
 */
function EmotionCard({
  emotion,
  isSelected,
  isHovered,
  onSelect,
  onHover,
  onHoverEnd,
}: EmotionCardProps) {
  const scaleSpring = useSpring({
    transform: isSelected ? 'scale(1.1)' : isHovered ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 300, friction: 25 },
  })

  const glowSpring = useSpring({
    boxShadow: isSelected
      ? `0 0 32px ${emotion.color}60, 0 0 64px ${emotion.color}30`
      : isHovered
        ? `0 0 20px ${emotion.color}40, 0 0 40px ${emotion.color}20`
        : '0 0 0px rgba(0, 0, 0, 0)',
    config: { tension: 300, friction: 25 },
  })

  return (
    <Tooltip
      title={emotion.description}
      arrow
      placement="top"
      sx={{
        '& .MuiTooltip-tooltip': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: emotion.color,
          fontSize: '0.75rem',
          fontWeight: 600,
        },
      }}
    >
      <animated.div style={scaleSpring}>
        <animated.div style={glowSpring}>
          <Card
            component={CardActionArea}
            onClick={onSelect}
            onMouseEnter={onHover}
            onMouseLeave={onHoverEnd}
            sx={{
              width: { xs: 72, sm: 80 },
              height: { xs: 100, sm: 120 },
              border: `2px solid ${emotion.color}${isSelected ? '80' : '40'}`,
              borderRadius: 2,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backgroundColor: `${emotion.color}${isSelected ? '15' : '08'}`,
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',

              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle, ${emotion.color}20 0%, transparent 70%)`,
                opacity: isSelected || isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
              },
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                p: 1.5,
                textAlign: 'center',
              }}
            >
              {/* 感情 emoji */}
              <Box
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem' },
                  mb: 1,
                  transition: 'transform 0.3s ease',
                  transform: isSelected || isHovered ? 'scale(1.2)' : 'scale(1)',
                }}
              >
                {emotion.emoji}
              </Box>

              {/* ラベル */}
              <Typography
                variant="caption"
                sx={{
                  fontSize: { xs: '0.65rem', sm: '0.75rem' },
                  fontWeight: 700,
                  color: emotion.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {emotion.label}
              </Typography>

              {/* 選択状態インジケーター */}
              {isSelected && (
                <Box
                  sx={{
                    mt: 0.5,
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    backgroundColor: emotion.color,
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.5 },
                    },
                  }}
                />
              )}
            </CardContent>
          </Card>
        </animated.div>
      </animated.div>
    </Tooltip>
  )
}
