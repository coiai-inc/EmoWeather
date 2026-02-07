# EmoWeather Style Guide

A comprehensive design system for emotionally-intelligent weather applications. This guide ensures consistency, accessibility, and a delightful user experience across all platforms.

---

## 1. UI デザインの基本原則

EmoWeather は以下の 8 つのコア設計原則に基づいています。これらは全ての UI デザイン決定を導きます。

### 1.1 視覚的ハイラーキー（Visual Hierarchy）
**目的：** ユーザーの注意を重要な情報へ自然に導く

- **優先度 1（最高）:** 感情アイコン、メインの気象情報、ユーザーアクション
- **優先度 2（中）:** 補足情報、セカンダリボタン、テキスト説明
- **優先度 3（低）:** ラベル、日付、メタデータ

**実装方法:**
```
- サイズ: 大きい = より重要
- 色: 彩度が高い、明るい = より重要
- 位置: 上部・左側 = より重要（横書き文化）
- 余白: 周囲の余白が大きい = より重要
```

### 1.2 一貫性（Consistency）
**目的：** 予測可能で信頼できる体験を提供

- **ビジュアル一貫性:** 同じ機能は同じスタイル
- **相互作用一貫性:** 同じアクションは同じ結果
- **用語一貫性:** 同じ概念に同じ言葉を使用
- **パターン一貫性:** レイアウト、フォーム、ナビゲーション

### 1.3 フィードバック（Feedback）
**目的：** ユーザーのアクションに対する即座の反応

- **視覚的フィードバック:** ボタンのホバー、クリック状態の変化
- **アニメーションフィードバック:** 遷移、ローディング状態
- **音声フィードバック:** 触覚フィードバック（モバイル）
- **テキストフィードバック:** トーストメッセージ、確認ダイアログ

### 1.4 コントラスト（Contrast）
**目的：** テキストと背景の視認性を確保

- **最小コントラスト比:** 4.5:1（通常テキスト）、3:1（大型テキスト）
- **色彩コントラスト:** カラーブラインドフレンドリー
- **空間コントラスト:** 要素間の十分な余白
- **タイミングコントラスト:** アニメーション速度の変化

### 1.5 最小主義（Minimalism）
**目的：** 不要な要素を排除し、本質に集中

- **機能性重視:** 装飾的な要素は最小化
- **情報の優先順位:** 最も重要な情報のみ表示
- **ホワイトスペース:** 呼吸空間を確保
- **マイクロコピー:** 簡潔で明確なテキスト

### 1.6 アクセシビリティ（Accessibility）
**目的：** すべてのユーザーが利用できる設計

- **色に依存しない:** 形状、テキスト、パターンも活用
- **読みやすさ:** フォントサイズ、行高、コントラスト
- **キーボード操作:** マウス不要で全機能利用可能
- **スクリーンリーダー:** ARIA ラベル、セマンティック HTML

### 1.7 レスポンシブネス（Responsiveness）
**目的：** あらゆるデバイス・スクリーンサイズで最適な体験

- **流動的グリッド:** パーセンテージベースのレイアウト
- **柔軟な画像:** スクリーンサイズに対応
- **条件付き表示:** スクリーンサイズに応じた要素の表示/非表示
- **タッチターゲット:** 最小 44x44px のタップエリア

### 1.8 共感設計（Empathy-Driven Design）
**目的：** ユーザーの感情と状態に寄り添う

- **感情に合わせた色:** 気分に応じたカラーパレット
- **非判断的インターフェース:** 否定的な感情を尊重
- **励まし的コピー:** 肯定的で支援的なメッセージ
- **プライバシー重視:** 感情データの安全性

---

## 2. EmoWeather カラーシステム

### 2.1 ベースカラー（黒系グラデーション）

深い色調から明るい色調へのグラデーション。ダークモード対応の基盤。

```
黒 #000000 - ディープシャドウ
濃紺黒 #1A1D29 - プライマリ背景
暗灰黒 #2D3142 - セカンダリ背景
グレー #3F4556 - テーシャリ背景
ライトグレー #6B7280 - 無効状態テキスト
シルバーグレー #D1D5DB - セカンダリテキスト
ホワイト #FFFFFF - プライマリテキスト
```

### 2.2 感情カラーパレット

6 つの基本感情に対応したカラーシステム。各感情に 5 段階のトーンを提供。

#### Happy（幸福） 🟡
```
happy-50:  #FFFBEB
happy-100: #FEF3C7
happy-200: #FCD34D
happy-400: #FBBF24
happy-600: #D97706
```
**用途:** ポジティブなフィードバック、成功状態、好天気表現

#### Sad（悲しみ） 🔵
```
sad-50:  #EFF6FF
sad-100: #DBEAFE
sad-200: #BFDBFE
sad-400: #60A5FA
sad-600: #2563EB
```
**用途:** 悲しみ表現、雨天、低気温

#### Angry（怒り） 🔴
```
angry-50:  #FEF2F2
angry-100: #FEE2E2
angry-200: #FECACA
angry-400: #F87171
angry-600: #DC2626
```
**用途:** 警告、危険、嵐、強風

