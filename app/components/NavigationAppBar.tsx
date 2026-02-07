'use client'

import { useState } from 'react'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Menu as MenuIcon, X as CloseIcon, Heart } from 'lucide-react'

interface NavigationAppBarProps {
  onCheckInClick?: () => void
}

/**
 * NavigationAppBar コンポーネント
 * Material UI AppBar を使用した改善されたナビゲーション
 * レスポンシブデザイン対応
 */
export function NavigationAppBar({ onCheckInClick }: NavigationAppBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Map', href: '#map' },
    { label: 'Statistics', href: '#stats' },
    { label: 'About', href: '#about' },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon size={20} />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              onCheckInClick?.()
              setMobileOpen(false)
            }}
            sx={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
            }}
          >
            <ListItemText
              primary="🎭 Check In"
              sx={{ color: 'white', fontWeight: 600 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.98) 0%, rgba(26, 31, 58, 0.90) 100%)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
          zIndex: 100,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: { xs: 1, sm: 2 },
              px: { xs: 1, sm: 3 },
            }}
          >
            {/* ロゴ / ブランド */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
              <Heart
                size={28}
                color="#EC4899"
                fill="#EC4899"
                style={{ animation: 'pulse 2s ease-in-out infinite' }}
              />
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                  }}
                >
                  EmoWeather
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.65rem',
                    letterSpacing: '0.5px',
                  }}
                >
                  Global emotion mapping
                </Typography>
              </Box>
            </Box>

            {/* デスクトップナビゲーション */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    component="a"
                    href={item.href}
                    sx={{
                      color: 'text.primary',
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      position: 'relative',

                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        width: 0,
                        height: 2,
                        background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                        transition: 'width 0.3s ease',
                      },

                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}

                <Box sx={{ ml: 2, borderLeft: '1px solid rgba(139, 92, 246, 0.2)', pl: 2 }}>
                  <Button
                    onClick={onCheckInClick}
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      borderRadius: 1.5,
                      px: 2.5,
                      py: 1,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)',
                      },
                    }}
                  >
                    🎭 Check In
                  </Button>
                </Box>
              </Box>
            )}

            {/* モバイルメニューボタン */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon size={24} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* モバイルドロワー */}
      {isMobile && (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: {
              background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.95) 0%, rgba(30, 27, 70, 0.8) 100%)',
              backdropFilter: 'blur(10px)',
              borderLeft: '1px solid rgba(139, 92, 246, 0.2)',
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  )
}
