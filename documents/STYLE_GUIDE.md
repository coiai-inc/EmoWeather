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

---

# EmoWeather 設計マニフェスト

## 第II部：デザイン哲学・科学的基礎

---

## 11. 心理学的・認知科学的基礎

EmoWeather のデザイン決定は、確かな心理学と認知科学の理論に根ざしています。本セクションでは、ユーザーインターフェースを設計する際に考慮すべき人間の認知的・感情的メカニズムを解説します。

### 11.1 人間の視覚的知覚の仕組み

#### 視覚情報処理のフロー

```
刺激 → 網膜での受容 → 視覚皮質での処理 → 前皮質での認知 → 行動決定
```

**重要な知見:**
1. **フォビア（Fovea）の限界**
   - 人間は視野全体を同時に認識できない
   - 中心視野（約2°）のみが高い解像度で認識可能
   - EmoWeather への適用：重要な情報は画面中央に配置

2. **周辺視野の役割**
   - 動き・色・明るさの変化に敏感
   - グロー効果やアニメーションで注意を引く
   - ただし詳細は認識できない

3. **目の動き（サッカード）**
   - 平均250ms で目が新しい焦点へ移動
   - ユーザーが全情報を処理するのに時間がかかる
   - EmoWeather への適用：視覚ハイラーキーで段階的に情報を提示

#### Gestalt 心理学の原則

```
├─ 近接の法則（Proximity）
│  └─ 近い要素は関連があると認識される
│     例：感情ボタンのグループ化
│
├─ 相似の法則（Similarity）
│  └─ 見た目が似た要素は同じ機能を持つと認識
│     例：同じ色の感情アイコン
│
├─ 連続性の法則（Continuity）
│  └─ 視線が自然に流れるパス
│     例：グラデーション背景の流れ
│
├─ 図と地（Figure-Ground）
│  └─ 前景と背景の対比で焦点を形成
│     例：ダークモードの白テキスト
│
└─ 完成（Closure）
   └─ 不完全な図形を脳が補完
      例：最小限のボーダーで枠を示唆
```

### 11.2 色彩心理学（感情と色の関係）

#### 感情色彩学

EmoWeather の色選択は、実証的な色彩心理学研究に基づいています。

| 色 | 波長 | 生理的効果 | 心理的効果 | EmoWeather での役割 |
|---|------|---------|---------|-----------------|
| **黄色** | 570-590nm | 眼の疲労軽減 | 喜び、幸福、楽観 | Happy（幸福） |
| **青色** | 450-495nm | 心拍数低下、血圧低下 | 冷静、悲しみ、信頼 | Sad（悲しみ） |
| **赤色** | 620-750nm | 血圧上昇、アドレナリン分泌 | 怒り、情熱、警告 | Angry（怒り） |
| **緑色** | 495-570nm | リラックス効果 | 落ち着き、成長、安定 | Calm（落ち着き） |
| **紫色** | 380-420nm | 瞑想状態を促進 | 興奮、創造性、高級感 | Excited（興奮） |
| **グレー** | 中立 | ニュートラル | 均衡、落ち着き | Neutral（中立） |

**色彩対比の効果:**
```
補色対比（Complementary Contrast）
- 対面する色（例：黄と紫）を使うと視認性が向上
- 感情的なインパクトが強化される

トーン対比（Tonal Contrast）
- 明度差を大きくしてコントラスト確保
- ダークモード + 明るい感情色 = 高い視認性
```

#### 文化的・個人差の考慮

色彩の解釈は文化によって異なります：

- **西洋文化**
  - 白：純潔、幸福
  - 黒：喪、悪意
  
- **東アジア文化**
  - 白：喪、悲しみ
  - 赤：幸福、繁栄
  
- **南アジア文化**
  - 黄：神聖
  - 青：悲しみ

**EmoWeather の対応策:**
- グローバル認識の高い色を選択（Happy=黄、Sad=青など）
- テキストと記号で文化的な曖昧性を排除

### 11.3 認知的負荷理論（Cognitive Load Theory）

#### 認知的負荷の3つのレベル

1. **内在性負荷（Intrinsic Load）**
   - タスク自体の複雑さ
   - EmoWeather では制御不可（感情チェックインは単純）

2. **外在性負荷（Extraneous Load）**
   - インターフェース設計による負荷
   - EmoWeather が最適化すべき領域
   - 不要な装飾、複雑なナビゲーション、紛らわしい色を排除

3. **関連性負荷（Germane Load）**
   - ユーザーの学習・理解に必要な認知力
   - EmoWeather では、感情分類の概念理解が該当

#### EmoWeather での認知的負荷軽減

```
┌─────────────────────────────────────────────┐
│ 認知的負荷軽減の階層                          │
├─────────────────────────────────────────────┤
│                                              │
│ レベル1：感覚的理解（最優先）                 │
│ ├─ 絵文字で直感的に感情を表現                 │
│ ├─ 6色の感情で選択肢を限定                   │
│ └─ 最小2クリックで目標達成                   │
│                                              │
│ レベル2：スキャンビリティ                     │
│ ├─ 視覚ハイラーキーで優先順位が明確          │
│ ├─ ワイトスペース（余白）で情報を分離        │
│ └─ 短いテキスト（マイクロコピー）             │
│                                              │
│ レベル3：一貫性（スキーマの形成）             │
│ ├─ 同じパターンの繰り返しで予測可能性向上    │
│ ├─ ボタン位置、色の意味が常に同じ            │
│ └─ ユーザーメンタルモデルの確立              │
│                                              │
└─────────────────────────────────────────────┘
```

### 11.4 メンタルモデルの構築

#### メンタルモデルとは

ユーザーが「このシステムはこのように動く」と心に描くイメージ。正確なメンタルモデルがあれば、ユーザーは以下を実現できます：

- 効率的にシステムを操作できる
- エラーが何かを理解できる
- 新機能も推測で使用できる

#### EmoWeather のメンタルモデル設計

```
現実世界のメタファー：天気予報アプリ
            ↓
EmoWeather での適用：感情は「天気」のように変わる
            ↓
ユーザーの期待：
- 今日の「感情の天気」を予報する
- 地域別の「感情の気象図」を見る
- 感情データのパターンを発見する
```

**メンタルモデルを強化するUI設計:**

| UI要素 | メタファー | 目的 |
|-------|---------|-----|
| 感情アイコン | 天気記号（☀️，☔︎，⛈️） | 直感的理解 |
| 感情カラー | 天気の色（晴＝黄、雨＝青） | 現実世界との対応 |
| マップビュー | 天気図 | グローバル感情を視覚化 |
| タイムライン | 天気予報の時系列 | 感情の変化を追跡 |
| チェックイン | 気象観測所 | ユーザーが情報源 |

### 11.5 習慣形成と UI の関係

#### 習慣形成の仕組み（Habit Loop）

```
トリガー（Cue） → ルーチン（Routine） → 報酬（Reward）
   ↑                                         ↓
   └──────────────── 繰り返される ──────────┘
```

**BJ Fogg の行動モデル（B=MAP）:**
```
Behavior = Motivation × Ability × Prompt

B を起こすには、3つすべてが揃う必要がある
```

#### EmoWeather での習慣化設計

1. **モチベーション（Motivation）**
   - 内発的：「自分の気持ちを理解したい」
   - 外発的：「データで感情パターンを発見したい」
   - UI による強化：感情データの可視化、インサイト提示

2. **能力（Ability）**
   - チェックインに必要な時間：< 10秒
   - タップ数：2-3回以内
   - 言語的な努力：最小限（アイコンで十分）
   - UI による簡略化：大きなボタン、直感的配置

3. **プロンプト（Trigger）**
   - 外的：プッシュ通知「今の気分は？」
   - 内的：習慣化で自動的に思い出す
   - UI による視認性：ホーム画面に常時表示

#### 習慣化を促すUI パターン