#### Calm（落ち着き） 💚
```
calm-50:  #F0FDF4
calm-100: #DCFCE7
calm-200: #BBEF63
calm-400: #4ADE80
calm-600: #16A34A
```
**用途:** リラックス状態、穏やかな天気、瞑想機能

#### Excited（興奮） 🟣
```
excited-50:  #FAF5FF
excited-100: #F3E8FF
excited-200: #E9D5FF
excited-400: #D8B4FE
excited-600: #A855F7
```
**用途:** イベント、新機能、ユーザー成長

#### Neutral（中立） ⚪
```
neutral-50:  #F9FAFB
neutral-100: #F3F4F6
neutral-200: #E5E7EB
neutral-400: #9CA3AF
neutral-600: #4B5563
```
**用途:** デフォルト、天気情報、汎用UI要素

### 2.3 アクセントカラー

補助的な強調用カラー。主に相互作用状態で使用。

```
紫（Purple）
  accent-purple: #9333EA
  accent-purple-light: #D8B4FE

インディゴ（Indigo）
  accent-indigo: #6366F1
  accent-indigo-light: #C7D2FE

ピンク（Pink）
  accent-pink: #EC4899
  accent-pink-light: #FBCFE8
```

**用途:**
- **紫:** CTAボタン、プレミアム機能、特別イベント
- **インディゴ:** リンク、タブ選択状態
- **ピンク:** 好きな気象パターン、共有機能

### 2.4 Tailwind CSS Config 定義

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Base Colors
        black: '#000000',
        'darkest': '#1A1D29',
        'darker': '#2D3142',
        'dark': '#3F4556',
        'gray-light': '#6B7280',
        'gray-lighter': '#D1D5DB',
        'white': '#FFFFFF',
        
        // Emotion Colors
        happy: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FCD34D',
          400: '#FBBF24',
          600: '#D97706',
        },
        sad: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          400: '#60A5FA',
          600: '#2563EB',
        },
        angry: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          400: '#F87171',
          600: '#DC2626',
        },
        calm: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBEF63',
          400: '#4ADE80',
          600: '#16A34A',
        },
        excited: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          400: '#D8B4FE',
          600: '#A855F7',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          400: '#9CA3AF',
          600: '#4B5563',
        },
        
        // Accent Colors
        accent: {
          purple: '#9333EA',
          'purple-light': '#D8B4FE',
          indigo: '#6366F1',
          'indigo-light': '#C7D2FE',
          pink: '#EC4899',
          'pink-light': '#FBCFE8',
        },
      },
    },
  },
};
```

### 2.5 色の使用ガイドライン

| 要素 | ライトモード | ダークモード |
|------|-----------|-----------|
| **背景（プライマリ）** | #FFFFFF | #1A1D29 |
| **背景（セカンダリ）** | #F9FAFB | #2D3142 |
| **テキスト（プライマリ）** | #000000 | #FFFFFF |
| **テキスト（セカンダリ）** | #6B7280 | #D1D5DB |
| **ボーダー** | #E5E7EB | #3F4556 |
| **感情表示** | 感情カラー600 | 感情カラー400 |

---

## 3. タイポグラフィ

### 3.1 フォントファミリー

EmoWeather は **Inter** フォントを採用。ヒューマニスト・サンセリフの特性により、親しみやすく読みやすい。

```css
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

**フォールバック:**
1. Inter（Google Fonts）
2. -apple-system（macOS/iOS システムフォント）
3. BlinkMacSystemFont（Safari 互換）
4. Segoe UI（Windows）
5. sans-serif（総合フォールバック）

### 3.2 フォントサイズスケール

12px ベースの倍率スケール。読みやすさとハイラーキーのバランス。

```
xs:   12px / 0.75rem   → サポートテキスト、ラベル
sm:   14px / 0.875rem  → フォームラベル、サポート
base: 16px / 1rem      → ボディテキスト（デフォルト）
lg:   18px / 1.125rem  → サブタイトル
xl:   20px / 1.25rem   → セクションタイトル
2xl:  24px / 1.5rem    → ページタイトル
3xl:  30px / 1.875rem  → メインタイトル
4xl:  36px / 2.25rem   → ヒーロータイトル
5xl:  48px / 3rem      → ロゴ、特大見出し
```

### 3.3 フォントウェイト

感情表現と情報階層のための 4 段階ウェイト。

```
Regular (400)   → ボディテキスト、通常テキスト
Medium (500)    → サポートテキスト、ラベル
Semibold (600)  → セクションタイトル、重要なテキスト
Bold (700)      → ページタイトル、ヘッダー
```

**使用パターン:**
```
見出し H1: 36px / Bold (700)
見出し H2: 24px / Semibold (600)
見出し H3: 20px / Semibold (600)
テキスト本文: 16px / Regular (400)
小テキスト: 14px / Regular (400)
ラベル: 14px / Medium (500)
```

### 3.4 行高（Line Height）

可読性と視覚的バランスのための行高設定。

```
テキストタイプ         行高      比率
────────────────────────────────────
見出し                1.2em    1.2
サブタイトル          1.4em    1.4
本文テキスト          1.6em    1.5-1.6
フォーム入力          1.5em    1.5
リスト項目            1.6em    1.6
```

### 3.5 レタースペーシング

キャラクター間隔による視覚的な呼吸感。

