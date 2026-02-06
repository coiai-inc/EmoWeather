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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full border border-purple-400/50 mb-6 backdrop-blur-md hover:border-purple-300 hover:bg-gradient-to-r hover:from-indigo-500/40 hover:to-purple-500/40 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-purple-200 animate-spin" style={{ animationDuration: '2s' }} />
            <span className="text-sm font-medium text-purple-100">✨ Global emotion tracking powered by PostGIS</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 bg-clip-text text-transparent mb-6 drop-shadow-2xl animate-glow-pulse leading-tight">
            EmoWeather
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed font-normal mb-8">
            Share your emotions and see how people around the world are feeling<span className="animate-pulse">.</span> <span className="font-bold text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text">Real-time emotion mapping</span> with geographic insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => document.querySelector('[role="form"]')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl font-bold text-lg text-white shadow-glow-lg hover:shadow-glow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <MapPin className="w-5 h-5 group-hover:animate-bounce" style={{ animationDelay: '0s' }} />
              <span className="relative">✨ Share Your Feeling</span>
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
    <div className="group relative bg-gradient-to-br from-purple-900/30 to-indigo-900/20 backdrop-blur-md rounded-xl border border-purple-500/20 p-8 hover:border-purple-400/80 transition-all duration-300 hover:shadow-glow-md overflow-hidden">
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/10 group-hover:to-indigo-600/10 transition-all duration-300 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-5xl mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-purple-100 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-purple-200/70 group-hover:text-purple-100/90 transition-colors">{description}</p>
      </div>
    </div>
  )
}
