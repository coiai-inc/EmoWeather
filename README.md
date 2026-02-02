# EmoWeather 🌍💭

> Global emotion mapping in real-time

EmoWeather is a web application that tracks and visualizes emotions from people around the world. Users check in with their current emotional state along with their location, creating a real-time global emotion heatmap.

## Features ✨

- **Real-time Emotion Tracking**: Check in with your current emotion instantly
- **Global Heatmap**: Visualize emotions across the world on an interactive Mapbox map
- **Geographic Analytics**: Analyze emotion trends by region and city using PostGIS
- **Hourly Statistics**: Automated aggregation of emotional data by location and time
- **Live Updates**: WebSocket-powered real-time data synchronization via Supabase
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Privacy-Focused**: Minimal data collection, no personal information stored

## Tech Stack 🛠️

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Mapbox GL** - Interactive mapping
- **Lucide React** - Icon library

### Backend
- **Supabase** - PostgreSQL database with real-time capabilities
- **PostGIS** - Geographic spatial queries
- **Edge Functions** - Serverless API endpoints
- **Row-Level Security (RLS)** - Data privacy and security

### Infrastructure
- **Cloudflare Workers** - Edge computing for caching and routing
- **Vercel** - Hosting and deployment (recommended)

## Architecture 🏗️

```
EmoWeather/
├── app/                          # Next.js App Router
│   ├── components/               # React components
│   │   ├── EmotionCheckIn.tsx   # Emotion selection form
│   │   ├── Map.tsx              # Mapbox integration
│   │   └── RegionStats.tsx      # Statistics display
│   ├── lib/                      # Utility functions
│   │   └── supabase.ts          # Supabase client
│   ├── types/                    # TypeScript types
│   │   └── index.ts
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── supabase/
│   ├── migrations/              # Database migrations
│   │   └── 001_init.sql        # Initial schema
│   └── functions/               # Edge Functions
│       ├── checkin/             # POST emotion check-in
│       ├── heatmap/             # GET emotion heatmap
│       ├── trends/              # GET regional trends
│       └── user-stats/          # GET user statistics
├── workers/                     # Cloudflare Workers
│   └── index.ts                 # Caching & routing
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── wrangler.toml                # Cloudflare config
└── .env.example
```

## Database Schema 📊

### Tables

**checkins**
- Core data: emotions, locations, timestamps
- PostGIS GEOGRAPHY column for spatial queries
- Row-level security for user data

**emotion_stats_hourly**
- Pre-aggregated statistics by hour and city
- Count and average location for each emotion
- Optimized for dashboard queries

**user_profiles**
- User metadata and statistics
- Optional: avatars, display names, preferences

## Getting Started 🚀

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (free tier available)
- Mapbox account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/coiai.inc/EmoWeather.git
   cd emoweather
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Fill in your credentials:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
   - `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` - Your Mapbox access token

4. **Set up Supabase database**
   ```bash
   # Run migrations
   supabase migration up
   ```

5. **Deploy Edge Functions**
   ```bash
   supabase functions deploy checkin
   supabase functions deploy heatmap
   supabase functions deploy trends
   supabase functions deploy user-stats
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000`

## API Endpoints 🔌

### Checkin
```
POST /functions/v1/checkin
{
  "emotion": "happy",
  "lat": 35.6762,
  "lng": 139.6503,
  "city": "Tokyo",
  "country_code": "JP",
  "comment": "Having a great day!"
}
```

### Heatmap
```
GET /functions/v1/heatmap?hours=24&bbox=139,35,140,36
```

### Trends
```
GET /functions/v1/trends/:city
```

### User Stats
```
GET /functions/v1/user/stats
Authorization: Bearer <token>
```

## Deployment 📦

### Vercel (Recommended)
```bash
vercel link
vercel deploy
```

### Docker
```bash
docker build -t emoweather .
docker run -p 3000:3000 emoweather
```

### Cloudflare Pages
```bash
npm run build
wrangler pages deploy dist/
```

## Database Optimization 🏃

The application uses several optimization techniques:

1. **PostGIS Spatial Indexes**
   - `GIST` index on `location` column
   - Enables fast geographic queries (e.g., "find emotions near me")

2. **Hourly Aggregation**
   - Pre-computed statistics reduce query load
   - Scheduled function runs every hour

3. **Connection Pooling**
   - Supabase manages connections efficiently
   - Recommended: 2-5 concurrent connections

4. **Caching Strategy**
   - Cloudflare Workers cache API responses
   - Cache TTL: 5 minutes for heatmap, 30 minutes for stats

## Cost Estimation 💰

**Monthly cost** (free tier used when possible):

- **Supabase**: ~$0 (free tier)
  - 500MB database size
  - 1GB egress
  - Unlimited API calls
  
- **Mapbox**: ~$0-50 (free tier: 25,000 requests/month)
  
- **Cloudflare**: ~$0 (free tier)
  - Unlimited workers
  
- **Vercel**: ~$0 (free tier)

**Total**: ~$0-50/month for development

## Security 🔒

- Row-Level Security (RLS) policies enforce data access
- Edge Functions validate input
- No sensitive data in environment variables
- CORS headers prevent cross-origin attacks
- Anonymous authentication for guest checkins

## Roadmap 🗺️

- [ ] User authentication (email/OAuth)
- [ ] User profiles and history
- [ ] Emotion categories and subcategories
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Push notifications for trending emotions
- [ ] Voice feedback integration
- [ ] Multi-language support

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

MIT License - see LICENSE file for details

## Support 💬

- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions
- **Email**: hello@emoweather.dev

## Acknowledgments 🙏

- Supabase for the incredible backend platform
- Mapbox for mapping technology
- Tailwind CSS for beautiful styling
- The open-source community for amazing tools

---

Made with 💚 by the EmoWeather team