```javascript
// 実装例：習慣形成トリガー
const HabitTriggerComponent = () => {
  return (
    <div className="sticky top-0 p-4 bg-gradient-to-b from-darkest to-transparent">
      {/* 目立つ配置 */}
      <h2>今の気分はどう？</h2>
      
      {/* 素早いアクション */}
      <EmotionCheckIn />
      
      {/* 即座のフィードバック */}
      <div className="text-sm text-happy-400 mt-2">
        ✓ {lastCheckIn} に記録済み
      </div>
    </div>
  )
}
```

---

## 12. OOUI（Object-Oriented User Interface）哲学

EmoWeather は **OOUI** 哲学に基づいた設計を実践しています。これは、ユーザーが「行動」ではなく「対象物」として世界を認識するという人間の自然な思考様式を尊重する設計アプローチです。

### 12.1 OOUI の定義と背景

#### OOUI とは

**Object-Oriented User Interface**は、1980年代にマッキントッシュで確立された設計パラダイムです。提唱者の Jef Raskin は以下のように定義しました：

> 「UI は動詞（動作）ではなく、名詞（対象）を中心に設計されるべき」

#### 命令型 UI vs. OOUI

| 側面 | 命令型 UI | OOUI |
|------|--------|-----|
| **中心** | 動作（動詞） | 対象物（名詞） |
| **例：メール送信** | File → Send | Email オブジェクト → Send |
| **ユーザーの思考** | 「何をするか」 | 「何に対して何をするか」 |
| **学習曲線** | 急 | 緩い |
| **エラー率** | 高い | 低い |
| **例：Finder** | 「ファイル削除」コマンド | 削除したいファイル → ゴミ箱へドラッグ |

**具体例：文書の削除**

```
❌ 命令型 UI
ユーザー：「文書を削除したい」
→ メニューを開く（File）
→ Delete コマンドを探す
→ 対象を選ぶ
→ 確認ダイアログに応答

✅ OOUI
ユーザー：「この文書いらない」
→ 文書をゴミ箱へドラッグ
→ 直感的で完了
```

### 12.2 名詞中心の設計（オブジェクト）

#### EmoWeather での主要オブジェクト

```
EmoWeather システムのオブジェクト階層：

World (世界)
├─ Emotion (感情) ★ プライマリオブジェクト
│  ├─ Happy（幸福）
│  ├─ Sad（悲しみ）
│  ├─ Angry（怒り）
│  ├─ Calm（落ち着き）
│  ├─ Excited（興奮）
│  └─ Neutral（中立）
│
├─ Location (地域)
│  ├─ City（都市）
│  ├─ Country（国）
│  └─ Globe（地球）
│
├─ Timeline (時間軸)
│  ├─ Today（今日）
│  ├─ Week（1週間）
│  ├─ Month（1ヶ月）
│  └─ Year（1年）
│
└─ Insight (インサイト)
   ├─ Pattern（パターン）
   ├─ Trend（トレンド）
   └─ Recommendation（推奨）
```

#### 各オブジェクトの属性と操作

**Emotion（感情）オブジェクト**

```typescript
interface EmotionObject {
  // 属性（Properties）
  type: 'happy' | 'sad' | 'angry' | 'calm' | 'excited' | 'neutral'
  intensity: 0-100  // 強度
  timestamp: Date
  location: Location
  context?: string  // 理由（オプション）
  weather?: WeatherData  // 気象データとの相関
  
  // メソッド（操作）
  log(): void  // チェックイン
  share(): void  // 共有
  analyze(): Insight  // 分析
  compare(): TrendData  // 比較
  export(): File  // エクスポート
}
```

**Location（地域）オブジェクト**

```typescript
interface LocationObject {
  // 属性
  name: string
  coordinates: [latitude, longitude]
  country: string
  timezone: string
  
  // メタデータ
  emotionData: EmotionObject[]
  weatherData: WeatherData
  population?: number
  
  // メソッド
  getEmotionalWeather(): EmotionalWeatherMap
  compareToPreviousPeriod(): ComparisonResult
  exploreNearby(): LocationObject[]
}
```

### 12.3 アクション中心から脱却

#### 従来のアクション中心設計の問題点

```
❌ アクション中心（リスク高い）：
メニュー
├─ Add Emotion
├─ Delete Emotion
├─ Edit Emotion
├─ Share Emotion
├─ Analyze Emotion
└─ Export Emotion

ユーザーが迷う：
- 「どのアクションを最初にやるべき？」
- 「このアクションの後は何？」
- 「データをなくしたらどうしよう」
```

#### OOUI での改善

```
✅ オブジェクト中心（直感的）：
感情オブジェクト
├─ 視覚表現（絵文字 + 色）
├─ 直接操作
│  ├─ ドラッグ = 移動／日付変更
│  ├─ スワイプ = 削除
│  ├─ ダブルタップ = 編集
│  ├─ 長押し = コンテキストメニュー
│  └─ ピンチ = 詳細表示
└─ 文脈的アクション（ボタンはオブジェクトの一部）
   ├─ 共有
   ├─ 比較
   └─ 分析
```

### 12.4 EmoWeather での OOUI 適用例

#### 「感情」をオブジェクトとして設計

```typescript
// 感情オブジェクトの視覚表現
const EmotionObjectCard = ({ emotion }: { emotion: EmotionObject }) => {
  return (
    <div 
      draggable
      onClick={() => emotion.analyze()}
      onContextMenu={() => showContextMenu(emotion)}
      className="emotion-card cursor-move"
    >
      {/* 見た目：アイコン + 色 */}
      <EmotionIcon emotion={emotion.type} size="lg" />
      
      {/* メタデータ */}
      <span>{emotion.timestamp.toLocaleString()}</span>
      <span>{emotion.intensity}%</span>
      
      {/* 直接操作可能 */}
      <ActionBar>
        <button onClick={() => emotion.share()}>共有</button>
        <button onClick={() => emotion.compare()}>比較</button>
        <button onClick={() => emotion.analyze()}>分析</button>
      </ActionBar>
    </div>
  )
}
```

#### 「チェックイン」の意味づけ

```
従来（アクション中心）：
- ユーザーが「感情を登録する」アクションを実行
- 入力フォーム → 送信ボタン → 確認ダイアログ

OOUI（オブジェクト中心）：
- 「この瞬間の感情」という新しいオブジェクトを「世界に放出する」イメージ
- ワンタップで感情オブジェクトが作成 → 地球上に「落ちる」アニメーション
- ユーザーの行為：「今の自分の感情を記録する」→ 「世界に感情を足す」
```

**ビジュアルメタファー実装:**

```jsx
const CheckInVisualization = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-darkest to-darker">
      {/* 感情選択 */}
      <div className="emotion-picker">
        <p>今の気分はどう？</p>
        <div className="grid grid-cols-3 gap-2">
          {emotions.map(emotion => (
            <button
              key={emotion}
              onClick={() => releaseEmotion(emotion)}
              className="emotion-button"
            >
              <EmotionIcon emotion={emotion} />
            </button>
          ))}
        </div>
      </div>

      {/* 世界マップ */}
      <div className="world-map flex-1">
        {/* 感情オブジェクトがマップ上に「落ちる」 */}
        {emotionObjects.map(obj => (
          <div
            key={obj.id}
            className="animate-fall"  // 落下アニメーション
            style={{
              left: `${obj.location.lng}%`,
              top: `${obj.location.lat}%`,
            }}
          >
            <EmotionMarker emotion={obj} />
          </div>
        ))}
      </div>
    </div>
  )
}
```

#### 「地図」をメタファーとして活用

```
地球 = 人類全体の感情が存在する空間
├─ 各地点 = 感情オブジェクトの空間的集積
├─ グロー = 感情の強度を表現
├─ 色 = 感情の種類を表現
└─ アニメーション = リアルタイムの感情フロー
```

**地図インタラクション:**

