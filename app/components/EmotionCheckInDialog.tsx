'use client'

import { useState, useCallback } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Alert,
  CircularProgress,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
} from '@mui/material'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { supabase } from '@/app/lib/supabase'
import { EmotionPalette } from './EmotionPalette'
import type { EmotionType } from '@/app/types'

interface EmotionCheckInDialogProps {
  open: boolean
  onClose: () => void
  onSuccess?: () => void
  onError?: (error: string) => void
}

/**
 * EmotionCheckInDialog コンポーネント
 * Material UI Dialog を使用したモーダル形式のチェックイン
 * OOUI 実装：チェックインを「アクション」ではなく「オブジェクト操作」として提示
 * デザイン倫理：プライバシーとメンタルヘルス配慮を明示
 */
export function EmotionCheckInDialog({
  open,
  onClose,
  onSuccess,
  onError,
}: EmotionCheckInDialogProps) {
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType | null>(null)
  const [comment, setComment] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = useCallback(async () => {
    if (!selectedEmotion) {
      const msg = 'Please select an emotion'
      setError(msg)
      onError?.(msg)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const position = await new Promise<GeolocationCoordinates>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve(pos.coords),
          reject,
        )
      })

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.latitude}&lon=${position.longitude}`,
      )
      const geoData = await response.json()

      const city = geoData.address?.city || geoData.address?.town || 'Unknown'
      const countryCode = geoData.address?.country_code?.toUpperCase() || ''

      const { error: supabaseError } = await supabase
        .from('checkins')
        .insert([
          {
            emotion: selectedEmotion,
            lat: position.latitude,
            lng: position.longitude,
            city,
            country_code: countryCode,
            comment: comment || null,
            is_anonymous: isAnonymous,
          },
        ])

      if (supabaseError) {
        throw supabaseError
      }

      setSuccess(true)
      onSuccess?.()

      setTimeout(() => {
        setSuccess(false)
        setSelectedEmotion(null)
        setComment('')
        onClose()
      }, 2000)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to submit emotion'
      setError(msg)
      onError?.(msg)
    } finally {
      setLoading(false)
    }
  }, [selectedEmotion, comment, isAnonymous, onSuccess, onError, onClose])

  const handleClose = () => {
    if (!loading && !success) {
      setSelectedEmotion(null)
      setComment('')
      setError(null)
      setSuccess(false)
      onClose()
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.95) 0%, rgba(30, 27, 70, 0.8) 100%)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          border: '1px solid rgba(139, 92, 246, 0.2)',
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.5rem' },
          fontWeight: 700,
          background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          pb: 2,
        }}
      >
        🎭 How are you feeling right now?
      </DialogTitle>

      <DialogContent sx={{ pt: 3 }}>
        <Stack spacing={3}>
          {/* 感情パレット */}
          <Box>
            <EmotionPalette
              onSelect={setSelectedEmotion}
              selected={selectedEmotion}
              maxWidth={400}
            />
          </Box>

          {/* コメント入力 */}
          <Box>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="What's on your mind? (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value.slice(0, 500))}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                },
              }}
              helperText={`${comment.length}/500 characters`}
            />
          </Box>

          {/* プライバシー配慮 */}
          <Paper
            sx={{
              p: 2,
              background: 'rgba(79, 172, 254, 0.05)',
              border: '1px solid rgba(79, 172, 254, 0.2)',
              borderRadius: 1.5,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  sx={{
                    color: 'primary.light',
                    '&.Mui-checked': {
                      color: 'primary.main',
                    },
                  }}
                />
              }
              label={
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Share anonymously
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Your location is used for mapping, your identity remains private
                  </Typography>
                </Box>
              }
            />
          </Paper>

          {/* メンタルヘルス配慮メッセージ */}
          <Alert
            severity="info"
            icon={<AlertCircle size={20} />}
            sx={{
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              borderColor: 'rgba(99, 102, 241, 0.3)',
              color: 'info.light',
              '& .MuiAlert-message': {
                fontSize: '0.875rem',
              },
            }}
          >
            💚 There's no pressure to check in. Use this tool at your own pace. Your mental wellbeing comes first.
          </Alert>

          {/* エラーメッセージ */}
          {error && (
            <Alert
              severity="error"
              icon={<AlertCircle size={20} />}
              onClose={() => setError(null)}
              sx={{
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                borderColor: 'rgba(255, 107, 107, 0.3)',
                color: 'error.light',
              }}
            >
              {error}
            </Alert>
          )}

          {/* 成功メッセージ */}
          {success && (
            <Alert
              severity="success"
              icon={<CheckCircle size={20} />}
              sx={{
                backgroundColor: 'rgba(78, 205, 196, 0.1)',
                borderColor: 'rgba(78, 205, 196, 0.3)',
                color: 'success.light',
                animation: 'slideIn 0.3s ease-out',
                '@keyframes slideIn': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(-10px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              ✨ Your emotion has been recorded! Thank you for sharing.
            </Alert>
          )}
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button
          onClick={handleClose}
          disabled={loading || success}
          variant="outlined"
          sx={{ textTransform: 'none' }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!selectedEmotion || loading || success}
          variant="contained"
          sx={{
            textTransform: 'none',
            minWidth: 120,
          }}
        >
          {loading ? (
            <>
              <CircularProgress size={16} sx={{ mr: 1 }} />
              Recording...
            </>
          ) : success ? (
            '✓ Recorded'
          ) : (
            '🎭 Share Feeling'
          )}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
