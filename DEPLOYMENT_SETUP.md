# EmoWeather Production Deployment - Setup Instructions

## Current Status

✅ **Completed:**
- Next.js application build successful
- All source code ready for deployment
- Environment variables configured
- TypeScript compilation successful

## Remaining Deployment Steps

### 1. Supabase Database Setup

The Supabase project has been configured with the following credentials:
- **Project URL:** https://kqdoxoozooedecvtvdzp.supabase.co
- **Anon Key:** sb_publishable_9yHRGRgRZz-JVdxpTQJFKg_DQuUmhQR
- **Region:** AWS (assumed from project URL)

**To run migrations:**

1. Go to Supabase Dashboard: https://app.supabase.com/projects
2. Select your project (kqdoxoozooedecvtvdzp)
3. Navigate to **SQL Editor**
4. Create a new query and copy-paste the migration SQL from:
   - File: `/supabase/migrations/001_init.sql`
5. Execute the SQL

**OR use Supabase CLI:**
```bash
export SUPABASE_ACCESS_TOKEN=your_token_here
export SUPABASE_DB_PASSWORD=your_db_password_here
cd emoweather
supabase db push --project-ref kqdoxoozooedecvtvdzp
```

### 2. Vercel Deployment

The application is built and ready for deployment to Vercel.

**Option A: Using Vercel Web Dashboard**
1. Visit https://vercel.com
2. Click "Add New" → "Project"
3. Import the GitHub repository: https://github.com/coiai.inc/EmoWeather
4. Set environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: https://kqdoxoozooedecvtvdzp.supabase.co
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: sb_publishable_9yHRGRgRZz-JVdxpTQJFKg_DQuUmhQR
   - `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`: pk.eyJ1IjoiY29pYWkiLCJhIjoiY21sNHZsZGhuMDAycDNmcHc2cHJ2NW5vdCJ9.JNuIVGsUZBb8upCO4ztK6w
5. Click "Deploy"

**Option B: Using Vercel CLI**
```bash
cd emoweather
vercel login
vercel --prod \
  --env NEXT_PUBLIC_SUPABASE_URL=https://kqdoxoozooedecvtvdzp.supabase.co \
  --env NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_9yHRGRgRZz-JVdxpTQJFKg_DQuUmhQR \
  --env NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=pk.eyJ1IjoiY29pYWkiLCJhIjoiY21sNHZsZGhuMDAycDNmcHc2cHJ2NW5vdCJ9.JNuIVGsUZBb8upCO4ztK6w
```

**Expected Output:**
- Deployment URL (e.g., https://emoweather-production.vercel.app)

### 3. Cloudflare Workers Deployment

**Note:** Requires Cloudflare account with Workers enabled

```bash
cd emoweather
wrangler login
wrangler deploy --env production
```

**Expected Output:**
- Worker URL (e.g., https://emoweather-worker.your-domain.workers.dev)

### 4. Post-Deployment Configuration

After deployment, verify:

1. **Database Connection:**
   - Check Supabase database for tables:
     - `checkins`
     - `emotion_stats_hourly`
     - `user_profiles`

2. **Frontend:**
   - Visit Vercel deployment URL
   - Verify map loads (Mapbox)
   - Check emotion check-in form
   - Test emotion submission

3. **Real-time Features:**
   - Verify Supabase real-time subscriptions work
   - Check WebSocket connections in browser DevTools

4. **APIs:**
   - Verify Supabase RLS policies are enabled
   - Test Cloudflare Worker endpoints

## Environment Variables

All environment variables are configured in:
- `.env.local` (development)
- `vercel.json` (Vercel production)
- `wrangler.toml` (Cloudflare Workers)

### Core Variables:
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Public API key
- `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`: Mapbox API token
- `NEXT_PUBLIC_ENV`: Environment name (production/development)

## Security Checklist

- [ ] Supabase RLS policies enabled
- [ ] Mapbox token restrictions configured
- [ ] CORS properly configured
- [ ] Environment variables not exposed in build
- [ ] Database backups enabled in Supabase
- [ ] API rate limiting configured
- [ ] Error logging configured

## Troubleshooting

### "Cannot fetch checkins" Error
- Check Supabase project is accessible
- Verify Anon Key is correct
- Check RLS policies on `checkins` table

### "Mapbox: Invalid Access Token"
- Verify token in environment variables
- Check Mapbox dashboard token restrictions
- Ensure CORS is enabled for your deployment domain

### "Real-time subscription not working"
- Check Supabase real-time is enabled
- Verify `postgres_changes` permissions in RLS

### Build Failures
- Clear `.next/` and `node_modules/`
- Run `npm install` again
- Check TypeScript compilation: `npm run build`

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Cloudflare Workers Documentation](https://workers.cloudflare.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

## Next Steps

1. Complete OAuth authentication for Vercel and Cloudflare
2. Execute Supabase migrations
3. Test all deployment endpoints
4. Configure custom domain (if applicable)
5. Set up monitoring and alerting
6. Document production runbooks