```jsx
const EmotionalWorldMap = () => {
  return (
    <SVGMap>
      {/* 地球を描画 */}
      <Globe />
      
      {/* 感情オブジェクトをマップ上に表示 */}
      {emotions.map(emotion => (
        <EmotionMarker
          key={emotion.id}
          emotion={emotion}
          onClick={() => emotion.inspect()}  // クリック = オブジェクト検査
          onDrag={(newLocation) => emotion.relocate(newLocation)}  // ドラッグ = 再配置
        />
      ))}
      
      {/* グローバルな感情パターン */}
      <HeatmapOverlay intensity="high" emotion="happy" />
    </SVGMap>
  )
}
```

### 12.5 具体的な実装パターン（React + TypeScript）

#### OOUI パターン 1: 直接操作

```typescript
// components/EmotionObjectCard.tsx
import React, { useState } from 'react'
import { EmotionObject, EmotionType } from '@/types'

interface Props {
  emotion: EmotionObject
  onDelete: (id: string) => void
  onUpdate: (emotion: EmotionObject) => void
}

export const EmotionObjectCard: React.FC<Props> = ({
  emotion,
  onDelete,
  onUpdate,
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [showContext, setShowContext] = useState(false)

  // ドラッグ開始
  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true)
    e.dataTransfer?.setData('emotion', JSON.stringify(emotion))
  }

  // ドラッグ終了（他のオブジェクトへドロップ = 関連付け）
  const handleDrop = (e: React.DragEvent) => {
    const targetEmotion = JSON.parse(e.dataTransfer?.getData('emotion') || '{}')
    // 感情同士を関連付ける、またはマージ
    onUpdate({
      ...emotion,
      relatedEmotions: [...(emotion.relatedEmotions || []), targetEmotion.id],
    })
  }

  // スワイプ削除（モバイル）
  const handleSwipeDelete = () => {
    onDelete(emotion.id)
  }

  // ダブルタップ編集
  const handleDoubleClick = () => {
    // エディタを開く
  }

  // 長押しコンテキストメニュー
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowContext(true)
  }

  return (
    <div
      className="emotion-card p-4 bg-darker rounded-lg hover:glow-standard transition-all
                 cursor-move"
      draggable
      onDragStart={handleDragStart}
      onDrop={handleDrop}
      onDoubleClick={handleDoubleClick}
      onContextMenu={handleContextMenu}
    >
      {/* オブジェクトの視覚表現 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <EmotionIcon emotion={emotion.type} size="lg" />
          <div>
            <p className="text-sm text-white font-medium">
              {emotion.type.toUpperCase()}
            </p>
            <p className="text-xs text-gray-light">
              {emotion.timestamp.toLocaleTimeString()}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-white">{emotion.intensity}%</p>
        </div>
      </div>

      {/* コンテキスト（補足情報） */}
      {emotion.context && (
        <p className="text-sm text-gray-light mb-3 italic">\"{emotion.context}\"</p>
      )}

      {/* アクションバー（オブジェクトの一部） */}
      <div className="flex gap-2">
        <button
          onClick={() => emotion.share?.()}
          className="flex-1 px-3 py-1 bg-dark hover:bg-gray-400 text-sm rounded transition"
        >
          共有
        </button>
        <button
          onClick={() => emotion.analyze?.()}
          className="flex-1 px-3 py-1 bg-dark hover:bg-gray-400 text-sm rounded transition"
        >
          分析
        </button>
        <button
          onClick={() => onDelete(emotion.id)}
          className="px-3 py-1 bg-angry-600 hover:bg-angry-700 text-white text-sm rounded"
        >
          削除
        </button>
      </div>

      {/* コンテキストメニュー */}
      {showContext && (
        <ContextMenu>
          <MenuItem onClick={() => emotion.export?.()}>エクスポート</MenuItem>
          <MenuItem onClick={() => emotion.duplicate?.()}>複製</MenuItem>
          <MenuItem onClick={() => onDelete(emotion.id)}>削除</MenuItem>
        </ContextMenu>
      )}
    </div>
  )
}
```

#### OOUI パターン 2: オブジェクトプール

```typescript
// hooks/useEmotionObjects.ts
import { useCallback, useReducer } from 'react'
import { EmotionObject, EmotionType } from '@/types'

type Action =
  | { type: 'CREATE'; emotion: EmotionObject }
  | { type: 'UPDATE'; emotion: EmotionObject }
  | { type: 'DELETE'; id: string }
  | { type: 'RELATE'; emotionId: string; relatedId: string }

const emotionReducer = (state: EmotionObject[], action: Action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.emotion]
    
    case 'UPDATE':
      return state.map(e => e.id === action.emotion.id ? action.emotion : e)
    
    case 'DELETE':
      return state.filter(e => e.id !== action.id)
    
    case 'RELATE':
      return state.map(e => 
        e.id === action.emotionId
          ? { ...e, relatedEmotions: [...(e.relatedEmotions || []), action.relatedId] }
          : e
      )
    
    default:
      return state
  }
}

export const useEmotionObjects = () => {
  const [emotions, dispatch] = useReducer(emotionReducer, [])

  const create = useCallback((newEmotion: EmotionObject) => {
    dispatch({ type: 'CREATE', emotion: newEmotion })
  }, [])

  const update = useCallback((emotion: EmotionObject) => {
    dispatch({ type: 'UPDATE', emotion })
  }, [])

  const delete_ = useCallback((id: string) => {
    dispatch({ type: 'DELETE', id })
  }, [])

  const relate = useCallback((emotionId: string, relatedId: string) => {
    dispatch({ type: 'RELATE', emotionId, relatedId })
  }, [])

  return { emotions, create, update, delete: delete_, relate }
}
```

---

## 13. デザイン哲学・思想

EmoWeather のデザインは、複数の著名なデザイン思想家の理論に基づいています。本セクションでは、これらの哲学がいかに私たちのUI設計に反映されているかを解説します。

### 13.1 Don Norman の「Emotional Design」

#### 3つのレベルの感情設計

Don Norman は、デザインが呼び起こす感情を3レベルに分類しました：

**1. 本能的レベル（Visceral Level）**
```
感覚器官への直接的な刺激
・視覚：色、形、グロー効果
・聴覚：サウンドフィードバック
・触覚：ハプティック振動

EmoWeather への適用：
✓ グロー効果が視覚的に心地よい
✓ 感情アイコン（😊）で即座に親しみやすさを感じる
✓ ダークモードは目への優しさ
✓ スムーズなアニメーションで心地よさ
```

**2. 行動的レベル（Behavioral Level）**
```
使いやすさ、予測可能性、パフォーマンス
・効率的（少ないステップ）
・直感的（学習が少ない）
・フィードバックが即座

EmoWeather への適用：
✓ チェックイン = 1タップ（最速）
✓ OOUI で予測可能な操作
✓ 即座の視覚的フィードバック（グロー、アニメーション）
✓ エラーが少ないシンプル設計
```

**3. 認識的レベル（Reflective Level）**
```
自己イメージ、文化的価値、個人的な物語
・ブランドの価値
・社会的地位
・人生観との整合性

EmoWeather への適用：
✓ 「感情を理解したい」という欲求への応答
✓ グローバル共感（他者の感情を理解）
✓ データ駆動型の自己理解
✓ メンタルヘルスの意識化
```

### 13.2 Jef Raskin の「インターフェース設計論」

#### 一貫性と予測可能性

Jef Raskin は、UI の一貫性の重要性を強調しました：

> 「ユーザーが前回と同じ操作をすれば、同じ結果が得られるべき。これが信頼の基本。」

**EmoWeather での実装:**

