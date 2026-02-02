/**
 * EmoWeather Cloudflare Workers
 * Handles caching, routing, and request optimization
 */

interface Env {
  ENVIRONMENT: string
}

// Cache configuration
const CACHE_CONFIG = {
  'heatmap': 300, // 5 minutes
  'trends': 600, // 10 minutes
  'stats': 1800, // 30 minutes
  'default': 60, // 1 minute
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    // CORS headers
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      })
    }

    try {
      // Route to Supabase Edge Functions
      if (url.pathname.startsWith('/api/')) {
        return handleApi(request, url)
      }

      // Route to Next.js application
      return handleApp(request, url)
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: 'Internal Server Error',
          message: error instanceof Error ? error.message : 'Unknown error',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    }
  },

  async scheduled(event: ScheduledEvent, env: Env): Promise<void> {
    // Scheduled task - aggregate hourly statistics
    console.log('Running scheduled aggregation task')

    // This would trigger the Supabase function to aggregate stats
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/aggregate-stats`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
      })
      console.log('Aggregation completed')
    } catch (error) {
      console.error('Aggregation failed:', error)
    }
  },
}

async function handleApi(request: Request, url: URL): Promise<Response> {
  const pathname = url.pathname

  // Extract cache key from path
  let cacheKey = 'default'
  if (pathname.includes('heatmap')) cacheKey = 'heatmap'
  else if (pathname.includes('trends')) cacheKey = 'trends'
  else if (pathname.includes('stats')) cacheKey = 'stats'

  const ttl = CACHE_CONFIG[cacheKey as keyof typeof CACHE_CONFIG] || CACHE_CONFIG.default

  // Try cache first (for GET requests)
  if (request.method === 'GET') {
    const cacheUrl = new URL(url)
    const cache = caches.default
    const cachedResponse = await cache.match(cacheUrl)

    if (cachedResponse && !isStale(cachedResponse)) {
      return cachedResponse
    }
  }

  // Route to Supabase Edge Functions
  const targetUrl = new URL(request.url)
  targetUrl.hostname = 'your-project.supabase.co'

  const response = await fetch(new Request(targetUrl, request))

  // Cache successful responses
  if (request.method === 'GET' && response.ok) {
    const clonedResponse = response.clone()
    const cache = caches.default

    // Add cache control headers
    const headers = new Headers(clonedResponse.headers)
    headers.set('Cache-Control', `public, max-age=${ttl}`)
    headers.set('X-Cached-At', new Date().toISOString())

    await cache.put(
      new URL(request.url),
      new Response(clonedResponse.body, {
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
        headers,
      })
    )
  }

  return response
}

async function handleApp(request: Request, url: URL): Promise<Response> {
  // Route to Next.js application
  const targetUrl = new URL(request.url)
  targetUrl.hostname = 'localhost:3000' // or your production domain

  return fetch(new Request(targetUrl, request))
}

function isStale(response: Response): boolean {
  const cacheControl = response.headers.get('Cache-Control')
  const cacheTime = response.headers.get('X-Cached-At')

  if (!cacheControl || !cacheTime) return true

  const maxAge = parseInt(cacheControl.match(/max-age=(\d+)/)?.[1] || '0')
  const cachedAt = new Date(cacheTime).getTime()
  const now = new Date().getTime()

  return now - cachedAt > maxAge * 1000
}
