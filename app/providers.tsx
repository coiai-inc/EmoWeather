'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme'

/**
 * Application Providers
 * Material UI ThemeProvider と CssBaseline を統合
 * Tailwind CSS との共存を確保
 */

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline により Material Design ベースのスタイルをリセット */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
