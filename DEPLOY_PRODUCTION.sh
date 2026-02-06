#!/bin/bash

# EmoWeather 本番デプロイスクリプト
# 使用方法: ./DEPLOY_PRODUCTION.sh [step]
# step: supabase, vercel, cloudflare, all

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_ROOT"

# カラー定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ロギング関数
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Supabase マイグレーション実行
deploy_supabase() {
    log_info "Supabase DB マイグレーションを開始します..."
    
    SUPABASE_URL="https://kqdoxoozooedecvtvdzp.supabase.co"
    PROJECT_REF="kqdoxoozooedecvtvdzp"
    MIGRATION_FILE="$PROJECT_ROOT/supabase/migrations/001_init.sql"
    
    if [ ! -f "$MIGRATION_FILE" ]; then
        log_error "マイグレーションファイルが見つかりません: $MIGRATION_FILE"
        return 1
    fi
    
    log_info "マイグレーション方法を選択してください:"
    echo "1) Supabase ダッシュボード（推奨）"
    echo "2) PostgreSQL CLI (psql)"
    echo "3) Supabase CLI"
    read -p "選択 (1-3): " choice
    
    case $choice in
        1)
            log_info "ダッシュボード URL: https://app.supabase.com/project/$PROJECT_REF"
            log_info "以下のファイルの内容を SQL Editor にペーストしてください:"
            log_info "$MIGRATION_FILE"
            echo ""
            log_warning "手動実行が必要です"
            ;;
        2)
            log_info "PostgreSQL CLI で実行します..."
            read -s -p "Supabase PostgreSQL パスワードを入力: " PGPASSWORD
            export PGPASSWORD
            
            psql -h kqdoxoozooedecvtvdzp.supabase.co \
                 -U postgres \
                 -d postgres \
                 -f "$MIGRATION_FILE"
            
            if [ $? -eq 0 ]; then
                log_success "Supabase マイグレーション完了！"
            else
                log_error "Supabase マイグレーション失敗"
                return 1
            fi
            ;;
        3)
            log_info "Supabase CLI で実行します..."
            
            if ! command -v supabase &> /dev/null; then
                log_error "Supabase CLI がインストールされていません"
                log_info "インストール: https://supabase.com/docs/guides/cli/getting-started"
                return 1
            fi
            
            supabase link --project-ref "$PROJECT_REF"
            supabase db push
            
            if [ $? -eq 0 ]; then
                log_success "Supabase マイグレーション完了！"
            else
                log_error "Supabase マイグレーション失敗"
                return 1
            fi
            ;;
        *)
            log_error "無効な選択です"
            return 1
            ;;
    esac
}

# Vercel デプロイ実行
deploy_vercel() {
    log_info "Vercel デプロイを開始します..."
    
    if ! command -v vercel &> /dev/null; then
        log_error "Vercel CLI がインストールされていません"
        log_info "インストール: npm install -g vercel"
        return 1
    fi
    
    log_info "デプロイ方法を選択してください:"
    echo "1) GitHub 自動デプロイ（推奨）"
    echo "2) Vercel CLI（ブラウザ認証）"
    echo "3) Vercel CLI（トークン認証）"
    read -p "選択 (1-3): " choice
    
    case $choice in
        1)
            log_info "GitHub リポジトリが最新か確認します..."
            git status
            log_warning "GitHub にプッシュされている必要があります"
            log_info "Vercel ダッシュボード: https://vercel.com/dashboard"
            ;;
        2)
            log_info "Vercel ブラウザ認証を開始します..."
            vercel login
            vercel --prod --yes
            
            if [ $? -eq 0 ]; then
                log_success "Vercel デプロイ完了！"
            else
                log_error "Vercel デプロイ失敗"
                return 1
            fi
            ;;
        3)
            log_info "トークンを入力してください（https://vercel.com/account/tokens）"
            read -s -p "Vercel Token: " VERCEL_TOKEN
            export VERCEL_TOKEN
            
            vercel --prod --yes
            
            if [ $? -eq 0 ]; then
                log_success "Vercel デプロイ完了！"
            else
                log_error "Vercel デプロイ失敗"
                return 1
            fi
            ;;
        *)
            log_error "無効な選択です"
            return 1
            ;;
    esac
}

# Cloudflare Workers デプロイ実行
deploy_cloudflare() {
    log_info "Cloudflare Workers デプロイを開始します..."
    
    if ! command -v wrangler &> /dev/null; then
        log_error "Wrangler CLI がインストールされていません"
        log_info "インストール: npm install -g wrangler"
        return 1
    fi
    
    if [ ! -f "wrangler.toml" ]; then
        log_error "wrangler.toml が見つかりません"
        return 1
    fi
    
    log_info "デプロイ方法を選択してください:"
    echo "1) Wrangler ブラウザ認証（推奨）"
    echo "2) API トークン認証"
    read -p "選択 (1-2): " choice
    
    case $choice in
        1)
            log_info "Wrangler ブラウザ認証を開始します..."
            wrangler login
            wrangler deploy --env production
            
            if [ $? -eq 0 ]; then
                log_success "Cloudflare Workers デプロイ完了！"
            else
                log_error "Cloudflare Workers デプロイ失敗"
                return 1
            fi
            ;;
        2)
            log_info "API トークンを入力してください"
            read -s -p "Cloudflare API Token: " CLOUDFLARE_API_TOKEN
            export CLOUDFLARE_API_TOKEN
            
            wrangler deploy --env production
            
            if [ $? -eq 0 ]; then
                log_success "Cloudflare Workers デプロイ完了！"
            else
                log_error "Cloudflare Workers デプロイ失敗"
                return 1
            fi
            ;;
        *)
            log_error "無効な選択です"
            return 1
            ;;
    esac
}

# メイン処理
main() {
    log_info "EmoWeather 本番デプロイ"
    
    STEP="${1:-all}"
    
    case $STEP in
        supabase)
            deploy_supabase
            ;;
        vercel)
            deploy_vercel
            ;;
        cloudflare)
            deploy_cloudflare
            ;;
        all)
            deploy_supabase || log_warning "Supabase デプロイをスキップしました"
            deploy_vercel || log_warning "Vercel デプロイをスキップしました"
            deploy_cloudflare || log_warning "Cloudflare デプロイをスキップしました"
            log_success "デプロイスクリプト完了！"
            ;;
        *)
            log_error "無効なステップです: $STEP"
            echo "使用方法: $0 [supabase|vercel|cloudflare|all]"
            return 1
            ;;
    esac
}

main "$@"
