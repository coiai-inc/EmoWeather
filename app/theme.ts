import { createTheme, ThemeOptions } from '@mui/material/styles'

/**
 * EmoWeather Material UI Theme
 * 心理学的色彩設計に基づいた感情カラーパレット
 * Dieter Rams "Good Design 10 Principles" に準拠
 */

// EmoWeather 感情カラーパレット
// 色彩心理学に基づく感情→色のマッピング
export const EMOTION_COLORS = {
  happy: '#FFD700',    // 黄：喜び、希望
  sad: '#6495ED',      // 青：悲しみ、静寂
  angry: '#FF6B6B',    // 赤：怒り、激情
  calm: '#4ECDC4',     // 青緑：平穏、落ち着き
  excited: '#FF1493',  // 濃いピンク：興奮
  neutral: '#A0AEC0',  // グレー：中立
} as const

// Material Design 3 カラーシステム
const themeConfig: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: '#0A0E27',      // 深い紫黒
      paper: '#1A1F3A',        // ベースペーパー
    },
    primary: {
      main: '#8B5CF6',         // 紫メイン
      light: '#A78BFA',
      dark: '#6D28D9',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#EC4899',         // ピンク
      light: '#F472B6',
      dark: '#DB2777',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF6B6B',         // 赤
      light: '#FF8787',
      dark: '#E63946',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFD700',         // 黄
      light: '#FFE66D',
      dark: '#FFC107',
      contrastText: '#1A1F3A',
    },
    success: {
      main: '#4ECDC4',         // 青緑
      light: '#6EE7DE',
      dark: '#06B6D4',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#6495ED',         // コーンフラワーブルー
      light: '#93C5FD',
      dark: '#3B82F6',
      contrastText: '#FFFFFF',
    },
    divider: 'rgba(139, 92, 246, 0.12)',
    text: {
      primary: '#F3F4F6',      // ライトグレー
      secondary: '#D1D5DB',    // ダークグレー
      disabled: 'rgba(243, 244, 246, 0.38)',
    },
  },

  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
    
    // マジカルナンバーを意識したタイポグラフィスケール
    h1: {
      fontSize: '2.488rem',     // 40px
      fontWeight: 900,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '1.953rem',     // 31px
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.563rem',     // 25px
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.25rem',      // 20px
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1rem',         // 16px
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '0.875rem',     // 14px
      fontWeight: 600,
      lineHeight: 1.57,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.0071em',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.0333em',
    },
  },

  shape: {
    borderRadius: 12,           // グリッドシステム基本値
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.95rem',
          borderRadius: 12,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',

          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            transition: 'left 0.3s ease',
          },

          '&:hover::before': {
            left: '100%',
          },
        },
        contained: {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            boxShadow: '0 12px 32px rgba(139, 92, 246, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.8) 0%, rgba(30, 27, 70, 0.5) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',

          '&:hover': {
            border: '1px solid rgba(139, 92, 246, 0.4)',
            boxShadow: '0 12px 32px rgba(139, 92, 246, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.95) 0%, rgba(26, 31, 58, 0.85) 100%)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',

            '&:hover fieldset': {
              borderColor: 'rgba(139, 92, 246, 0.4)',
            },

            '&.Mui-focused': {
              backgroundColor: 'rgba(139, 92, 246, 0.05)',
              '& fieldset': {
                borderColor: '#8B5CF6',
                borderWidth: 2,
              },
            },
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.9) 0%, rgba(30, 27, 70, 0.7) 100%)',
          backdropFilter: 'blur(10px)',
          borderRadius: 12,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 600,
          borderRadius: 8,
          transition: 'all 0.3s ease',
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.95) 0%, rgba(30, 27, 70, 0.8) 100%)',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          border: '1px solid rgba(139, 92, 246, 0.2)',
        },
      },
    },
  },
}

export const theme = createTheme(themeConfig)