```
操作の一貫性:
┌─────────────────────────┐
│ 感情アイコンをタップ    │
│ → 常に感情オブジェクト  │
│   が作成される          │
└─────────────────────────┘

色の一貫性:
┌─────────────────────────┐
│ Happy = 常に黄色        │
│ Sad = 常に青色          │
│ Angry = 常に赤色        │
│ （デバイス、ページ、    │
│  時間に関わらず）       │
└─────────────────────────┘

位置の一貫性:
┌─────────────────────────┐
│ 感情選択パネル          │
│ = 常に画面上部          │
│ ワールドマップ          │
│ = 常に中央              │
└─────────────────────────┘
```

### 13.3 Steve Krug の「シンプル設計」

#### Don't Make Me Think の原則

Steve Krug の金言：「ユーザーを思考させるな」

EmoWeather での適用：

```
❌ ユーザーが思考してしまう例：
- 「この色は何を意味するの？」
- 「どのボタンを押せば何が起こるの？」
- 「感情の強度を選ぶ必要があるの？」

✅ ユーザーが思考不要な例：
- 😊 のアイコン = 幸福（自明）
- 黄色 = Happy（色彩心理）
- ワンタップで完了（シンプル）
- アニメーション = 結果の可視化（即座）
```

### 13.4 北欧ミニマリズム

#### デザイン原則

北欧デザイン哲学の特徴：
- 機能性重視
- 装飾的要素の排除
- 清潔感と秩序
- ユーザーの自由度

**EmoWeather での反映:**

```
機能性：
✓ すべての視覚要素が機能を持つ
✓ グロー = 重要性の表現、フォーカス
✓ 色 = 情報の分類

清潔感：
✓ ダークモード = 過度な光の排除
✓ ホワイトスペース = 呼吸空間
✓ シンプルなタイポグラフィ（Inter）

秩序：
✓ グリッドシステム = 視覚的調和
✓ 一貫性 = 予測可能性
✓ スペーシングスケール = リズム
```

### 13.5 日本の美学（侘・寂）と UI

#### 侘（わび）の精神

不完全性、謙虚性、素朴さへの価値観

```
EmoWeather での表現：
✓ 不完全な感情データ = 人間らしさ
✓ 装飾的でないシンプルUI = 謙虚さ
✓ 白と黒の対比 = 素朴さ
✓ 余白の大切さ = 「言わないことの価値」
```

#### 寂（さび）の精神

時間の経過、変化、無常への美学的価値

```
EmoWeather での表現：
✓ 感情の変化を時系列で記録
✓ パターンの発見 = 無常への気づき
✓ グロー効果 = 移ろう時間の表現
✓ アニメーション = 「今」の瞬間性
```

### 13.6 禅の思想と UI

#### 禅の 5 つの原則と UI

| 禅の原則 | 意味 | EmoWeather での応用 |
|---------|------|------------------|
| **一** (Unity) | 全体の調和 | すべての感情が同じシステム内で共存 |
| **不** (Asymmetry) | 非対称による美 | グロー効果、不規則なアニメーション |
| **虚** (Emptiness) | 空間の有効活用 | ホワイトスペース、余白 |
| **寂** (Simplicity) | シンプルさ | ミニマルなUI要素 |
| **自然** (Nature) | 自然との調和 | 気象とメタファーの融合 |

---

## 14. ユーザーメンタルモデル

EmoWeather のデザインは、ユーザーがシステムについて抱く「心的模型（メンタルモデル）」を形成・強化することに注力しています。

### 14.1 メンタルモデルの層構造

```
レイヤー 4：哲学的理解
│ 「感情はデータ化できる」
│ 「世界は相互に感情でつながっている」
│
レイヤー 3：概念的理解
│ 「感情 = 天気」
│ 「地球 = 感情が流動する空間」
│
レイヤー 2：機能的理解
│ 「タップ = 感情を記録」
│ 「マップ = 世界の感情を見る」
│
レイヤー 1：感覚的理解（最速）
│ 😊 = 幸福
│ 😢 = 悲しみ
│ 黄色 = Happy
└─ 絵文字、色で直感的に理解
```

### 14.2 一貫性の重要性

#### 水平的一貫性（Horizontal Consistency）
```
同じ機能は、どのページでも同じ見た目・操作
・感情ボタン: 常に同じ位置、同じサイズ、同じ色
・ナビゲーション: 常に同じ構造
・エラーメッセージ: 常に同じスタイル
```

#### 垂直的一貫性（Vertical Consistency）
```
時間経過の中でも一貫性を保つ
・1年前と今日のUI が同じルールに従う
・バージョン更新後もユーザーの知識が有効
・新機能もシステムの世界観に合致
```

### 14.3 メタファーの活用

#### 天気予報メタファーの深さ

```
レベル 1: 単純な類似
「感情」と「天気」は変動する → カラフルなアイコン

レベル 2: 相互作用
感情と気象の因果関係
例：雨の日 → 悲しみが増加傾向
   晴天 → 幸福が増加傾向

レベル 3: 構造的対応
┌──────────────────────┐
│ 現実の気象システム    │
├──────────────────────┤
│ ・地球規模           │
│ ・リアルタイム       │
│ ・予測可能           │
│ ・社会的影響         │
└──────────────────────┘
           ↓ メタファー
┌──────────────────────┐
│ EmoWeather システム  │
├──────────────────────┤
│ ・グローバル感情     │
│ ・ライブ共有         │
│ ・パターン分析       │
│ ・共感形成           │
└──────────────────────┘
```

#### メタファーの拡張

```javascript
// メタファーを活用したコンポーネント設計

const EmotionalWeatherSystem = {
  // 天気予報 → 感情予測
  EmotionForecast: {
    props: ['pastEmotions', 'triggers'],
    returns: 'predictedEmotions'
  },

  // 気象衛星 → 感情グローバルマップ
  GlobalEmotionMap: {
    props: ['allEmotions', 'timeRange'],
    features: ['heatmap', 'realtime', 'regional']
  },

  // 観測所 → チェックイン
  EmotionObservatory: {
    action: 'logEmotion',
    frequency: 'multiple times daily',
    impact: 'feeds global data'
  },

  // 気象警報 → 感情アラート
  EmotionalAlert: {
    triggers: ['sudden emotion shift', 'pattern change'],
    purpose: 'awareness and support'
  }
}
```

### 14.4 心理的な予測可能性

#### ユーザーが予測できる状況

```
✓ 予測可能な操作
├─ ボタンをタップ → 何か起こる
├─ アニメーション → 何かが完了した
├─ グロー効果 → これが重要な要素
└─ 色が変わる → 状態が変わった

✓ 予測可能なシーケンス
├─ チェックイン → データが保存される
├─ マップ表示 → 世界中の感情が見える
├─ 分析ボタン → インサイトが表示される
└─ 共有ボタン → 他者と共有できる

✓ 予測可能な結果
├─ 記録した感情 → 削除まで保持される
├─ 共有 → 匿名で世界に公開される
├─ 分析 → パターンと推奨が表示される
└─ データエクスポート → 外部で利用可能
```

#### 予測可能性を損なう設計を避ける

```
❌ 避けるべきパターン：
- サプライズな動作（期待外の結果）
- 隠れた副作用（タップで予期しない変化）
- 非対称な操作（同じボタンで異なる結果）
- 曖昧なフィードバック（何が起こったか不明確）

✅ 確保すべきパターン：
- 操作と結果の明確な関係
- 即座の視覚的フィードバック
- 一貫した動作
- リバーサル可能性（取り消せる）
```

---

## 15. 感情エクスペリエンス設計

EmoWeather は単なる「気象情報アプリ」ではなく、**感情を通じた人間的な体験設計** に焦点を当てています。

### 15.1 感情の層（感覚 → 感情 → 思考 → 行動）

#### Jad Abumrad のモデル（体験の階層）

