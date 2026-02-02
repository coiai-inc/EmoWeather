'use client'

import { useState } from 'react'
import { EmotionCheckIn } from './components/EmotionCheckIn'
import { Map } from './components/Map'
import { RegionStats } from './components/RegionStats'
import { MapPin } from 'lucide-react'

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0)
  const [selectedCity] = useState<string | undefined>(undefined)

  const handleCheckInSuccess = () => {
    // Trigger map refresh
    setRefreshKey((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-full border border-slate-600 mb-4">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300">Global emotion tracking powered by PostGIS</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            EmoWeather
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Share your emotions and see how people around the world are feeling, right now. Real-time emotion mapping with geographic insights.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Check In Form */}
          <div className="lg:col-span-1">
            <EmotionCheckIn onSuccess={handleCheckInSuccess} />
          </div>

          {/* Center Column - Map */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden shadow-xl h-full">
              <Map key={refreshKey} className="h-96 lg:h-full min-h-96" refreshInterval={5000} />
            </div>
          </div>
        </div>

        {/* Bottom Section - Statistics */}
        <div>
          <RegionStats city={selectedCity} refreshInterval={10000} />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <InfoCard
            icon="🌍"
            title="Global Coverage"
            description="Track emotions from people around the world in real-time."
          />
          <InfoCard
            icon="📊"
            title="Analytics"
            description="Analyze emotional trends by location, time, and demographics."
          />
          <InfoCard
            icon="⚡"
            title="Real-time"
            description="WebSocket-powered live updates with PostGIS spatial indexing."
          />
        </div>
      </div>
    </div>
  )
}

function InfoCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 hover:border-slate-600 transition-colors">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  )
}
