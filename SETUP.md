# EmoWeather Development Setup

Complete guide to setting up the EmoWeather project locally for development.

## 1. Clone Repository

```bash
git clone https://github.com/coiai.inc/EmoWeather.git
cd emoweather
```

## 2. Install Dependencies

```bash
npm install
# or
yarn install
```

## 3. Create Supabase Project

1. Go to https://supabase.com
2. Click "New Project"
3. Fill in:
   - Project name: `emoweather-dev`
   - Database password: (secure password)
   - Region: Choose closest to you
4. Click "Create new project"
5. Wait for setup (~2 minutes)

## 4. Get Supabase Credentials

1. Go to Project Settings → API
2. Copy and save:
   - Project URL (NEXT_PUBLIC_SUPABASE_URL)
   - Anon Key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
   - Service Role Key (keep secure, for functions)

## 5. Run Database Migrations

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Navigate to project
cd path/to/emoweather

# Create link to your project
supabase link --project-id your-project-id

# Run migrations
supabase db push
```

Or manually:
1. Go to Supabase Dashboard → SQL Editor
2. Create new query
3. Copy content from `supabase/migrations/001_init.sql`
4. Run the query

## 6. Create Mapbox Account

1. Go to https://mapbox.com
2. Sign up for free account
3. Go to Account → Tokens
4. Create new token:
   - Name: `EmoWeather Dev`
   - Scopes: `maps:read`
5. Copy the token

## 7. Configure Environment Variables

```bash
# Copy example
cp .env.example .env.local

# Edit .env.local with your credentials
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ0...
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=pk.eyJ...
```

## 8. Enable Geolocation in Browser

For the emotion check-in to work, you need to:
1. Allow geolocation when prompted
2. On `localhost`: Geolocation is restricted to HTTPS/localhost
3. For testing on other networks, use HTTPS with valid certificate

Test geolocation:
```javascript
// In browser console
navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude, pos.coords.longitude)
})
```

## 9. Start Development Server

```bash
npm run dev
```

Open http://localhost:3000

## 10. Testing

### Test Check-In
1. Click "How are you feeling?"
2. Select emotion
3. Add optional comment
4. Click "Share Your Feeling"
5. Allow geolocation access
6. Check map for new marker

### Test Real-time Updates
1. Open in two browser windows
2. Submit check-in in one window
3. See it appear in other window within seconds

### Test Statistics
- Check right panel for emotion trends
- View recent activity

## 11. Deploy Edge Functions (Optional)

For local testing:
```bash
# Terminal 1: Start main app
npm run dev

# Terminal 2: Serve edge functions locally
supabase functions serve
```

Functions available at:
- http://localhost:54321/functions/v1/checkin
- http://localhost:54321/functions/v1/heatmap
- http://localhost:54321/functions/v1/trends
- http://localhost:54321/functions/v1/user-stats

To deploy to Supabase:
```bash
supabase functions deploy checkin
supabase functions deploy heatmap
supabase functions deploy trends
supabase functions deploy user-stats
```

## 12. Database Debugging

### View Tables
```sql
SELECT * FROM checkins LIMIT 10;
SELECT * FROM emotion_stats_hourly LIMIT 10;
```

### Test PostGIS Queries
```sql
-- Find check-ins within 10km of Tokyo
SELECT * FROM checkins
WHERE ST_DWithin(
  location,
  ST_SetSRID(ST_Point(139.6503, 35.6762), 4326),
  10000  -- 10km in meters
);
```

### View Real-time Subscriptions
1. Supabase Dashboard → Realtime
2. Check active subscriptions
3. Monitor message throughput

## 13. Customize for Development

### Change Map Center
Edit `app/components/Map.tsx`:
```typescript
center: [139.6503, 35.6762],  // Tokyo
zoom: 10,
```

### Add Test Data
```sql
INSERT INTO checkins (emotion, lat, lng, city, country_code, comment)
VALUES
  ('happy', 35.6762, 139.6503, 'Tokyo', 'JP', 'Beautiful day!'),
  ('excited', 40.7128, -74.0060, 'New York', 'US', 'Amazing'),
  ('calm', 51.5074, -0.1278, 'London', 'GB', 'Peaceful');
```

### Disable Geolocation for Testing
Edit `app/components/EmotionCheckIn.tsx`:
```typescript
// Replace geolocation with test coordinates
const position = {
  latitude: 35.6762,
  longitude: 139.6503,
}
```

## 14. Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start               # Start production server

# Database
supabase db push        # Push local migrations
supabase db pull        # Pull remote schema
supabase db reset       # Reset to migrations

# Edge Functions
supabase functions serve # Serve locally
supabase functions deploy checkin

# Types
npm run supabase:generate # Generate TypeScript types
```

## 15. Useful VS Code Extensions

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Thunder Client** (API testing)
- **PostgreSQL** (SQL syntax)
- **GitLens**

## 16. Common Issues

### "Cannot find module '@supabase/supabase-js'"
```bash
npm install
```

### Geolocation not working
- Use HTTPS or localhost
- Check browser permissions
- Allow in site settings

### Mapbox map not rendering
- Check token in .env.local
- Verify token has maps:read scope
- Check browser console for errors

### Edge Functions returning 500
```bash
# Check logs
supabase functions serve

# Test endpoint
curl http://localhost:54321/functions/v1/checkin \
  -H "Content-Type: application/json" \
  -d '{"emotion":"happy","lat":35.6762,"lng":139.6503}'
```

### Database connection fails
```bash
# Check connection string
echo $NEXT_PUBLIC_SUPABASE_URL

# Test connection
supabase link --project-id your-id

# Reset connection
rm ~/.supabase/credentials.json
supabase login
```

## 17. Performance Tips

- Use React DevTools Profiler to find bottlenecks
- Monitor Edge Function execution time
- Check database query performance in Supabase Dashboard
- Use `npm run build` to test production build

## 18. Next Steps

1. Read [README.md](README.md) for overview
2. Check [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment
3. Review database schema in `supabase/migrations/001_init.sql`
4. Explore Edge Functions in `supabase/functions/`
5. Start building!

## Getting Help

- **Documentation**: See README.md
- **Database Issues**: Check Supabase docs
- **Mapbox Issues**: See Mapbox documentation
- **Next.js Issues**: Visit next.js docs
- **Supabase Issues**: Use Supabase Discord

---

Happy coding! 🚀