```
層 1: 感覚レベル（Sensory）
      ↓
      ユーザーが五感で受け取る情報
      - グロー = 光の感覚
      - 色 = 波長の感覚
      - アニメーション = 動きの感覚

層 2: 感情レベル（Emotional）
      ↓
      感覚に対する感情的反応
      - グロー → 「きれい」「心地よい」
      - 黄色 → 「温かい」「幸せ」
      - スムーズなアニメーション → 「気持ちいい」

層 3: 思考レベル（Cognitive）
      ↓
      感情に基づく理解と判断
      - 「このアプリは自分を理解している」
      - 「他者とつながれる」
      - 「データで自分が見える」

層 4: 行動レベル（Behavioral）
      ↓
      行動への変換
      - 毎日チェックインする（習慣）
      - 世界中の感情を探索する（参加）
      - 自分の感情パターンに向き合う（成長）
```

### 15.2 トランジション（遷移）の感情的な役割

#### トランジションが果たす役割

```
従来のUI：
ページA ─── パッと切り替わる ──→ ページB
         （認知的負荷、戸惑い）

EmoWeather での設計：
ページA ─ スムーズアニメーション → ページB
         （準備、期待感、満足感）
```

**ケース：感情チェックイン完了時の遷移**

```typescript
// 感情オブジェクトが「地球に落ちる」トランジション
const CheckInTransition = () => {
  return (
    <motion.div
      initial={{ y: '-100vh', opacity: 0 }}  // 画面上部から開始
      animate={{ y: 0, opacity: 1 }}  // 感情アイコンが降下
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="emotion-icon text-6xl"
    >
      😊
    </motion.div>
  )
}

// その後、マップに追加されるアニメーション
const EmotionPlaceOnMap = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, glow: [0.5, 1, 0.5] }}  // グロー脈動
      transition={{ duration: 0.6 }}
      className="glow-happy"
    >
      ✓ 記録されました
    </motion.div>
  )
}
```

### 15.3 ダークモードが与える心理的効果

#### ダークモードの心理的メリット

```
物理的メリット：
✓ 目の疲労軽減（ブルーライト削減）
✓ バッテリー消費削減（OLED画面）
✓ 夜間使用での睡眠障害軽減

心理的メリット：
✓ 内省的な気分（自分の内面に向き合う）
✓ 隠蔽感（プライバシー感）
✓ 前衛的・知識的イメージ
✓ 感情データへの「重み付け」（深刻さ）
```

#### EmoWeather でダークモード採用の理由

```
感情チェックインは「内向的な行為」
→ 内省を促すダークモード環境

感情データはプライベート
→ 隠蔽感のあるダークモード

グロー効果の美しさ
→ ダークバックグラウンドで映える

ナイトアウル対応
→ 夜間（感情が活発）の使用に最適
```

### 15.4 グロー効果と「温かさ」の関係

#### グロー効果の心理学的役割

```
視覚的効果：
- オブジェクトが「輝いている」 = 重要性
- ぼかし効果 = 柔らかさ、親しみやすさ
- 色のぼかし = 感情的な「温かさ」

心理的効果：
- 視線の誘導（注意の集中）
- 「このシステムは洗練されている」認識
- 安心感（「これは正しい行為」と無意識に判断）
- リラックス（柔らかい光は副交感神経を刺激）
```

**グロー効果の種類と感情的意図:**

```css
/* 微細グロー = 「これに気づいて」 */
.glow-subtle {
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
  /* 柔らかく視線を誘導、強制的ではない */
}

/* 標準グロー = 「これは重要」 */
.glow-standard {
  box-shadow: 
    0 0 20px rgba(168, 85, 247, 0.4),
    0 0 40px rgba(168, 85, 247, 0.2);
  /* 確実に視線を集める、正当性を感じさせる */
}

/* 強烈グロー = 「今、ここで行動して」 */
.glow-intense {
  box-shadow: 
    0 0 30px rgba(236, 72, 153, 0.6),
    0 0 60px rgba(236, 72, 153, 0.3);
  /* 緊急性、即座の行動を促す */
  animation: pulse-ring 2s infinite;
  /* 脈動で時間的プレッシャーを感じさせる */
}
```

### 15.5 アニメーションが生む「生命感」

#### アニメーションの心理的作用

```
静的UI vs. アニメーション UI：

❌ 静的：
- ロボティック、冷たい
- 応答性が不明確
- ユーザーが体験を感じない

✅ アニメーション：
- 生きているかのような応答
- 変化が目に見える
- ユーザーの行為が「効いた」と実感
```

#### 「生命感」を与えるアニメーションパターン

**1. 呼吸するUI**
```css
@keyframes breathe {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
}

/* グロー効果を「呼吸」させる */
.breathing-element {
  animation: breathe 4s ease-in-out infinite;
}
```
→ 効果：システムが「生きている」感覚

**2. ぎこちない（でもかわいい）動き**
```css
@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-2deg); }
}

/* 完璧さを避けることで人間らしさを表現 */
.friendly-element {
  animation: wobble 0.6s ease-in-out;
}
```
→ 効果：機械的でなく、親しみやすい

**3. 遅延アニメーション（ステージ効果）**
```javascript
emotions.map((emotion, index) => (
  <EmotionCard
    key={emotion.id}
    emotion={emotion}
    style={{
      animationDelay: `${index * 0.1}s`  // 0.1s ごとに遅延
    }}
  />
))
```
→ 効果：一つずつ現れることで、あたかも「生まれてきた」印象

---

## 16. デザイン倫理・責任設計

EmoWeather は感情データを扱うため、その設計には高い倫理的責任があります。

### 16.1 プライバシー配慮設計

#### データ最小化の原則

```
収集する情報を最小限に留める：

EmoWeather が収集: ✓ 最小限
├─ 感情タイプ
├─ 強度（0-100）
├─ タイムスタンプ
├─ 地域情報（オプション）
└─ ユーザーが任意で追加したテキスト

EmoWeather が収集しない: ✗ 明確に除外
├─ ユーザーの名前（匿名ID のみ）
├─ 連絡先情報
├─ ブラウジング履歴
├─ 他アプリケーションのデータ
└─ 生体認証情報
```

#### プライバシー by Design

```
デザイン段階での配慮：

1. データ最小化
   └─ UI で必須情報のみ入力要求

2. 目的の限定
   └─ 感情分析にしか使わない
   └─ サードパーティ売却なし

3. ユーザー制御
   └─ いつでもデータ削除可能
   └─ 共有範囲の明確な指定
   └─ エクスポート可能

4. 透明性
   └─ プライバシーポリシーが明確
   └─ データ使用の目的が明確
   └─ 暗号化の有無を説明
```

### 16.2 アクセシビリティの倫理的側面

#### 包括的デザイン（Inclusive Design）

```
アクセシビリティは「オプション」ではなく「倫理的義務」

視覚障害者:
✓ スクリーンリーダー対応
✓ 色以外での情報伝達
✓ テキスト代替

聴覚障害者:
✓ 音声フィードバック不依存
✓ キャプション表示

認知障害:
✓ シンプルなUI
✓ 過度なアニメーションなし
✓ 十分な時間的余裕

運動障害:
✓ キーボード操作完全対応
✓ 大きなタップエリア（44x44px最小）
✓ 長押し不要
```

### 16.3 メンタルヘルスを配慮した設計

#### 心理的安全性

```
❌ 危ない設計：
- 感情を「良い」「悪い」で判定する
- 感情データを他者と比較させる
- 「改善が必要」というメッセージ
- ネガティブな感情を否定する

✅ 安全な設計：
- すべての感情を受け入れる（非判断的）
- 個人のパターンのみ提示
- 「理解する」「共感する」メッセージ
- 感情の多様性を尊重する
```

#### サポートリソースへのアクセス

```typescript
// メンタルヘルスが危機的な場合のUI

const CrisisSupport = ({ emotion }: { emotion: EmotionType }) => {
  if (emotion === 'very-sad' || emotion === 'very-angry') {
    return (
      <div className="crisis-banner bg-angry-600">
        <p>もしあなたが辛い状態なら、サポートがあります</p>
        <Button onClick={() => openResources()}>
          リソースを見る
        </Button>
        {/* 
         * 全国心の電話: 1234-56-7890
         * メンタルヘルスウェブサイト
         * 近くの相談施設
         */}
      </div>
    )
  }
}
```