```
通常テキスト: 0em（デフォルト）
タイトル:    0.5px（-0.02em）← 引き締める
ラベル:      0.5px（-0.02em）
すべて大文字: 1px（0.05em）← 広げる
```

### 3.6 Tailwind CSS タイポグラフィ設定

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.2em' }],
        sm: ['14px', { lineHeight: '1.4em' }],
        base: ['16px', { lineHeight: '1.6em' }],
        lg: ['18px', { lineHeight: '1.5em' }],
        xl: ['20px', { lineHeight: '1.5em' }],
        '2xl': ['24px', { lineHeight: '1.4em' }],
        '3xl': ['30px', { lineHeight: '1.2em' }],
        '4xl': ['36px', { lineHeight: '1.2em' }],
        '5xl': ['48px', { lineHeight: '1em' }],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
      },
    },
  },
};
```

---

## 4. スペーシング・レイアウト

### 4.1 スペーシングスケール

8px ベースの倍率スケール。すべてのマージン・パディング・ギャップに統一。

```
0   = 0px      （マージンなし）
1   = 4px      （マイクロスペーシング）
2   = 8px      （最小スペーシング）
3   = 12px     （小スペーシング）
4   = 16px     （標準スペーシング）★推奨
6   = 24px     （中スペーシング）
8   = 32px     （大スペーシング）
12  = 48px     （特大スペーシング）
16  = 64px     （セクション分離）
20  = 80px     （ページセクション）
24  = 96px     （大セクション分離）
```

**推奨パターン:**
```
コンポーネント内部パディング:  16px (p-4)
コンポーネント間ギャップ:     16px (gap-4)
セクション間マージン:        32px (my-8)
ページ側部パディング:         24px (px-6)
```

### 4.2 グリッドシステム

12 カラムレスポンシブグリッド。複雑なレイアウトを簡素化。

```
モバイル (sm)    : 4 columns   (320px-640px)
タブレット (md)  : 8 columns   (641px-1024px)
デスクトップ (lg) : 12 columns  (1025px-1536px)
ワイド (xl)      : 12 columns  (1537px+)
```

**グリッド実装:**
```html
<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
  <div class="col-span-4">カード 1</div>
  <div class="col-span-4 md:col-span-4">カード 2</div>
</div>
```

### 4.3 レスポンシブブレークポイント

Tailwind CSS 標準に準拠。モバイルファースト設計。

```
デフォルト  (320px-639px)   → モバイル
sm:        (640px-767px)   → 小タブレット
md:        (768px-1023px)  → タブレット
lg:        (1024px-1279px) → デスクトップ
xl:        (1280px-1535px) → ワイド
2xl:       (1536px+)       → 特大画面
```

**デバイス別の推奨サイズ:**
```
iPhone SE     : 375px
iPhone 14     : 390px
iPad Mini     : 768px
iPad Pro      : 1024px
MacBook Air   : 1440px
4K モニター   : 3840px
```

### 4.4 コンテナサイズ

最大幅を設定してコンテンツを読みやすく保持。

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        'container-sm': '28rem',   // 448px
        'container-md': '48rem',   // 768px
        'container-lg': '64rem',   // 1024px
        'container-xl': '80rem',   // 1280px
      },
    },
  },
};
```

### 4.5 レイアウトテンプレート

#### シングルカラムレイアウト（モバイル）
```html
<div class="min-h-screen flex flex-col">
  <header class="px-4 py-4"><!-- ヘッダー --></header>
  <main class="flex-1 px-4 py-6"><!-- メインコンテンツ --></main>
  <footer class="px-4 py-4"><!-- フッター --></footer>
</div>
```

#### 2 カラムレイアウト（デスクトップ）
```html
<div class="grid lg:grid-cols-3 gap-6">
  <aside class="lg:col-span-1"><!-- サイドバー --></aside>
  <main class="lg:col-span-2"><!-- メインコンテンツ --></main>
</div>
```

---

## 5. アニメーション・インタラクション

### 5.1 遷移速度（Transition Duration）

人間工学に基づいた 4 段階の遷移速度。用途に応じて選択。

```
100ms  → 極速     (マイクロインタラクション、ボタンホバー)
200ms  → 速       (フェード、移動アニメーション)
300ms  → 標準     (ページ遷移、モーダルオープン) ★推奨
500ms  → 低速     (複雑なアニメーション、ストーリーテリング)
```

**Tailwind CSS:**
```html
<!-- 100ms -->
<button class="transition-all duration-100">速い</button>

<!-- 200ms -->
<div class="transition-opacity duration-200">中速</div>

<!-- 300ms (デフォルト) -->
<div class="transition-all duration-300">標準</div>

<!-- 500ms -->
<div class="animate-pulse duration-500">低速</div>
```

### 5.2 タイミング関数（Easing）

自然で人間的な動きを実現する曲線。

```
linear          → 等速（使用避ける、不自然）
ease-in         → 加速（終了する要素）
ease-out        → 減速（開始する要素）★推奨
ease-in-out     → 加速→減速（複雑な動き）
cubic-bezier()  → カスタム（特殊効果）
```

