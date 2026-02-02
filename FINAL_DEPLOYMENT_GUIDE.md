# 🚀 EmoWeather 本番デプロイ - 最終手順

## 現在の状態 ✅

### ✓ 完了したステップ
1. **Next.js ビルド**: ✅ 成功
   - コンパイル完了
   - スタティック生成完了
   - 本番用ビルドサイズ: 最適化済み

2. **GitHub にプッシュ**: ✅ 完了
   - コミット: `Deploy production: Supabase migration, Vercel, Cloudflare setup`
   - ブランチ: main
   - URL: https://github.com/coiai-inc/EmoWeather

3. **環境設定**: ✅ 完了
   - Supabase URL: `https://kqdoxoozooedecvtvdzp.supabase.co`
   - Anon Key: 設定済み
   - Mapbox Token: 設定済み

---

## 🔐 次のステップ（ユーザー確認）

### ステップ 1️⃣: Supabase SQL マイグレーション実行

**方法 A: Supabase ダッシュボード（推奨）**
1. https://app.supabase.com にアクセス
2. プロジェクトを選択: `kqdoxoozooedecvtvdzp`
3. 左メニュー → **SQL Editor** をクリック
4. **New Query** をクリック
5. 以下の SQL を貼り付け:
   - ファイル: `/Users/coiai/.openclaw/workspace/emoweather/supabase/migrations/001_init.sql`
6. **Run** ボタンをクリック

**テーブル作成確認:**
- `checkins` テーブル
- `emotion_stats_hourly` テーブル
- `user_profiles` テーブル

### ステップ 2️⃣: Vercel 本番デプロイ

**オプション A: GitHub 連携（自動デプロイ）**
1. https://vercel.com/dashboard にアクセス
2. EmoWeather プロジェクトを確認
3. 最新のプッシュからデプロイが自動開始されているはず
4. デプロイ完了を待つ

**オプション B: Vercel CLI（認証トークン必要）**
```bash
cd /Users/coiai/.openclaw/workspace/emoweather
export VERCEL_TOKEN="your-vercel-token"
vercel --prod --yes
```

**期待されるデプロイ URL:**
- `https://emoweather-{hash}.vercel.app`

### ステップ 3️⃣: Cloudflare Workers デプロイ

**方法:**
```bash
cd /Users/coiai/.openclaw/workspace/emoweather
export CLOUDFLARE_API_TOKEN="your-cloudflare-token"
wrangler deploy --env production
```

**期待される Worker URL:**
- `https://emoweather-worker.{account}.workers.dev`

---

## 📋 デプロイ完了確認チェックリスト

### ✅ 確認項目

- [ ] Supabase
  - [ ] SQL マイグレーション実行完了
  - [ ] `checkins` テーブル存在確認
  - [ ] `emotion_stats_hourly` テーブル存在確認
  - [ ] RLS ポリシー有効化確認

- [ ] Vercel
  - [ ] デプロイ完了
  - [ ] 本番 URL にアクセス可能
  - [ ] Mapbox 地図表示確認
  - [ ] 感情チェックインボタン表示確認
  - [ ] フォーム送信テスト

- [ ] Cloudflare Workers
  - [ ] デプロイ完了
  - [ ] Worker URL にアクセス可能
  - [ ] CORS ヘッダー確認
  - [ ] API レスポンス確認

---

## 🔗 デプロイ URL

以下を入力した後に記録してください：

```
Vercel 本番 URL: _________________________________
Cloudflare Worker URL: _________________________________
```

---

## 📚 参考リソース

- Supabase Dashboard: https://app.supabase.com
- Vercel Dashboard: https://vercel.com/dashboard
- Cloudflare Dashboard: https://dash.cloudflare.com
- GitHub リポジトリ: https://github.com/coiai-inc/EmoWeather

---

## 🆘 トラブルシューティング

### Supabase SQL エラー
- RLS ポリシー エラー → RLS を無効化してから実行
- 拡張機能エラー → PostGIS が有効化されているか確認

### Vercel デプロイエラー
- Environment Variables → vercel.json で設定済み確認
- ビルドコマンド → `npm run build`

### Cloudflare Workers エラー
- wrangler.toml の設定確認
- API トークンのスコープ確認

