'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { supabase } from '@/app/lib/supabase'
import type { Checkin, EmotionType } from '@/app/types'

const emotionColors: Record<EmotionType, string> = {
  happy: '#FFD700',
  sad: '#6495ED',
  angry: '#FF6B6B',
  calm: '#4ECDC4',
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
        attributionControl: false,
      })

      // Add custom styling
      map.current.on('load', () => {
        // Darken the map further
        map.current?.setPaintProperty('background', 'background-color', '#0a0014')
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
      el.className = 'emotion-marker cursor-pointer transition-transform duration-300 hover:scale-125'
      el.innerHTML = `
        <style>
          @keyframes pulse-ring {
            0% { box-shadow: 0 0 0 0 ${emotionColors[checkin.emotion]}99; }
            70% { box-shadow: 0 0 0 8px ${emotionColors[checkin.emotion]}00; }
            100% { box-shadow: 0 0 0 0 ${emotionColors[checkin.emotion]}00; }
          }
          .pulse-marker {
            animation: pulse-ring 2s infinite;
          }
        </style>
        <div class="pulse-marker w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-200" 
             style="background-color: ${emotionColors[checkin.emotion]}; box-shadow: 0 0 15px ${emotionColors[checkin.emotion]}; border: 2px solid white;">
          ${getEmotionEmoji(checkin.emotion)}
        </div>
      `

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-4 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg text-purple-100">
          <p class="font-bold capitalize text-lg">${checkin.emotion}</p>
          ${checkin.city ? `<p class="text-sm text-purple-200">${checkin.city}</p>` : ''}
          ${checkin.comment ? `<p class="text-sm italic text-purple-200 mt-2">"${checkin.comment}"</p>` : ''}
          <p class="text-xs text-purple-300/70 mt-2">${new Date(checkin.created_at).toLocaleTimeString()}</p>
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
