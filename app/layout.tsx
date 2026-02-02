import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EmoWeather - Global Emotion Map',
  description: 'Track and visualize emotions around the world in real-time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              EmoWeather
            </h1>
            <p className="text-slate-400 text-sm">Global emotion mapping in real-time</p>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-slate-700 bg-slate-800/50 mt-12">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center text-slate-400 text-sm">
            <p>&copy; 2024 EmoWeather. All emotions welcome.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
