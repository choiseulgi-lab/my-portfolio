import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Portfolio', path: '/' },
  { label: 'About Me', path: '/about' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{
            flexGrow: 1,
            color: 'var(--color-primary)',
            textDecoration: 'none',
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {navLinks.map(({ label, path }) => {
            const active = location.pathname === path
            return (
              <Button
                key={path}
                component={Link}
                to={path}
                sx={{
                  color: active ? 'var(--color-primary)' : 'var(--color-text-primary)',
                  borderBottom: active ? '2px solid var(--color-primary)' : '2px solid transparent',
                  borderRadius: 0,
                  px: 2,
                  transition: 'color 0.2s',
                  '&:hover': { color: 'var(--color-primary)', backgroundColor: 'transparent' },
                }}
              >
                {label}
              </Button>
            )
          })}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
