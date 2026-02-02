'use client'

import { useState } from 'react'
import { supabase } from '@/app/lib/supabase'
import type { EmotionType } from '@/app/types'
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react'

const emotions = [
  { id: 'happy', label: '😊 Happy', color: 'emotion-happy' },
  { id: 'sad', label: '😢 Sad', color: 'emotion-sad' },
  { id: 'angry', label: '😠 Angry', color: 'emotion-angry' },
  { id: 'calm', label: '😌 Calm', color: 'emotion-calm' },
  { id: 'excited', label: '🤩 Excited', color: 'emotion-excited' },
  { id: 'neutral', label: '😐 Neutral', color: 'emotion-neutral' },
]

interface EmotionCheckInProps {
  onSuccess?: () => void
  onError?: (error: string) => void
}

export function EmotionCheckIn({ onSuccess, onError }: EmotionCheckInProps) {
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType | null>(null)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedEmotion) {
      const msg = 'Please select an emotion'
      setError(msg)
      onError?.(msg)
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Get current location
      const position = await new Promise<GeolocationCoordinates>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve(pos.coords),
          reject,
        )
      })

      // Get city from reverse geocoding (simplified)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.latitude}&lon=${position.longitude}`,
      )
      const geoData = await response.json()

      const city = geoData.address?.city || geoData.address?.town || 'Unknown'
      const countryCode = geoData.address?.country_code?.toUpperCase() || ''

      // Insert checkin
      const { data, error: supabaseError } = await supabase
        .from('checkins')
        .insert([
          {
            emotion: selectedEmotion,
            lat: position.latitude,
            lng: position.longitude,
            city,
            country_code: countryCode,
            comment: comment || null,
          },
        ])
        .select()

      if (supabaseError) {
        throw supabaseError
      }

      setSuccess(true)
      setSelectedEmotion(null)
      setComment('')

      onSuccess?.()

      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to submit emotion'
      setError(msg)
      onError?.(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">How are you feeling?</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Emotion Selection */}
        <div>
          <label className="block text-sm font-medium mb-3">Select Your Emotion</label>
          <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
            {emotions.map((emotion) => (
              <button
                key={emotion.id}
                type="button"
                onClick={() => setSelectedEmotion(emotion.id as EmotionType)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedEmotion === emotion.id
                    ? 'border-blue-400 bg-blue-400/20 scale-105'
                    : 'border-slate-600 hover:border-slate-500 bg-slate-700/50'
                }`}
              >
                <div className="text-3xl mb-1">{emotion.label.split(' ')[0]}</div>
                <div className="text-xs text-slate-300">{emotion.label.split(' ')[1]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Comment */}
        <div>
          <label htmlFor="comment" className="block text-sm font-medium mb-2">
            Add a comment (optional)
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-slate-400"
            rows={3}
            maxLength={500}
          />
          <p className="text-xs text-slate-400 mt-1">{comment.length}/500</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-900/30 border border-red-600 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="flex items-center gap-2 p-3 bg-green-900/30 border border-green-600 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <p className="text-sm text-green-300">Your emotion has been recorded! 🎉</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !selectedEmotion}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-5 h-5 animate-spin" />}
          {loading ? 'Submitting...' : 'Share Your Feeling'}
        </button>
      </form>

      <p className="text-xs text-slate-400 mt-4 text-center">
        📍 Your location will be used to map emotions geographically
      </p>
    </div>
  )
}