**推奨パターン:**
```css
/* フェードイン */
.fade-in {
  animation: fadeIn 0.3s ease-out;
}

/* スライドダウン */
.slide-down {
  animation: slideDown 0.3s ease-out;
}

/* ボタンホバー */
button {
  transition: all 0.2s ease-out;
}
```

### 5.3 キーフレームアニメーション一覧

#### glow-pulse（グロー脈動）
```css
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 5px rgba(168, 85, 247, 0.5);
    opacity: 1;
  }
  50% {
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
    opacity: 0.8;
  }
}

.glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}
```

#### float（浮遊）
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.float {
  animation: float 3s ease-in-out infinite;
}
```

#### pulse-ring（パルスリング）
```css
@keyframes pulse-ring {
  0% {
    box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(168, 85, 247, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(168, 85, 247, 0);
  }
}

.pulse-ring {
  animation: pulse-ring 2s infinite;
}
```

#### shimmer（シマー）
```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.shimmer {
  background: linear-gradient(
    90deg,
    #2D3142 0%,
    #3F4556 50%,
    #2D3142 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

#### bounce-smooth（スムーズバウンス）
```css
@keyframes bounce-smooth {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-5px);
  }
}

.bounce-smooth {
  animation: bounce-smooth 1s ease-in-out infinite;
}
```

### 5.4 ホバー・フォーカス状態

ユーザーの相互作用に対する視覚的フィードバック。

#### ボタンホバー
```html
<button class="bg-happy-400 hover:bg-happy-600 
               active:scale-95 focus:outline-none 
               focus:ring-2 focus:ring-happy-200
               transition-all duration-200">
  クリック
</button>
```

#### リンクホバー
```html
<a href="#" class="text-indigo-600 hover:text-indigo-700 
                   underline decoration-2 
                   hover:decoration-indigo-700
                   transition-colors duration-200">
  リンク
</a>
```

#### フォーカス状態（アクセシビリティ）
```css
/* キーボードフォーカス */
button:focus-visible {
  outline: 2px solid #6366F1;
  outline-offset: 2px;
}

/* ダークモード */
@media (prefers-color-scheme: dark) {
  button:focus-visible {
    outline-color: #C7D2FE;
  }
}
```

### 5.5 Tailwind CSS アニメーション設定

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s infinite',
        'shimmer': 'shimmer 2s infinite',
        'bounce-smooth': 'bounce-smooth 1s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(168, 85, 247, 0.5)', opacity: '1' },
          '50%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)', opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(168, 85, 247, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(168, 85, 247, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(168, 85, 247, 0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'bounce-smooth': {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-5px)' },
        },
      },
      transitionDuration: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
      },
    },
  },
};
```

---

## 6. ダークモード設計

EmoWeather はダークモード優先設計。すべてのユーザーインターフェースはダークテーマに最適化されています。

### 6.1 ダークテーマ背景色

```
深度レベル    カラー       使用例
─────────────────────────────────────
-2 (最深)    #000000     ディープシャドウ、背景
-1 (深)      #1A1D29     プライマリ背景
0 (ベース)   #2D3142     セカンダリ背景、カード
1 (浮遊)     #3F4556     ホバー状態、入力フィールド
2 (最浅)     #6B7280     ディセーブル、サブテキスト
```

### 6.2 テキストのコントラスト基準

WCAG 2.1 AA 標準に準拠。すべてのテキストは最小 4.5:1 のコントラスト比。

| テキストカラー | 背景カラー | コントラスト比 | 用途 |
|---|---|---|---|
| #FFFFFF | #1A1D29 | 16.3:1 | プライマリテキスト |
| #FFFFFF | #2D3142 | 14.9:1 | セカンダリテキスト |
| #D1D5DB | #1A1D29 | 7.1:1 | サポートテキスト |
| #6B7280 | #2D3142 | 4.6:1 | ディセーブル |
| happy-400 | #1A1D29 | 5.2:1 | 感情カラー強調 |

### 6.3 グロー効果の活用

ダークモードにおける視覚的奥行きと焦点。

#### 微細グロー（Subtle Glow）
```css
.glow-subtle {
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
}
```

#### 標準グロー（Standard Glow）
```css
.glow-standard {
  box-shadow: 
    0 0 20px rgba(168, 85, 247, 0.4),
    0 0 40px rgba(168, 85, 247, 0.2);
}
```

#### 強烈グロー（Intense Glow）
```css
.glow-intense {
  box-shadow: 
    0 0 30px rgba(236, 72, 153, 0.6),
    0 0 60px rgba(236, 72, 153, 0.3);
}
```

#### 感情別グロー
```css
/* Happy */
.glow-happy {
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
}

/* Sad */
.glow-sad {
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.4);
}

/* Angry */
.glow-angry {
  box-shadow: 0 0 20px rgba(248, 113, 113, 0.4);
}

/* Calm */
.glow-calm {
  box-shadow: 0 0 20px rgba(74, 222, 128, 0.4);
}
```

### 6.4 ダークモード実装パターン

#### CSS Variables を使用した実装
```css
/* light.css */
:root {
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F9FAFB;
  --color-text-primary: #000000;
  --color-text-secondary: #6B7280;
  --color-border: #E5E7EB;
}

/* dark.css (デフォルト) */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #1A1D29;
    --color-bg-secondary: #2D3142;
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #D1D5DB;
    --color-border: #3F4556;
  }
}

