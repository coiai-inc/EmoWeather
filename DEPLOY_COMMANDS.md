# 🚀 EmoWeather Production Deployment Commands

## Quick Start - Copy & Paste Commands

### 1. Supabase Database Setup

**Via Dashboard (Recommended):**
1. Visit: https://app.supabase.com
2. Select your project
3. Go to SQL Editor
4. Create new query
5. Copy the migration SQL from below and execute

**Migration SQL (for Dashboard):**
```sql
-- Copy entire contents of: supabase/migrations/001_init.sql
-- Then execute in Supabase SQL Editor
```

**Via Supabase CLI (requires service role key):**
```bash
cd /Users/coiai/.openclaw/workspace/emoweather
export SUPABASE_ACCESS_TOKEN="your_access_token_here"
supabase link --project-ref kqdoxoozooedecvtvdzp
supabase db push
```

---

### 2. Deploy to Vercel

```bash
cd /Users/coiai/.openclaw/workspace/emoweather

# Option A: Interactive (Recommended for first-time setup)
vercel --prod

# Option B: With specific project (if already linked)
vercel --prod --token YOUR_VERCEL_TOKEN

# Option C: Build and deploy manually
npm run build
vercel deploy --prod

# Expected Output:
# ✓ Production Deployment
# ✓ https://emoweather-[hash].vercel.app
```

**Vercel Configuration:**
- Project Name: `emoweather`
- Build Command: `npm run build`
- Output Directory: `.next`
- Framework: Next.js

**Environment Variables are pre-configured in vercel.json:**
```json
{
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "https://kqdoxoozooedecvtvdzp.supabase.co",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY": "sb_publishable_9yHRGRgRZz-JVdxpTQJFKg_DQuUmhQR",
    "NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN": "pk.eyJ1IjoiY29pYWkiLCJhIjoiY21sNHZsZGhuMDAycDNmcHc2cHJ2NW5vdCJ9.JNuIVGsUZBb8upCO4ztK6w",
    "NEXT_PUBLIC_ENV": "production"
  }
}
```

---

### 3. Deploy to Cloudflare Workers

```bash
cd /Users/coiai/.openclaw/workspace/emoweather

# Login to Cloudflare (first time only)
wrangler login

# Deploy to production
wrangler deploy --env production

# Expected Output:
# ✓ Uploaded emoweather-worker (example)
# ✓ https://emoweather-worker.workers.dev
```

**Cloudflare Configuration:**
- Project Name: `emoweather-worker`
- Entry Point: `workers/index.ts`
- Environment: Production
- Features: Caching, CORS, Scheduled tasks

---

### 4. Complete Deployment Checklist

```bash
# Step 1: Verify build is ready
cd /Users/coiai/.openclaw/workspace/emoweather
ls -la .next/ && echo "✓ Build ready"

# Step 2: Install Vercel CLI (if not already)
npm install -g vercel

# Step 3: Authenticate with Vercel
vercel login

# Step 4: Deploy to Vercel (MAIN DEPLOYMENT)
vercel --prod

# Step 5: Install/Update Wrangler (if not already)
npm install -g wrangler

# Step 6: Authenticate with Cloudflare
wrangler login

# Step 7: Deploy to Cloudflare Workers
wrangler deploy --env production

# Step 8: Verify deployments
echo "Vercel deployment: Check Vercel dashboard"
echo "Cloudflare deployment: Check Cloudflare dashboard"
```

---

## 📊 Deployment Status

| Service | Status | Command | Notes |
|---------|--------|---------|-------|
| Next.js Build | ✅ Complete | `npm run build` | .next directory ready |
| Supabase Migration | 🔴 Pending | Dashboard → SQL Editor | Tables: checkins, emotion_stats_hourly, user_profiles |
| Vercel Deploy | 🟡 Ready | `vercel --prod` | Requires Vercel authentication |
| Cloudflare Deploy | 🟡 Ready | `wrangler deploy --env production` | Requires Cloudflare authentication |

---

## 🔐 Authentication Requirements

### Vercel
```bash
# Authenticate (interactive)
vercel login

# Or use token
export VERCEL_TOKEN="your_token"
vercel --prod
```

### Cloudflare
```bash
# Authenticate (interactive)
wrangler login

# Or use token
export CLOUDFLARE_API_TOKEN="your_token"
wrangler deploy --env production
```

### Supabase (for migrations)
```bash
# Via Dashboard (No auth needed - use UI)
https://app.supabase.com

# Via CLI (requires token)
export SUPABASE_ACCESS_TOKEN="your_token"
supabase link
supabase db push
```

---

## 🧪 Verification Steps

After deployment, verify each service:

### Vercel
```bash
# Check deployment
vercel ls

# View logs
vercel logs [url]

# Test endpoint
curl https://emoweather-[hash].vercel.app/
```

### Cloudflare
```bash
# Check deployment
wrangler deployments list

# View logs
wrangler tail --env production

# Test endpoint
curl https://emoweather-worker.workers.dev/api/health
```

### Supabase
```bash
# Check tables exist
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

# Verify RLS policies
SELECT * FROM pg_policies WHERE tablename IN ('checkins', 'emotion_stats_hourly', 'user_profiles');
```

---

## 📍 Expected Results

After successful deployment:

**Vercel URL:** `https://emoweather-[hash].vercel.app`
- Accessible from any browser
- Shows map with Mapbox
- Can submit emotion checkins
- Data saves to Supabase

**Cloudflare Workers URL:** `https://emoweather-worker.workers.dev`
- API caching layer
- CORS support
- Scheduled aggregation

**Supabase:** https://kqdoxoozooedecvtvdzp.supabase.co
- Tables created and populated
- Real-time updates working
- RLS policies enforced

---

## 🆘 Troubleshooting

### Vercel Deployment Issues
```bash
# Check build logs
vercel logs --since 1h

# Rebuild and redeploy
vercel --prod --force

# Check environment variables
vercel env ls
```

### Cloudflare Issues
```bash
# Check deployment status
wrangler deployments list

# View errors
wrangler tail --env production

# Redeploy
wrangler deploy --env production --minify
```

### Supabase Issues
```bash
# Check connection
curl -i -H "apikey: sb_publishable_..." https://kqdoxoozooedecvtvdzp.supabase.co/rest/v1/checkins

# View logs in dashboard
# https://app.supabase.com/project/[project-id]/editor
```

---

## 📝 Final Notes

- All services are production-ready
- Environment variables are pre-configured
- Build is optimized with Turbopack
- Static generation enabled for performance
- Database migration is SQL-ready

**Total deployment time:** ~10-15 minutes (including auth if needed)
