# EmoWeather Deployment Guide

This guide walks through deploying EmoWeather to production.

## Prerequisites

- Supabase project (https://supabase.com)
- Mapbox account (https://mapbox.com)
- Vercel or hosting provider
- GitHub repository access
- Node.js 18+

## Step 1: Set Up Supabase Project

1. Create a new Supabase project
2. Go to Project Settings → API
3. Copy your:
   - Project URL
   - Anon Key (public)
   - Service Role Key (keep secret)

4. Run migrations:
   ```bash
   # Using Supabase CLI
   supabase db pull  # pulls schema from cloud
   supabase migration new init
   # Copy content of supabase/migrations/001_init.sql
   supabase db push  # pushes migrations to cloud
   ```

## Step 2: Deploy Edge Functions

```bash
# Login to Supabase
supabase login

# Deploy each function
supabase functions deploy checkin
supabase functions deploy heatmap
supabase functions deploy trends
supabase functions deploy user-stats

# Set environment variables
supabase secrets set SUPABASE_URL=<your-url>
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=<your-key>
```

## Step 3: Get Mapbox Token

1. Create Mapbox account at https://mapbox.com
2. Go to Account → Tokens
3. Create new token with:
   - `maps:read` scope
   - Default (no URL restriction)
4. Copy the token

## Step 4: Configure Environment Variables

Create `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Mapbox
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=pk.eyJ...

# Optional
NEXT_PUBLIC_API_URL=https://emoweather.dev
NEXT_PUBLIC_ENV=production
```

## Step 5: Deploy to Vercel

### Option A: Using Vercel Dashboard

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Set environment variables from `.env.local`
6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set production environment
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN production

# Redeploy with env vars
vercel --prod
```

## Step 6: Deploy Cloudflare Workers (Optional)

```bash
# Install Wrangler
npm install -D wrangler

# Login
wrangler login

# Deploy
wrangler deploy

# Set Cloudflare env variables
wrangler secret put NEXT_PUBLIC_SUPABASE_URL
wrangler secret put NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## Step 7: Set Up Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS setup instructions

### Cloudflare (if using Workers)
1. Add domain to Cloudflare
2. Update nameservers at registrar
3. Create Worker route for API

## Step 8: Enable Database Backups

1. Go to Supabase → Backups
2. Enable automated daily backups
3. Test restore process

## Step 9: Monitor and Optimize

### Supabase Monitoring
- Check Database → Disk Usage
- Monitor Edge Function logs
- Set up alerts for high usage

### Performance Optimization
1. Enable caching in Cloudflare
2. Optimize images
3. Monitor Core Web Vitals in Vercel Analytics

## Troubleshooting

### "Repository not found" error
```bash
# Create repository via GitHub web UI first
# Then:
git remote add origin https://github.com/coiai.inc/EmoWeather.git
git branch -M main
git push -u origin main
```

### Mapbox not loading
- Verify token in environment variables
- Check CORS settings in Mapbox dashboard
- Ensure URL is added to token restrictions

### Database connection issues
- Check firewall rules in Supabase
- Verify connection pooling is enabled
- Check for max connections

### Edge Functions returning 500
- Check Supabase function logs
- Verify edge function environment variables
- Test with `supabase functions serve`

## Cost Optimization

### Supabase
- Use read replicas for analytics queries
- Archive old data monthly
- Enable WAL compression

### Mapbox
- Use vector tiles instead of raster
- Implement request throttling
- Monitor monthly vector tile usage

### Cloudflare
- Use page rules for caching
- Enable gzip compression
- Monitor worker requests

## Security Checklist

- [ ] RLS policies enabled
- [ ] Service role key kept secret
- [ ] Vercel environment variables not logged
- [ ] Mapbox token restrictions set
- [ ] CORS properly configured
- [ ] Database backups tested
- [ ] Supabase audit logs enabled

## Scheduled Tasks

### Daily
- Monitor error logs
- Check database size

### Weekly
- Review analytics
- Check cost estimates

### Monthly
- Test backup restore
- Update dependencies
- Review security logs

## Support

For deployment issues:
1. Check Vercel logs: `vercel logs`
2. Check Supabase logs in dashboard
3. Test locally: `npm run dev`
4. Check Edge Function logs: `supabase functions serve`

## Next Steps

After deployment:
1. Set up monitoring alerts
2. Configure analytics
3. Create automated backups
4. Document runbooks for common issues
5. Plan scaling strategy