.card {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}
```

#### Tailwind CSS `dark:` プリフィックス
```html
<div class="bg-white dark:bg-darker text-black dark:text-white">
  ライトモード背景 + ダークモード背景
</div>

<button class="bg-happy-200 dark:bg-happy-400 text-gray-900 dark:text-white">
  感情カラーはダークモード用に調整
</button>
```

#### システム設定に応じた自動切り替え
```html
<!-- HTML -->
<html class="dark">
  <body class="dark:bg-darkest dark:text-white">
    <!-- コンテンツ -->
  </body>
</html>
```

```javascript
// JavaScript - システム設定監視
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}

// リスナー
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
```

---

## 7. アクセシビリティ（A11y）

### 7.1 WCAG 2.1 AA 準拠

EmoWeather は WCAG 2.1 レベル AA 達成を目指します。すべてのユーザーが利用可能なデザイン。

#### 4 つの原則
```
Perceivable    (認知可能)  - 情報が見える・聞こえる
Operable       (操作可能)  - キーボード操作可能
Understandable (理解可能)  - テキストが明確
Robust         (堅牢)      - 支援技術に対応
```

### 7.2 カラーコントラスト

全テキストが最小 4.5:1 のコントラスト比を達成。色覚異常対応。

```html
<!-- ✅ 良い例 -->
<p class="text-white dark:text-white bg-darkest dark:bg-darkest">
  コントラスト比 16.3:1 (AA 準拠)
</p>

<!-- ❌ 悪い例 -->
<p class="text-gray-light bg-darkest">
  コントラスト比 3.2:1 (失敗)
</p>
```

#### コントラストチェックツール
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

### 7.3 キーボードナビゲーション

すべての機能がキーボードで操作可能。

```html
<!-- Tab キーでナビゲート可能 -->
<button tabindex="0">送信</button>

<!-- フォーカス可視化 -->
<input class="focus:outline-none focus:ring-2 focus:ring-indigo-500" />

<!-- スキップリンク（モバイル/スクリーンリーダー用） -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  メインコンテンツへスキップ
</a>
```

#### キーボードショートカット
```
Tab         → 次要素へフォーカス
Shift+Tab   → 前要素へフォーカス
Enter       → ボタン/リンク実行
Space       → チェックボックス切り替え
Escape      → ダイアログ/メニュー閉じる
Arrow Keys  → ラジオボタン/リスト選択
```

### 7.4 スクリーンリーダー対応

ARIA ラベルとセマンティック HTML で視覚障害者に対応。

```html
<!-- セマンティック HTML -->
<header role="banner">ヘッダー</header>
<nav role="navigation">
  <ul>
    <li><a href="#">ホーム</a></li>
  </ul>
</nav>
<main role="main">コンテンツ</main>
<footer role="contentinfo">フッター</footer>

<!-- ARIA ラベル -->
<button aria-label="メニューを開く">☰</button>

<!-- ARIA 説明 -->
<input type="text" aria-describedby="password-hint" />
<span id="password-hint">8文字以上必須</span>

<!-- ARIA ライブリージョン（動的更新） -->
<div aria-live="polite" aria-atomic="true">
  {{ count }} 件の新しいメッセージ
</div>
```

### 7.5 テキスト代替テキスト

画像・アイコンに代替テキストを提供。

```html
<!-- 画像 -->
<img src="weather-icon.svg" alt="晴天、気温 25°C" />

<!-- ロゴ -->
<img src="logo.svg" alt="EmoWeather ロゴ" />

<!-- 装飾画像 -->
<img src="decoration.svg" alt="" aria-hidden="true" />

<!-- アイコンボタン -->
<button aria-label="設定を開く">⚙️</button>
```

### 7.6 フォーム

フォーム入力のアクセシビリティ確保。

```html
<!-- ラベル関連付け -->
<label for="email-input">メール</label>
<input id="email-input" type="email" required />

<!-- フィールドグループ -->
<fieldset>
  <legend>気象アラート通知</legend>
  <label><input type="checkbox" /> 大雨警報</label>
  <label><input type="checkbox" /> 嵐警報</label>
</fieldset>

<!-- エラー通知 -->
<input aria-describedby="error-message" />
<span id="error-message" class="text-angry-600" role="alert">
  有効なメールアドレスを入力してください
