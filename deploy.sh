#!/bin/bash

# EmoWeather Production Deployment Script
# Handles Vercel and Cloudflare Workers deployments

set -e

PROJECT_DIR="/Users/coiai/.openclaw/workspace/emoweather"
SUPABASE_URL="https://kqdoxoozooedecvtvdzp.supabase.co"
SUPABASE_ANON_KEY="sb_publishable_9yHRGRgRZz-JVdxpTQJFKg_DQuUmhQR"
MAPBOX_TOKEN="pk.eyJ1IjoiY29pYWkiLCJhIjoiY21sNHZsZGhuMDAycDNmcHc2cHJ2NW5vdCJ9.JNuIVGsUZBb8upCO4ztK6w"

echo "=========================================="
echo "🚀 EmoWeather Production Deployment"
echo "=========================================="

cd "$PROJECT_DIR"

# Step 1: Verify build
echo ""
echo "✓ Step 1: Build verification"
if [ -d ".next" ]; then
    echo "✓ .next build directory exists"
else
    echo "✗ Build directory not found - running build..."
    npm run build
fi

# Step 2: Deploy to Cloudflare Workers
echo ""
echo "📦 Step 2: Deploying to Cloudflare Workers"
echo "Running: wrangler deploy"

# Deploy with environment variables
NEXT_PUBLIC_SUPABASE_URL="$SUPABASE_URL" \
NEXT_PUBLIC_SUPABASE_ANON_KEY="$SUPABASE_ANON_KEY" \
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN="$MAPBOX_TOKEN" \
wrangler deploy --env production || {
    echo "⚠️  Cloudflare Workers deployment requires authentication"
    echo "📝 Please run: wrangler login"
}

# Step 3: Output deployment information
echo ""
echo "=========================================="
echo "✅ Deployment Summary"
echo "=========================================="
echo ""
echo "Project Directory: $PROJECT_DIR"
echo "Build Status: ✓ Completed"
echo "Environment Variables:"
echo "  - NEXT_PUBLIC_SUPABASE_URL: $SUPABASE_URL"
echo "  - NEXT_PUBLIC_SUPABASE_ANON_KEY: ••••••••"
echo "  - NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: ••••••••"
echo ""
echo "📍 Vercel Deployment:"
echo "   Run: vercel --prod"
echo "   Requires: vercel login & project link"
echo ""
echo "📍 Cloudflare Workers:"
echo "   Status: Ready for deployment"
echo "   Run: wrangler deploy --env production"
echo ""
echo "🗄️  Supabase Migration:"
echo "   Status: Ready - SQL file at supabase/migrations/001_init.sql"
echo "   Requires: Service role key or Dashboard access"
echo ""
echo "=========================================="
