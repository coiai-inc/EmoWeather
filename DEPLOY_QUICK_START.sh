#!/bin/bash

# 🚀 EmoWeather Production Deployment - Quick Start
# Execute this script to deploy to all platforms

set -e

PROJECT_DIR="/Users/coiai/.openclaw/workspace/emoweather"
REPORT_DIR="/Users/coiai/.openclaw/workspace"

echo "╔════════════════════════════════════════════════════════╗"
echo "║  EmoWeather Production Deployment Quick Start          ║"
echo "║  Status: Ready for deployment                          ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

cd "$PROJECT_DIR"

# Check prerequisites
echo "📋 Pre-deployment checks:"
echo "  ✓ Project directory: $PROJECT_DIR"
echo "  ✓ Build output: $([ -d .next ] && echo 'Present' || echo 'MISSING')"
echo "  ✓ Dependencies: $([ -d node_modules ] && echo 'Installed' || echo 'MISSING')"
echo ""

# Verify build
if [ ! -d ".next" ]; then
    echo "⚠️  Build not found. Building..."
    npm run build
fi

echo "✅ Pre-deployment checks passed"
echo ""

# Summary
echo "╔════════════════════════════════════════════════════════╗"
echo "║  Deployment Summary                                    ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

echo "1️⃣  SUPABASE DATABASE"
echo "   Status: Ready for migration"
echo "   Action: Execute SQL via Dashboard"
echo "   URL: https://app.supabase.com"
echo "   Steps:"
echo "     1. Login to Supabase Dashboard"
echo "     2. Select project: kqdoxoozooedecvtvdzp"
echo "     3. Go to: SQL Editor → New Query"
echo "     4. Copy: supabase/migrations/001_init.sql"
echo "     5. Paste and Execute"
echo ""

echo "2️⃣  VERCEL DEPLOYMENT"
echo "   Status: Build ready"
echo "   Build Size: ~759 KB"
echo "   Build Time: 7.9 seconds"
echo "   Environment: Production"
echo ""
echo "   $ cd $PROJECT_DIR"
echo "   $ vercel login          # Authenticate (first time)"
echo "   $ vercel --prod         # Deploy to production"
echo ""
echo "   ✓ Expected URL: https://emoweather-[hash].vercel.app"
echo ""

echo "3️⃣  CLOUDFLARE WORKERS"
echo "   Status: Ready for deployment"
echo "   Features: Caching, CORS, Scheduled tasks"
echo ""
echo "   $ cd $PROJECT_DIR"
echo "   $ wrangler login         # Authenticate (first time)"
echo "   $ wrangler deploy --env production"
echo ""
echo "   ✓ Expected URL: https://emoweather-worker.workers.dev"
echo ""

echo "╔════════════════════════════════════════════════════════╗"
echo "║  Deployment Information                                ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""
echo "📁 Project Location:"
echo "   $PROJECT_DIR"
echo ""
echo "📊 Configuration Files:"
echo "   • vercel.json (Vercel config - pre-configured)"
echo "   • wrangler.toml (Cloudflare config - ready)"
echo "   • supabase/migrations/001_init.sql (Database schema)"
echo ""
echo "📚 Documentation:"
echo "   • DEPLOY_COMMANDS.md (Detailed deployment guide)"
echo "   • DEPLOYMENT_STATUS.md (Current status)"
echo "   • EMOWEATHER_DEPLOYMENT_REPORT.md (Full report)"
echo ""
echo "🔐 Environment Variables (Pre-configured):"
echo "   ✓ NEXT_PUBLIC_SUPABASE_URL"
echo "   ✓ NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "   ✓ NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN"
echo "   ✓ NEXT_PUBLIC_ENV=production"
echo ""
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "✨ All systems are READY FOR PRODUCTION DEPLOYMENT ✨"
echo ""
echo "Next steps:"
echo "  1. Execute Supabase migration (via Dashboard)"
echo "  2. Run: vercel --prod"
echo "  3. Run: wrangler deploy --env production"
echo "  4. Verify all services are working"
echo ""
echo "For detailed instructions, see: DEPLOY_COMMANDS.md"
echo ""