</span>
```

### 7.7 動き・アニメーション

前庭障害やモーション感度の高いユーザー対応。

```css
/* ユーザーが motion を prefer していない場合 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```html
<!-- React での実装 -->
<div className={motion.prefersReducedMotion ? '' : 'animate-float'}>
  浮遊アニメーション
</div>
```

---

## 8. コンポーネント設計ガイド

### 8.1 Shadcn/ui 活用

EmoWeather は Shadcn/ui コンポーネントをベースに、カスタマイズして使用。

#### インストール
```bash
npx shadcn-ui@latest init

# コンポーネント追加
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add select
```

#### カスタマイズ例（Button）
```typescript
// components/ui/button-emotion.tsx
import { Button } from "@/components/ui/button"
import { cva } from "class-variance-authority"

const emotionButtonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all",
  {
    variants: {
      emotion: {
        happy: "bg-happy-400 hover:bg-happy-600 text-white",
        sad: "bg-sad-400 hover:bg-sad-600 text-white",
        angry: "bg-angry-400 hover:bg-angry-600 text-white",
        calm: "bg-calm-400 hover:bg-calm-600 text-white",
        excited: "bg-excited-400 hover:bg-excited-600 text-white",
        neutral: "bg-gray-400 hover:bg-gray-600 text-white",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
  }
)

export function EmotionButton({ emotion = "neutral", ...props }) {
  return <Button className={emotionButtonVariants({ emotion })} {...props} />
}
```

### 8.2 カスタムコンポーネント例

#### EmotionIcon（感情アイコン）
```typescript
// components/EmotionIcon.tsx
import React from 'react'

interface EmotionIconProps {
  emotion: 'happy' | 'sad' | 'angry' | 'calm' | 'excited' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

const emotionEmojis = {
  happy: '😊',
  sad: '😢',
  angry: '😠',
  calm: '😌',
  excited: '🤩',
  neutral: '😐',
}

const emotionColors = {
  happy: 'text-happy-400',
  sad: 'text-sad-400',
  angry: 'text-angry-400',
  calm: 'text-calm-400',
  excited: 'text-excited-400',
  neutral: 'text-neutral-400',
}

const sizeMap = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl',
}

export const EmotionIcon: React.FC<EmotionIconProps> = ({
  emotion,
  size = 'md',
  animated = false,
}) => {
  return (
    <div
      className={`
        ${sizeMap[size]}
        ${emotionColors[emotion]}
        ${animated ? 'animate-bounce-smooth' : ''}
        inline-block
      `}
    >
      {emotionEmojis[emotion]}
    </div>
  )
}
```

#### EmotionCheckIn（感情チェックイン）
```typescript
// components/EmotionCheckIn.tsx
'use client'

import React, { useState } from 'react'
import { EmotionIcon } from './EmotionIcon'
import { EmotionButton } from './ui/button-emotion'

type Emotion = 'happy' | 'sad' | 'angry' | 'calm' | 'excited' | 'neutral'

export const EmotionCheckIn: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null)

  const emotions: Emotion[] = ['happy', 'sad', 'angry', 'calm', 'excited', 'neutral']

  const handleSubmit = () => {
    if (selectedEmotion) {
      console.log(`Current emotion: ${selectedEmotion}`)
      // API call here
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-darker rounded-lg">
      <h2 className="text-2xl font-semibold text-white">
        今の気持ちはどう？
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {emotions.map((emotion) => (
          <button
            key={emotion}
            onClick={() => setSelectedEmotion(emotion)}
            className={`
              flex flex-col items-center gap-2 p-4 rounded-lg
              transition-all duration-200
              ${selectedEmotion === emotion
                ? 'bg-dark ring-2 ring-accent-purple scale-110'
                : 'bg-dark hover:bg-dark'}
            `}
          >
            <EmotionIcon emotion={emotion} size="md" />
            <span className="text-sm text-white capitalize">{emotion}</span>
          </button>
        ))}
      </div>

      <EmotionButton
        emotion={selectedEmotion || 'neutral'}
        size="lg"
        onClick={handleSubmit}
        disabled={!selectedEmotion}
      >
        送信
      </EmotionButton>
    </div>
  )
}
```

#### WeatherCard（天気カード）
```typescript
// components/WeatherCard.tsx
import React from 'react'
import { EmotionIcon } from './EmotionIcon'

interface WeatherCardProps {
  emotion: 'happy' | 'sad' | 'angry' | 'calm' | 'excited' | 'neutral'
  temperature: number
  condition: string
  location: string
  humidity?: number
  windSpeed?: number
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  emotion,
  temperature,
  condition,
  location,
  humidity,
  windSpeed,
}) => {
  return (
    <div className={`
      bg-gradient-to-br from-${emotion}-100 to-${emotion}-200
      dark:from-darker dark:to-dark
      rounded-2xl p-6 shadow-lg
      hover:shadow-xl transition-shadow duration-300
      border border-${emotion}-200 dark:border-${emotion}-400
    `}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{location}</h3>
          <p className="text-gray-light">{condition}</p>
        </div>
        <EmotionIcon emotion={emotion} size="lg" />
      </div>

      <div className="text-4xl font-bold text-white mb-4">
        {temperature}°
      </div>

      {(humidity || windSpeed) && (
        <div className="flex gap-4 text-sm">
          {humidity && (
            <div className="flex items-center gap-1">
              <span>💧</span>
              <span className="text-gray-light">{humidity}%</span>
            </div>
          )}
          {windSpeed && (
            <div className="flex items-center gap-1">
              <span>💨</span>
              <span className="text-gray-light">{windSpeed} m/s</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
```

### 8.3 ボタンのスタイル

#### プライマリボタン
```html
<button class="px-6 py-2 bg-accent-purple hover:bg-accent-purple 
               text-white font-semibold rounded-lg 
               transition-all duration-200 
               hover:shadow-lg hover:scale-105
               active:scale-95">
  送信
</button>
```

#### セカンダリボタン
```html
<button class="px-6 py-2 bg-dark hover:bg-gray-light 
               text-white font-semibold rounded-lg 
               border-2 border-gray-light
               transition-all duration-200">
  キャンセル
</button>
```

#### テキストボタン
```html
<button class="px-4 py-2 text-indigo-400 hover:text-indigo-300 
               font-medium underline
               transition-colors duration-200">
  詳細を見る
</button>
```

### 8.4 フォーム要素

#### テキスト入力
```html
<input class="w-full px-4 py-2 bg-dark border border-gray-400
              text-white placeholder-gray-light
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              focus:border-transparent
              rounded-lg transition-all duration-200" 
       placeholder="メールアドレス" />
```

#### セレクト
```html
<select class="px-4 py-2 bg-dark border border-gray-400
               text-white rounded-lg
               focus:outline-none focus:ring-2 focus:ring-indigo-500
               cursor-pointer">
  <option value="">選択してください</option>
  <option value="1">オプション 1</option>
</select>
```

#### チェックボックス
```html
<label class="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" class="w-5 h-5 rounded accent-indigo-500" />
  <span class="text-white">同意します</span>
</label>
```

### 8.5 カード

#### 基本カード
```html
<div class="bg-darker rounded-lg p-6 shadow-md border border-dark
            hover:shadow-lg transition-shadow duration-300">
  <h3 class="text-xl font-semibold text-white mb-2">タイトル</h3>
  <p class="text-gray-light">カードの説明文</p>
</div>
```

#### グロー効果付きカード
```html
<div class="bg-darker rounded-lg p-6 
            shadow-lg glow-standard
            border border-dark">
  <div class="flex items-center gap-4">
    <div class="text-4xl">🌈</div>
    <div>
      <h3 class="text-lg font-semibold text-white">晴天</h3>
      <p class="text-happy-400">素晴らしい天気です</p>
    </div>
  </div>
</div>
```

---

## 9. 実装コード例

### 9.1 Page コンポーネント（Next.js）

```typescript
// app/page.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { EmotionCheckIn } from '@/components/EmotionCheckIn'
import { WeatherCard } from '@/components/WeatherCard'
import { EmotionIcon } from '@/components/EmotionIcon'

type Emotion = 'happy' | 'sad' | 'angry' | 'calm' | 'excited' | 'neutral'

export default function HomePage() {
  const [currentEmotion, setCurrentEmotion] = useState<Emotion>('calm')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchWeather = async () => {
    setLoading(true)
    try {
      // API call
      const response = await fetch('/api/weather')
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      console.error('Failed to fetch weather:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-darkest to-darker">
      {/* ヘッダー */}
      <header className="bg-dark bg-opacity-50 backdrop-blur-sm sticky top-0 z-50
                         border-b border-gray-400 border-opacity-20">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="text-3xl animate-float">🌤️</div>
          <h1 className="text-2xl font-bold text-white">EmoWeather</h1>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* 感情チェックイン */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            あなたの気持ちを教えて
          </h2>
          <EmotionCheckIn />
        </section>

        {/* 天気情報 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            今日の天気
          </h2>

          {loading ? (
            <div className="flex justify-center py-8">
              <div className="text-4xl animate-bounce-smooth">⏳</div>
            </div>
          ) : weatherData ? (
            <WeatherCard {...weatherData} />
          ) : (
            <div className="text-center py-8 text-gray-light">
              天気情報を読み込めません
            </div>
          )}
        </section>

        {/* 感情別インサイト */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            感情インサイト
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dark rounded-lg p-6 border border-gray-400 border-opacity-20">
              <h3 className="text-lg font-semibold text-white mb-3">
                あなたの気分
              </h3>
              <EmotionIcon emotion={currentEmotion} size="lg" />
            </div>

            <div className="bg-dark rounded-lg p-6 border border-gray-400 border-opacity-20">
              <h3 className="text-lg font-semibold text-white mb-3">
                推奨事項
              </h3>
              <p className="text-gray-light">
                {currentEmotion === 'happy' &&
                  '素晴らしい気分です！屋外活動を楽しみましょう。'}
                {currentEmotion === 'sad' &&
                  '少し休息が必要かもしれません。瞑想をお試しください。'}
                {currentEmotion === 'angry' &&
                  '深呼吸をして落ち着きましょう。散歩がおすすめです。'}
                {currentEmotion === 'calm' &&
                  '素晴らしい状態です。この気持ちを保ちましょう。'}
                {currentEmotion === 'excited' &&
                  'エネルギーにあふれています！何か新しいことに挑戦してください。'}
                {currentEmotion === 'neutral' &&
                  'あなたのペースで過ごしましょう。無理は禁物です。'}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* フッター */}
      <footer className="border-t border-gray-400 border-opacity-20 py-8 mt-16">
        <div className="max-w-2xl mx-auto px-4 text-center text-gray-light">
          <p>© 2024 EmoWeather. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
