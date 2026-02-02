'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { supabase } from '@/app/lib/supabase'
import type { Checkin, EmotionType } from '@/app/types'

const emotionColors: Record<EmotionType, string> = {
  happy: '#FFD700',
  sad: '#4169E1',
  angry: '#FF4500',
  calm: '#90EE90',
  excited: '#FF1493',
  neutral: '#A0AEC0',
}

interface MapProps {
  className?: string
  refreshInterval?: number
}

export function Map({ className = '', refreshInterval = 5000 }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [checkins, setCheckins] = useState<Checkin[]>([])

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) {
      console.warn('Mapbox token not configured')
      return
    }

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

    if (mapContainer.current && !map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [0, 20],
        zoom: 2,
        pitch: 0,
      })
    }

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [])

  // Fetch and update checkins
  useEffect(() => {
    const fetchCheckins = async () => {
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()

      const { data, error } = await supabase
        .from('checkins')
        .select('*')
        .gte('created_at', oneHourAgo)
        .order('created_at', { ascending: false })
        .limit(1000)

      if (error) {
        console.error('Error fetching checkins:', error)
        return
      }

      setCheckins(data || [])
    }

    fetchCheckins()

    // Set up real-time subscription
    const channel = supabase
      .channel('checkins-channel')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'checkins',
      }, (payload) => {
        setCheckins((prev) => [payload.new as Checkin, ...prev].slice(0, 1000))
      })
      .subscribe()

    const interval = setInterval(fetchCheckins, refreshInterval)

    return () => {
      clearInterval(interval)
      if (channel) {
        supabase.removeChannel(channel)
      }
    }
  }, [refreshInterval])

  // Update map markers
  useEffect(() => {
    if (!map.current) return

    // Remove existing markers
    document.querySelectorAll('.emotion-marker').forEach((el) => el.remove())

    // Add markers
    checkins.forEach((checkin) => {
      const el = document.createElement('div')
      el.className = 'emotion-marker cursor-pointer'
      el.innerHTML = `
        <div class="w-8 h-8 rounded-full flex items-center justify-center text-lg" 
             style="background-color: ${emotionColors[checkin.emotion]}; box-shadow: 0 0 10px ${emotionColors[checkin.emotion]};">
          ${getEmotionEmoji(checkin.emotion)}
        </div>
      `

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-3 text-slate-900">
          <p class="font-semibold capitalize">${checkin.emotion}</p>
          ${checkin.city ? `<p class="text-sm">${checkin.city}</p>` : ''}
          ${checkin.comment ? `<p class="text-sm italic">"${checkin.comment}"</p>` : ''}
          <p class="text-xs text-slate-600 mt-1">${new Date(checkin.created_at).toLocaleTimeString()}</p>
        </div>
      `)

      new mapboxgl.Marker(el).setLngLat([checkin.lng, checkin.lat]).setPopup(popup).addTo(map.current!)
    })
  }, [checkins])

  return (
    <div
      ref={mapContainer}
      className={`rounded-lg border border-slate-700 overflow-hidden shadow-xl h-full ${className}`}
      style={{ minHeight: '500px' }}
    />
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
