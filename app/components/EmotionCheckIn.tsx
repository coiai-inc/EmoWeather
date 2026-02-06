'use client'

import { useState } from 'react'
import { supabase } from '@/app/lib/supabase'
import type { EmotionType } from '@/app/types'
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react'

const emotions = [
  { id: 'happy', label: '😊 Happy', color: '#FFD700' },
  { id: 'sad', label: '😢 Sad', color: '#6495ED' },
  { id: 'angry', label: '😠 Angry', color: '#FF6B6B' },
  { id: 'calm', label: '😌 Calm', color: '#4ECDC4' },
  { id: 'excited', label: '🤩 Excited', color: '#FF1493' },
  { id: 'neutral', label: '😐 Neutral', color: '#A0AEC0' },
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
          },
        ])

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
    <div role="form" className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 backdrop-blur-md rounded-2xl border border-purple-500/30 p-8 shadow-glow-lg hover:border-purple-400/60 transition-all duration-300">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">How are you feeling?</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Emotion Selection */}
        <div>
          <label className="block text-sm font-semibold text-purple-200 mb-4 uppercase tracking-wide">Select Your Emotion</label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {emotions.map((emotion) => (
              <button
                key={emotion.id}
                type="button"
                onClick={() => setSelectedEmotion(emotion.id as EmotionType)}
                style={selectedEmotion === emotion.id ? { 
                  borderColor: emotion.color,
                  boxShadow: `0 0 30px ${emotion.color}80, 0 0 60px ${emotion.color}40`,
                  backgroundColor: `${emotion.color}15`
                } : {
                  backgroundColor: 'rgba(0, 0, 0, 0.3)'
                }}
                className={`group relative p-4 rounded-xl border-2 transition-all duration-300 transform overflow-hidden ${
                  selectedEmotion === emotion.id
                    ? 'scale-110 shadow-lg'
                    : 'border-purple-500/20 hover:border-purple-400/60 hover:bg-purple-500/10'
                }`}
              >
                {/* Background animation */}
                {selectedEmotion === emotion.id && (
                  <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: `${emotion.color}15` }} />
                )}
                <div className="relative text-5xl mb-2 transition-transform duration-300 group-hover:scale-125 inline-block">{emotion.label.split(' ')[0]}</div>
                <div className="relative text-xs font-medium text-purple-200">{emotion.label.split(' ')[1]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Comment */}
        <div>
          <label htmlFor="comment" className="block text-sm font-semibold text-purple-200 mb-3 uppercase tracking-wide">
            Share a thought (optional)
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What's on your mind? 💭"
            className="w-full px-5 py-3 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 text-white placeholder-purple-300/50 transition-all duration-300"
            rows={4}
            maxLength={500}
          />
          <p className="text-xs text-purple-300/60 mt-2">{comment.length}/500</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-900/40 backdrop-blur-sm border border-red-500/50 rounded-lg animate-pulse-slow">
            <AlertCircle className="w-5 h-5 text-red-300 flex-shrink-0" />
            <p className="text-sm text-red-200">{error}</p>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="flex items-center gap-3 p-4 bg-green-900/40 backdrop-blur-sm border border-green-500/50 rounded-lg animate-pulse-slow">
            <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
            <p className="text-sm text-green-200">Your emotion has been recorded! 🎉</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !selectedEmotion}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl font-bold text-lg text-white shadow-glow-lg hover:shadow-glow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-5 h-5 animate-spin" />}
          {loading ? 'Recording...' : '✨ Share Your Feeling'}
        </button>
      </form>

      <p className="text-xs text-purple-300/60 mt-6 text-center leading-relaxed">
        📍 Your location will be used to map emotions geographically
      </p>
    </div>
  )
}