```

### 9.2 Tailwind CSS クラス例

#### グラデーション背景
```html
<!-- 感情別グラデーション -->
<div class="bg-gradient-to-br from-happy-100 to-happy-400">Happy</div>
<div class="bg-gradient-to-br from-sad-100 to-sad-400">Sad</div>
<div class="bg-gradient-to-br from-calm-100 to-calm-400">Calm</div>

<!-- ダークモードグラデーション -->
<div class="bg-gradient-to-b from-darkest via-darker to-dark">背景</div>

<!-- テキストグラデーション -->
<h1 class="bg-gradient-to-r from-happy-400 to-excited-400 bg-clip-text text-transparent">
  グラデーションテキスト
</h1>
```

#### シャドウ効果
```html
<!-- 標準シャドウ -->
<div class="shadow-md">標準</div>
<div class="shadow-lg">大</div>
<div class="shadow-xl">特大</div>

<!-- カスタムシャドウ（グロー） -->
<div class="drop-shadow-lg glow-subtle">グロー効果</div>
```

#### 配置とフレックスボックス
```html
<!-- センタリング -->
<div class="flex items-center justify-center h-screen">
  <div class="text-center">中央配置</div>
</div>

<!-- グリッドレイアウト -->
<div class="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-4">
  <div class="bg-dark rounded-lg p-4">カード</div>
