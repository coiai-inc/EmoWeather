import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

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
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-br from-black via-purple-950 to-black text-white min-h-screen">
        <Providers>
          <header className="border-b border-purple-500/20 bg-black/40 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-5">
              <h1 className="text-4xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                EmoWeather
              </h1>
              <p className="text-purple-300/60 text-sm mt-1">Global emotion mapping in real-time</p>
            </div>
          </header>
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="border-t border-purple-500/20 bg-black/40 backdrop-blur-md mt-16">
            <div className="max-w-7xl mx-auto px-4 py-8 text-center text-purple-300/60 text-sm">
              <p>&copy; 2024 EmoWeather. All emotions welcome. ✨</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