### 16.4 依存症を引き起こさないデザイン

#### 過度なエンゲージメント設計を避ける

```
❌ 避けるべき：
- 無限スクロール（常に新しいコンテンツ）
- 通知スプレー（過度な通知）
- ガチャ要素（ランダムな報酬）
- スリーク数表示（自己比較）
- 「連続記録」の強調（プレッシャー）

✅ 健全な設計：
- 明確な「終了」セッション境界
- 通知は1日1回程度、可能性のみ
- 報酬は予測可能（ランダムでない）
- 本人のデータのみ表示
- 「今回がどうだ」より「パターン」に焦点
- チェックイン忘れてもOK のメッセージ
```

#### デジタルウェルネスの設計

```javascript
// 過度な使用を検知して促す機能

const HealthyEngagement = () => {
  const sessionDuration = calculateSessionTime()
  
  if (sessionDuration > 30 * 60 * 1000) {  // 30分以上
    return (
      <BreakerModal>
        <p>お疲れ様でした！</p>
        <p>ここで一休みしてはいかがですか？</p>
        <Button onClick={() => closeApp()}>
          今日はここまで
        </Button>
      </BreakerModal>
    )
  }
}

// 連続記録ではなく「継続する意義」に焦点
const HealthyRewards = ({ checkInStreak }: { checkInStreak: number }) => {
  return (
    <InsightCard>
      <h3>あなたのパターン</h3>
      <p>
        過去30日間、あなたは{checkInStreak}回記録しました。
        このデータから、あなたの感情パターンが見えてきました。
      </p>
      {/* スコアや達成度ではなく「インサイト」に焦点 */}
    </InsightCard>
  )
}
```

### 16.5 感情データの扱い

#### データ所有権

```
明確な原則：
✓ ユーザーデータはユーザーの所有物
✓ EmoWeather は「管理者」に過ぎない
✓ いつでも削除・エクスポート可能
✓ 研究利用は明確な同意後、かつ匿名化後
```

#### 倫理的な分析

```
✓ 許可される分析：
- 個人のパターン認識
- グローバルな感情トレンド（統計的）
- 気象との相関（学術目的）

✗ 許可されない分析：
- 個人を特定した商業利用
- 個人の購買行動予測
- 差別的な分類
- 個人情報の第三者売却
```

---

## 17. 脳科学的デザイン原則

EmoWeather のUI設計は、認知神経科学と脳科学の最新知見に基づいています。

### 17.1 注意資源の管理

#### 注意の希少性

人間の注意資源は限定的です。EmoWeather は、ユーザーの注意をどこに集中させるかを慎重に設計しています。

```
注意資源の配分：

ユーザー来訪時
        ↓
  100 ユニット の注意力
        ↓
┌─────────────────────────────────┐
│ 絶対必要な要素に 60%             │
│ ├─ 感情選択（30%）               │
│ ├─ チェックインボタン（20%）      │
│ └─ 状態フィードバック（10%）      │
│                                 │
│ 補助情報に 30%                   │
│ ├─ 現在時刻（10%）               │
│ ├─ 位置情報（10%）               │
│ └─ その他の統計（10%）            │
│                                 │
│ 余力に 10%                       │
│ └─ 探索・発見                    │
└─────────────────────────────────┘
```

#### 注意散漫を防ぐ設計

```
❌ 注意を散らす要素：
- 複数の同時アニメーション
- 点滅する警告
- 自動再生される動画
- ポップアップ広告
- 過度な配色

✅ 注意を集中させる設計：
- 1画面 1 目標（感情選択）
- 段階的な情報提示
- グロー効果で焦点を指定
- 不要な動きは最小化
- 色は感情分類のみに使用
```

### 17.2 ワーキングメモリの限界（7±2の魔法数）

#### マジカルナンバー7±2

認知心理学者 George Miller の発見：人間は同時に 7±2 個の情報ユニットしか保持できません。

```
EmoWeather での適用：

× 悪い例：15種類の感情分類
└─ ユーザーは選択肢の意味を記憶できない

✓ 良い例：6種類の感情分類
├─ Happy
├─ Sad
├─ Angry
├─ Calm
├─ Excited
└─ Neutral
└─ 6個 = 7±2 の範囲内で選択可能

✓ さらに良い例：色とアイコンで強化
├─ Happy = 😊 + 黄色
├─ Sad = 😢 + 青色
├─ Angry = 😠 + 赤色
...
└─ 複数の情報チャネルで記憶定着を促進
```

#### チャンキング（情報の統合）

```
ユーザーの記憶負荷を減らすテクニック：

❌ バラバラな情報：
H-A-P-P-Y = 5つの文字を記憶

✓ チャンク化した情報：
HAPPY = 1つの概念として記憶
   ↓
😊 + 黄色 = さらに1つの記号として記憶
```

### 17.3 報酬システムとのインタラクション

#### ドーパミンシステムの理解

ドーパミンは「報酬」に対して分泌されるのではなく、「報酬への期待」に対して分泌される神経伝達物質です。

```
ドーパミン放出のタイミング：

❌ よくある誤解：
報酬を得た時点 ← ここでドーパミン

✓ 正確な仕組み：
期待 → 報酬達成 ← ここでドーパミン（ピーク）
           ↓
        報酬 ← ここでは減少
```

#### EmoWeather での健全な報酬設計

```javascript
// 期待 → 達成 のサイクルで適切なドーパミンを促す

const HealthyRewardCycle = () => {
  // フェーズ 1: 期待（ユーザーがチェックインしたい欲求）
  const showPrompt = () => (
    <div className="prompt">
      <h2>今の気分を記録しませんか？</h2>
      {/* 期待感を高める */}
    </div>
  )

  // フェーズ 2: 行動（ユーザーがチェックイン）
  const handleCheckIn = () => {
    // フェーズ 3: 即座のフィードバック（視覚的報酬）
    animateEmotionFalling()  // グロー + 落下アニメーション
    showMessage('✓ 記録されました')
  }

  // ❌ 避けるべき：無限のドーパミン放出
  // ランダムな報酬（ガチャ）
  // スコアの強調
  // 連続記録のプレッシャー

  // ✓ 確保すべき：
  // 予測可能な報酬（毎回同じフィードバック）
  // 内発的動機付け（データで自分を理解する喜び）
  // 社会的報酬（共感、つながり）
}
```

### 17.4 ドーパミン駆動設計の危険性

#### 中毒性設計との違い

```
❌ ドーパミン依存設計（避ける）:
特徴：
- ランダムな報酬（ガチャ）
- 無限コンテンツ（終わらない）
- スコア表示（自己比較）
- 友人との競争
- 通知スプレー（常に刺激）

結果：
- 使用時間の延長（依存的）
- 自制困難
- 他の活動の軽視
- 不安症状

✓ 内発的動機設計（推奨）:
特徴：
- 予測可能な報酬（一貫性）
- 明確なセッション終了
- 個人進捗のみ（他者比較なし）
- 内的な理解への報酬
- 適切で少ない通知

結果：
- 健全なエンゲージメント
- 自分のペース
- 他の活動とのバランス
- 精神的な安定
```

### 17.5 持続可能なエンゲージメント設計

#### 長期的なユーザー満足

```
段階的なエンゲージメント（サスティナブルモデル）：

週 1: 発見フェーズ
  └─ 「この機能面白い」「データが見える」

週 2-4: 習慣形成フェーズ
  └─ 「毎日チェックするようになった」「パターンが見える」

月 1-3: 深化フェーズ
  └─ 「自分の感情がわかるようになった」「他者との共感」

月 3+: 統合フェーズ
  └─ 「これは私の人生の一部」「成長の道具」

【重要】 各フェーズで適切なコンテンツを提供
└─ 過度な機能追加ではなく、理解の深化に焦点
```