</div>

<!-- スタック -->
<div class="flex flex-col gap-4">
  <div>要素 1</div>
  <div>要素 2</div>
</div>
```

### 9.3 CSS-in-JS（Styled Components）例

```typescript
// styles/emotionStyles.ts
import styled from 'styled-components'

export const EmotionCardWrapper = styled.div<{ emotion: string }>`
  background: linear-gradient(135deg, 
    var(--emotion-${props => props.emotion}-light) 0%,
    var(--emotion-${props => props.emotion}-dark) 100%
  );
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 0 12px 48px rgba(168, 85, 247, 0.2);
    transform: translateY(-4px);
  }
`

export const GlowText = styled.span`
  background: linear-gradient(90deg, #FBBF24, #D8B4FE, #EC4899);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s linear infinite;

  @keyframes shimmer {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
`

export const FloatingDiv = styled.div`
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`
```

---

## 10. トラブルシューティング

### よくある問題と解決策

#### 問題 1: コントラスト不足
**症状:** テキストが読みにくい
**原因:** テキストと背景色の組み合わせ
**解決策:**
```
1. WebAIM Contrast Checker で確認
2. 最小 4.5:1 の比率を確保
3. 感情カラーを薄めるのではなく、テキストを白くする
```

#### 問題 2: ダークモードでグロー効果が見えない
**症状:** グロー効果が目立たない
**原因:** 背景色が暗すぎる
**解決策:**
```css
/* 背景を少し明るくしてコントラストを確保 */
.glow-container {
  background-color: #2D3142; /* 最小限の明るさ */
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); /* 強いグロー */
}
```

#### 問題 3: アニメーションが遅い
**症状:** ユーザーが遅延を感じる
**原因:** 遷移時間が長すぎる
**解決策:**
```
推奨: 100ms - 300ms の範囲
避ける: 500ms 以上のデフォルト遷移
```

#### 問題 4: モバイルでレイアウトが崩れる
**症状:** 小さい画面でUI が重なっている
**原因:** レスポンシブクラスの欠落
**解決策:**
```html
<!-- md: で大画面用クラスを追加 -->
<div class="p-4 md:p-8">
  <div class="flex flex-col md:flex-row gap-4">
    <!-- モバイル: 縦、デスクトップ: 横 -->
  </div>
</div>
```

#### 問題 5: キーボードアクセスが機能しない
**症状:** Tab キーでフォーカスが移動しない
**原因:** tabindex や focus:ring の欠落
**解決策:**
```html
<!-- すべてのインタラクティブ要素に追加 -->
<button class="focus:outline-none focus:ring-2 focus:ring-indigo-500"
        tabindex="0">
  ボタン
</button>
```

#### 問題 6: 画像が読み込まれない
**症状:** alt テキストだけが表示される
**原因:** img src の誤字または権限不足
**解決策:**
```
1. パスを確認
2. 画像形式をサポート（JPG, PNG, WebP, SVG）
3. CDN キャッシュをクリア
```

#### 問題 7: グラデーションが感情カラーと一致しない
**症状:** 期待した色が出ない
**原因:** Tailwind Config の誤設定
**解決策:**
```javascript
// tailwind.config.js を確認
module.exports = {
  theme: {
    extend: {
      colors: {
        happy: {
          400: '#FBBF24', // これを確認
        },
      },
    },
  },
}

// クラスを正確に記述
<div class="bg-happy-400"> {/* happy-400 の確認 */}
```

---

## 参考リソース

### デザインツール
- [Figma - EmoWeather Design System](https://figma.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)

### アクセシビリティ
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

### パフォーマンス
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### 学習リソース
- [Design Systems Handbook](https://www.designsystems.com/)
- [Emotion Design](https://en.wikipedia.org/wiki/Emotional_design)
- [Inclusive Components](https://inclusive-components.design/)

---

## 更新履歴

| 日付 | バージョン | 変更内容 |
|------|-----------|--------|
| 2024-02-02 | v1.0 | 初版作成 |

---

## 貢献ガイドライン

スタイルガイドの改善提案がある場合：

1. [GitHub Issues](https://github.com/coiai.inc/EmoWeather) で提案を作成
2. プルリクエストを送信
3. レビューが完了後、マージ

---

**EmoWeather Style Guide** © 2024 coiai.inc. All rights reserved.
