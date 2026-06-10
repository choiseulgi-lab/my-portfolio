import { Box, Container, Typography } from '@mui/material'

export default function AboutMe() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg-primary)',
        pt: 8,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography
          variant="overline"
          sx={{ color: 'var(--color-primary)', letterSpacing: 0, mb: 2, display: 'block' }}
        >
          About Me
        </Typography>
        <Typography variant="h3" sx={{ color: 'var(--color-text-primary)', fontWeight: 700, mb: 4 }}>
          About Me 페이지가 개발될 공간입니다.
        </Typography>
        <Typography variant="h6" sx={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
          상세한 자기소개가 들어갈 예정입니다.
        </Typography>
        <Box
          sx={{
            mt: 6,
            p: 4,
            border: '1px dashed var(--color-border-dark)',
            borderRadius: 3,
            backgroundColor: 'var(--color-secondary-light)',
          }}
        >
          <Typography sx={{ color: 'var(--color-text-disabled)' }}>
            🚧 개발 예정 공간입니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