---

## 18. 美的アプローチ

EmoWeather のビジュアルデザインは、20世紀を代表するデザイン理論に基づいています。

### 18.1 グッドデザインの10原則（Dieter Rams）

Dieter Rams は、20世紀最高のデザイナーの一人。彼の「グッドデザイン」原則は EmoWeather の美的ガイドラインになっています。

| 原則 | 解説 | EmoWeather での実装 |
|------|------|------------------|
| **1. 実用的** | 製品は有用でなければならない | 感情チェックインが中核機能 |
| **2. 美しい** | 審美性を備える | グロー効果、カラーパレット |
| **3. 理解可能** | 自明である | 絵文字、シンプルなUI |
| **4. 控えめ** | 装飾的でない | ダークモード、ミニマル |
| **5. 誠実** | ユーザーを欺かない | データ透明性、プライバシー |
| **6. 耐久性** | 流行に左右されない | シンプルな設計（時代不変） |
| **7. 詳細に注意** | つじつまが合っている | 一貫性、微細なアニメーション |
| **8. 環境配慮** | エコロジカル | ダークモード（エネルギー削減） |
| **9. デザイン最小化** | 本質に絞る | 6色の感情分類 |
| **10. 非デザイン** | デザインが目立たない | ユーザーが感情に集中 |

### 18.2 余白（Negative Space）の力

#### 余白がもたらす効果

```
心理的効果：
✓ 「呼吸空間」の感覚
✓ 整理された印象
✓ 落ち着き
✓ プレミアム感

デザイン効果：
✓ 視線の誘導
✓ 要素間の関係を明確化
✓ 読みやすさ向上
✓ ミニマルな印象

脳科学的効果：
✓ 認知的負荷軽減
✓ 焦点の形成
✓ 美的快感
```

#### EmoWeather での余白の活用

```html
<!-- 余白で情報を層化 -->
<div class="space-y-8">  <!-- 32px の余白 -->
  <section>
    <h2 class="mb-4">感情チェックイン</h2>  <!-- 16px -->
    <div class="flex gap-4">  <!-- 要素間 16px -->
      <button class="p-4">感情選択</button>
    </div>
  </section>

  <section>
    <h2 class="mb-4">世界の感情</h2>
    <!-- 上のセクションから 32px の距離 -->
    <!-- ユーザーはセクションの階層を視覚的に理解できる -->
  </section>
</div>
```

### 18.3 リズムと調和

#### ビジュアルリズム

```
スペーシングスケール（8px ベース）:
2 → 4 → 6 → 8 → 12 → 16 → 24 → 32
    └─ 数学的な倍率（ハーモニー）

この「リズム」が脳に心地よさをもたらす：
- 予測可能性
- 調和
- 美的な満足感
```

#### タイポグラフィのリズム

```
フォントサイズスケール：
12 → 14 → 16 → 18 → 20 → 24 → 30 → 36 → 48

行高のリズム：
1.2 → 1.4 → 1.5 → 1.6

視覚的な「呼吸」が生まれ、読み心地が良くなる
```

### 18.4 対比と統一

#### 対比の効果

```
色の対比：
- Happy（黄）vs. Sad（青） = 補色対比
- ダークベース vs. グロー = 明度対比

形状の対比：
- 円形（感情アイコン） vs. 四角形（カード）
- 柔らかいコーナー（情報） vs. 鋭いエッジ（アクション）

サイズの対比：
- 大きな感情アイコン vs. 小さいテキスト
- プライマリボタン vs. テキストリンク

効果：
✓ 視線の誘導
✓ 情報階層の表現
✓ ダイナミズム
```

#### 統一の効果

```
一貫した設計言語：
✓ すべてのボタンが同じスタイル
✓ すべての感情が同じ表現パターン
✓ すべてのアニメーションが同じ速度
✓ すべてのグロー効果が同じ色

効果：
✓ ブランドの強度
✓ ユーザーの信頼感
✓ 学習の効率化
✓ 一貫性による予測可能性
```

### 18.5 色調の心理的効果（再深化）

#### 色彩対比と視認性

```
EmoWeather での色彩設計：
┌────────────────────────┐
│ ダークベース（#1A1D29）│
│  + グロー効果          │
│  + 感情カラー          │
│ ────────────────────  │
│ 結果：                 │
│ - 視認性：極高         │
│ - 美しさ：優秀         │
│ - 感情表現：明確       │
└────────────────────────┘
```

#### ウォームカラー vs. クールカラー

```
ウォームカラー（Happy, Angry, Excited）:
・視覚的に「近い」印象
・エネルギー、活動性
・興奮、パッション
・積極的な行動を促進

クールカラー（Sad, Calm）:
・視覚的に「遠い」印象
・落ち着き、深さ
・思慮深さ
・内省的な行動を促進
```

---

## 19. EmoWeather の根本設計思想

EmoWeather の存在意義と設計哲学の最核心層です。

### 19.1 「感情を可視化する」の意味

#### 単なる「感情の記録」ではない

```
レベル 1: データ記録
「今日は幸せを感じた」→ データベースに保存
└─ 基本的な機能

レベル 2: パターン認識
「毎週月曜日は元気がない」→ パターンが見える
└─ 自己理解

レベル 3: インサイト生成
「仕事が多い週は感情が不安定」→ 因果を発見
└─ 行動変容の契機

レベル 4: 社会的共感
「世界中で雨の日は悲しみが増える」→ 共通体験の発見
└─ 人類的な相互理解

レベル 5: 実存的意味付け
「データで『私』が見える」→ 自己存在の確認
└─ 精神的成長
```

#### 可視化の4つの次元

```
1. 時間的可視化
   過去 ← → 現在 → 未来
   パターン発見   予測の試み

2. 空間的可視化
   地球 上の感情の分布
   「私は一人ではない」という実感

3. 比較的可視化
   自分の感情 vs. グローバルパターン
   個人 vs. 普遍

4. 深度的可視化
   表面的感情 → 深い感情
   「実は...」の発見
```

### 19.2 グローバル共感の実現

#### 共感のメカニズム

```
従来のメディア：
「どこかの国で雨が降っている」
└─ 抽象的、他人事

EmoWeather：
「この瞬間、同じ地域にいる人は
 同じような気分を感じているかもしれない」
└─ 具体的、自分事
```

#### 共感を生む UI 設計

```jsx
// グローバルなリアルタイム感情マップ

const GlobalEmotionalMap = () => {
  return (
    <WorldMap>
      {/* 
       * リアルタイムで世界中のチェックインが可視化される
       * ユーザーが「記録した感情」が地球に落ちるアニメーション
       * 他者のデータポイントがマップに点灯する
       * 
       * 効果：
       * - 「自分は一人じゃない」実感
       * - 「この感情は普遍的」という安心感
       * - 「他者とつながっている」感覚
       */}
      {emotionData.map(emotion => (
        <EmotionDot
          key={emotion.id}
          emotion={emotion}
          pulsing  // グロー脈動
          onClick={() => showUserInsight(emotion)}
        />
      ))}

      {/* ヒートマップ */}
      <HeatmapLayer emotion="happy" intensity={0.7} />
      <HeatmapLayer emotion="sad" intensity={0.4} />
    </WorldMap>
  )
}
```

### 19.3 データを「人間的」にする方法

#### 感情化（Emotionalize）

```
冷たいデータ  → 人間的な表現
────────────────────────────

「Count: 42」 → 「あなたは42回、幸福を感じました」
「Avg: 7.3」 → 「あなたの平均的な幸福度は少し高めです」
「Trend: +5% → 「最近、あなたはより幸福になってきています」
```

#### ストーリーの形成

