#!/bin/bash

# EmoWeather Production Deployment Script
# This script automates the deployment process for EmoWeather

set -e  # Exit on error

echo "🚀 EmoWeather Production Deployment"
echo "===================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check environment variables
echo "📋 Checking configuration..."
if [ -z "$NEXT_PUBLIC_SUPABASE_URL" ]; then
  echo -e "${YELLOW}⚠️  NEXT_PUBLIC_SUPABASE_URL not set${NC}"
  export NEXT_PUBLIC_SUPABASE_URL="https://kqdoxoozooedecvtvdzp.supabase.co"
fi

if [ -z "$NEXT_PUBLIC_SUPABASE_ANON_KEY" ]; then
  echo -e "${YELLOW}⚠️  NEXT_PUBLIC_SUPABASE_ANON_KEY not set${NC}"
  export NEXT_PUBLIC_SUPABASE_ANON_KEY="sb_publishable_9yHRGRgRZz-JVdxpTQJFKg_DQuUmhQR"
fi

if [ -z "$NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN" ]; then
  echo -e "${YELLOW}⚠️  NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN not set${NC}"
  export NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN="pk.eyJ1IjoiY29pYWkiLCJhIjoiY21sNHZsZGhuMDAycDNmcHc2cHJ2NW5vdCJ9.JNuIVGsUZBb8upCO4ztK6w"
fi

echo -e "${GREEN}✓ Configuration loaded${NC}"
echo ""

# Step 1: Build
echo "🔨 Step 1: Building application..."
npm run build
echo -e "${GREEN}✓ Build successful${NC}"
echo ""

# Step 2: Supabase Migration
echo "🗄️  Step 2: Supabase Database Migration..."
echo "NOTE: Run this manually in Supabase Dashboard if not authenticated via CLI"
echo "  File: supabase/migrations/001_init.sql"
echo "  Dashboard: https://app.supabase.com/project/kqdoxoozooedecvtvdzp/sql/new"
echo ""

# Attempt CLI migration if authenticated
if command -v supabase &> /dev/null; then
  if [ -n "$SUPABASE_ACCESS_TOKEN" ]; then
    echo "Attempting migration via Supabase CLI..."
    supabase db push --project-ref kqdoxoozooedecvtvdzp || echo -e "${YELLOW}⚠️  Migration failed. Complete manually.${NC}"
  else
    echo -e "${YELLOW}⚠️  SUPABASE_ACCESS_TOKEN not set. Skipping CLI migration.${NC}"
  fi
fi
echo ""

# Step 3: Vercel Deployment
echo "🌐 Step 3: Vercel Deployment..."
if command -v vercel &> /dev/null; then
  if [ -n "$VERCEL_TOKEN" ]; then
    echo "Deploying to Vercel..."
    vercel deploy --prod --token="$VERCEL_TOKEN"
    VERCEL_URL=$(vercel ls --token="$VERCEL_TOKEN" | grep "emoweather" | head -1 | awk '{print $2}')
    echo -e "${GREEN}✓ Vercel Deployment successful${NC}"
    echo "  URL: $VERCEL_URL"
  else
    echo -e "${YELLOW}⚠️  VERCEL_TOKEN not set${NC}"
    echo "  Please deploy manually:"
    echo "  1. Run: vercel login"
    echo "  2. Run: vercel --prod"
  fi
else
  echo -e "${YELLOW}⚠️  Vercel CLI not installed${NC}"
  echo "  Install: npm install -g vercel"
fi
echo ""

# Step 4: Cloudflare Workers Deployment
echo "☁️  Step 4: Cloudflare Workers Deployment..."
if command -v wrangler &> /dev/null; then
  if [ -n "$CLOUDFLARE_API_TOKEN" ]; then
    echo "Deploying to Cloudflare Workers..."
    export CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN"
    wrangler deploy
    echo -e "${GREEN}✓ Cloudflare Deployment successful${NC}"
  else
    echo -e "${YELLOW}⚠️  CLOUDFLARE_API_TOKEN not set${NC}"
    echo "  Please deploy manually:"
    echo "  1. Run: wrangler login"
    echo "  2. Run: wrangler deploy"
  fi
else
  echo -e "${YELLOW}⚠️  Wrangler CLI not installed${NC}"
  echo "  Install: npm install -g wrangler"
fi
echo ""

# Summary
echo "📊 Deployment Summary"
echo "===================="
echo -e "${GREEN}✓ Build: Successful${NC}"
echo "⚠️  Supabase Migration: Manual step required"
echo "⚠️  Vercel: Authentication required"
echo "⚠️  Cloudflare: Authentication required"
echo ""
echo "📝 Next Steps:"
echo "  1. Complete authentication for Vercel and Cloudflare"
echo "  2. Run Supabase migrations in SQL Editor"
echo "  3. Test production URLs"
echo "  4. Configure custom domain (if applicable)"
echo ""
echo -e "${GREEN}🎉 Deployment preparation complete!${NC}"
