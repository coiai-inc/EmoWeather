'use client'

import { useState } from 'react'
import { EmotionCheckIn } from './components/EmotionCheckIn'
import { Map } from './components/Map'
import { RegionStats } from './components/RegionStats'
import { MapPin, Sparkles } from 'lucide-react'

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0)
  const [selectedCity] = useState<string | undefined>(undefined)

  const handleCheckInSuccess = () => {
    // Trigger map refresh
    setRefreshKey((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animation: 'float 8s ease-in-out infinite' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animation: 'float 10s ease-in-out infinite -2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-purple-400/30 mb-6 backdrop-blur-sm hover:border-purple-400/60 transition-all">
            <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
            <span className="text-sm text-purple-200">Global emotion tracking powered by PostGIS</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent mb-6 drop-shadow-2xl animate-glow-pulse">
            EmoWeather
          </h1>

          <p className="text-2xl md:text-3xl text-purple-100 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Share your emotions. See the world's feelings <span className="font-bold text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text">right now</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => document.querySelector('[role="form"]')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl font-bold text-lg text-white shadow-glow-lg hover:shadow-glow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Share Your Feeling
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Check In Form */}
          <div className="lg:col-span-1">
            <EmotionCheckIn onSuccess={handleCheckInSuccess} />
          </div>

          {/* Center Column - Map */}
          <div className="lg:col-span-2">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-purple-500/30 overflow-hidden shadow-glow-lg h-full hover:border-purple-400/60 transition-all duration-300">
              <Map key={refreshKey} className="h-96 lg:h-full min-h-96" refreshInterval={5000} />
            </div>
          </div>
        </div>

        {/* Bottom Section - Statistics */}
        <div>
          <RegionStats city={selectedCity} refreshInterval={10000} />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <InfoCard
            icon="🌍"
            title="Global Coverage"
            description="Connect with emotions from people around the world in real-time."
          />
          <InfoCard
            icon="📊"
            title="Smart Analytics"
            description="Analyze emotional trends by location, time, and patterns."
          />
          <InfoCard
            icon="⚡"
            title="Live Updates"
            description="WebSocket-powered instant updates with spatial indexing."
          />
        </div>
      </div>
    </div>
  )
}

function InfoCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="group bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-md rounded-xl border border-purple-500/20 p-6 hover:border-purple-400/60 transition-all duration-300 hover:shadow-glow-md">
      <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-purple-100">{title}</h3>
      <p className="text-purple-200/70">{description}</p>
    </div>
  )
}