```javascript
// データから物語を生成

const GenerateEmotionalNarrative = (userData) => {
  const narrative = []

  // 1. 主人公の設定
  narrative.push(`あなたの30日間の感情ジャーニー`)

  // 2. 起（Introduction）
  narrative.push(`
    この1ヶ月、あなたは${userData.totalCheckins}回、
    気持ちを記録しました。
  `)

  // 3. 承（Development）
  narrative.push(`
    ${userData.dominantEmotion}が${userData.percentage}%を占めており、
    あなたの基調感情は${userData.baseline}です。
  `)

  // 4. 転（Turning point）
  if (userData.emotionalShift) {
    narrative.push(`
      しかし、${userData.shiftDate}を境に、
      あなたの感情は変わりました。
    `)
  }

  // 5. 結（Conclusion）
  narrative.push(`
    これらのデータから、${userData.insight}が見えてきます。
  `)

  return narrative.join('\n')
}
```

### 19.4 ビジュアルストーリーテリング

#### ビジュアル言語の構築

```
要素          意味              UI での表現
────────────────────────────────────────
絵文字    直感的な感情      😊😢😠😌🤩😐
色        感情の種類       黄/青/赤/緑/紫/灰
グロー    重要性・強度      ぼかし効果の強さ
アニメ    時間的変化       落下、脈動、流れ
位置      空間的位置       地球上の座標
サイズ    感情の強度       マーカーの大きさ
```

#### ストーリーアーク の表現

```
ビジュアルナレーション:

時系列グラフ:
 感情度
  100%  ╱╲        ╱╲
   50% ╱  ╲╱╲    ╱  ╲╱
    0%───────────────────→ 時間

「物語」として読める：
- 上昇 = ポジティブなターニングポイント
- 下降 = チャレンジ
- 波動 = 安定性
- 全体的なトレンド = 人生のページング
```

### 19.5 社会的インパクト

#### EmoWeather が実現する社会的価値

```
個人レベル:
✓ 自己認識の向上
✓ メンタルヘルスへの意識化
✓ 感情管理スキルの発展

コミュニティレベル:
✓ 相互理解の促進
✓ 「一人ではない」実感
✓ 共通の人間体験への気づき

社会レベル:
✓ メンタルヘルスの標準化
✓ 感情データの学術的価値
✓ 共感社会への移行

グローバルレベル:
✓ 文化を超えた感情の理解
✓ 人類的な結合の促進
✓ 地球規模の幸福度測定
```

---

## 20. 参考資料・参考書

EmoWeather のデザイン思想は、以下の著作・研究に基づいています。

### 20.1 必読書

#### デザイン哲学

| 著書 | 著者 | 出版年 | 重要度 | 関連セクション |
|------|------|--------|--------|-------------|
| **感情デザイン** | ドナルド・ノーマン | 2004 | ⭐⭐⭐⭐⭐ | 13.1, 15 |
| **誰のためのデザイン？** | ドナルド・ノーマン | 1988 | ⭐⭐⭐⭐⭐ | 12, 16 |
| **インターフェース設計の心理学** | Jef Raskin | 2000 | ⭐⭐⭐⭐⭐ | 12.2, 14 |
| **シンプルの法則** | John Maeda | 2006 | ⭐⭐⭐⭐ | 13.3 |
| **デザインの価値を測る** | Dieter Rams | 2000 | ⭐⭐⭐⭐ | 18.1 |

#### 認知科学・心理学

| 著書 | 著者 | 出版年 | 重要度 | 関連セクション |
|------|------|--------|--------|-------------|
| **心理学的ユーザビリティ** | Susan Weinschenk | 2011 | ⭐⭐⭐⭐⭐ | 11, 17 |
| **習慣の力** | Charles Duhigg | 2012 | ⭐⭐⭐⭐ | 11.5 |
| **トリガーポイント** | B.J. Fogg | 2020 | ⭐⭐⭐⭐ | 11.5, 17.3 |
| **認知心理学の基礎** | 北大路書房 | 2020 | ⭐⭐⭐⭐ | 11 |

#### デザインシステム

| 著書 | 著者 | 出版年 | 重要度 | 関連セクション |
|------|------|--------|--------|-------------|
| **Design Systems** | Alla Kholmatova | 2017 | ⭐⭐⭐⭐ | 8 |
| **Thinking with Type** | Ellen Lupton | 2010 | ⭐⭐⭐ | 3 |
| **Color and Culture** | John Gage | 1993 | ⭐⭐⭐ | 2 |

### 20.2 学術論文・研究

#### 色彩心理学

- "Color Psychology and Emotional Design" - *Computers in Human Behavior*, 2021
- "The Emotional Impact of Color in User Interfaces" - *Journal of UX Research*, 2020

#### OOUI

- "Object-Oriented User Interfaces" - Jef Raskin, 1987
- "Designing for Interaction" - Dan Saffer, 2009

#### 感情設計

- "Affective Computing" - Rosalind Picard, 1997
- "Emotional Design: Why We Love Everyday Things" - Don Norman, 2004

#### アクセシビリティ

- WCAG 2.1 ガイドライン：https://www.w3.org/WAI/WCAG21/quickref/
- Inclusive Components：https://inclusive-components.design/

### 20.3 参考事例（デザイン分析）

#### Instagram

```
学べる点：
✓ ビジュアルストーリーテリング
✓ グローバルなコミュニティ形成
✓ シンプルなUIの中の深い機能
```

#### Spotify

```
学べる点：
✓ データ可視化（Wrapped）
✓ パーソナライゼーション
✓ 感情に基づいたキュレーション
```

#### Headspace

```
学べる点：
✓ メンタルヘルスへの配慮設計
✓ 穏やかなアニメーション
✓ ユーザーの心理状態の段階化
```

#### Figma

```
学べる点：
✓ 複雑さの隠蔽
✓ 直感的なインタラクション
✓ 一貫性のあるデザインシステム
```

### 20.4 オンラインリソース

#### デザイン参考

- **Design Observer**: https://designobserver.com/
- **It's Nice That**: https://www.itsnicethat.com/
- **Dribbble**: https://dribbble.com/

#### アクセシビリティ

- **WebAIM**: https://webaim.org/
- **A11y Project**: https://www.a11yproject.com/
- **Inclusive Components**: https://inclusive-components.design/

#### デザインシステム

- **Material Design**: https://material.io/
- **Ant Design**: https://ant.design/
- **Chakra UI**: https://chakra-ui.com/

#### アニメーション

- **Framer Motion Docs**: https://www.framer.com/motion/
- **Animista**: https://animista.net/
- **Easing Functions**: https://easings.net/

### 20.5 継続学習の推奨

#### 月刊購読推奨

- **UXMatters**: https://www.uxmatters.com/
- **A List Apart**: https://alistapart.com/
- **Designer Hangout**: https://www.designerhangout.co/

#### ポッドキャスト

- **Design Observer**: Weekly design discussion
- **99% Invisible**: Deep dives into design and culture
- **UI Breakfast**: Daily UX tips

---

## 更新履歴

| 日付 | バージョン | 変更内容 |
|------|-----------|--------|
| 2024-02-02 | v1.0 | 初版作成 |
| 2024-02-02 | v2.0 | 設計マニフェスト第II部を追加：心理学的基礎、OOUI、デザイン哲学、ユーザーメンタルモデル、感情エクスペリエンス設計、倫理設計、脳科学的原則、美的アプローチ、根本設計思想、参考資料 |

---

## 貢献ガイドライン

スタイルガイド・設計マニフェストの改善提案がある場合：

1. [GitHub Issues](https://github.com/coiai.inc/EmoWeather) で提案を作成
2. デザイン理念との整合性を確認
3. プルリクエストを送信
4. レビューが完了後、マージ

---

**EmoWeather Style Guide & Design Manifesto** © 2024 coiai.inc. All rights reserved.

This document represents the philosophical and practical foundation of EmoWeather's design. It is a living document, continuously evolving as we learn more about human emotion, design, and technology.
