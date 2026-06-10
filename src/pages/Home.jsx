import { useState } from 'react'
import {
  Box, Typography, Button, Container,
  Card, CardContent, Grid, LinearProgress,
  TextField, Stack, Divider, Snackbar, Alert,
  IconButton, Tooltip,
} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

/* ── 1. Hero 섹션 ─────────────────────────────────────────── */
function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-dark)',
        pt: 8,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography
          variant="overline"
          sx={{ color: 'var(--color-primary)', letterSpacing: 0, mb: 2, display: 'block' }}
        >
          Welcome
        </Typography>
        <Typography variant="h2" sx={{ color: 'var(--color-text-primary)', fontWeight: 700, mb: 3 }}>
          여기는 Hero 섹션입니다.
        </Typography>
        <Typography variant="h6" sx={{ color: 'var(--color-text-muted)', mb: 5, lineHeight: 1.8 }}>
          메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/projects"
            sx={{
              backgroundColor: 'var(--color-button-primary)',
              color: 'var(--color-text-inverse)',
              fontWeight: 700,
              px: 4,
              '&:hover': { backgroundColor: 'var(--color-button-hover)' },
            }}
          >
            Projects 보기
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/about"
            sx={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)',
              px: 4,
              '&:hover': {
                borderColor: 'var(--color-primary-light)',
                color: 'var(--color-primary-light)',
                backgroundColor: 'rgba(196,224,56,0.08)',
              },
            }}
          >
            About Me
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

/* ── 2. About Me 섹션 ─────────────────────────────────────── */
function AboutSection() {
  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: 'var(--color-bg-secondary)',
        borderBottom: '1px solid var(--color-border-light)',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography
          variant="overline"
          sx={{ color: 'var(--color-primary-dark)', letterSpacing: 0, mb: 2, display: 'block' }}
        >
          About Me
        </Typography>
        <Typography variant="h3" sx={{ color: 'var(--color-text-secondary)', fontWeight: 700, mb: 4 }}>
          여기는 About Me 섹션입니다.
        </Typography>
        <Typography variant="body1" sx={{ color: '#555555', lineHeight: 2, mb: 5 }}>
          간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/about"
          sx={{
            backgroundColor: 'var(--color-button-primary)',
            color: 'var(--color-text-inverse)',
            fontWeight: 700,
            px: 4,
            '&:hover': { backgroundColor: 'var(--color-button-hover)' },
          }}
        >
          더 알아보기
        </Button>
      </Container>
    </Box>
  )
}

/* ── 3. Skill Tree 섹션 ───────────────────────────────────── */
const skills = [
  { name: 'React', value: 80 },
  { name: 'JavaScript', value: 75 },
  { name: 'TypeScript', value: 60 },
  { name: 'CSS / MUI', value: 70 },
  { name: 'Node.js', value: 55 },
]

function SkillSection() {
  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-dark)',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'var(--color-primary)', letterSpacing: 0, mb: 2, display: 'block' }}
          >
            Skills
          </Typography>
          <Typography variant="h3" sx={{ color: 'var(--color-text-primary)', fontWeight: 700, mb: 2 }}>
            여기는 Skill Tree 섹션입니다.
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--color-text-muted)' }}>
            기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
          </Typography>
        </Box>
        <Stack spacing={3}>
          {skills.map(({ name, value }) => (
            <Box key={name}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>
                  {name}
                </Typography>
                <Typography sx={{ color: 'var(--color-primary)' }}>{value}%</Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={value}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'var(--color-secondary-light)',
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, var(--color-accent), var(--color-primary-light))',
                    borderRadius: 4,
                  },
                }}
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

/* ── 4. Projects 섹션 ─────────────────────────────────────── */
const projectCards = [
  { title: 'Project 01', desc: '프로젝트 설명이 들어갈 예정입니다.' },
  { title: 'Project 02', desc: '프로젝트 설명이 들어갈 예정입니다.' },
  { title: 'Project 03', desc: '프로젝트 설명이 들어갈 예정입니다.' },
]

function ProjectsSection() {
  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: 'var(--color-secondary-light)',
        borderBottom: '1px solid var(--color-border-dark)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'var(--color-primary)', letterSpacing: 0, mb: 2, display: 'block' }}
          >
            Projects
          </Typography>
          <Typography variant="h3" sx={{ color: 'var(--color-text-primary)', fontWeight: 700, mb: 2 }}>
            여기는 Projects 섹션입니다.
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--color-text-muted)' }}>
            대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {projectCards.map(({ title, desc }) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <Card
                sx={{
                  height: 220,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)',
                    opacity: 0.15,
                  }}
                />
                <CardContent sx={{ position: 'relative' }}>
                  <Typography
                    variant="overline"
                    sx={{ color: 'var(--color-primary)', letterSpacing: 0 }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--color-text-muted)', mt: 0.5 }}>
                    {desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/projects"
            sx={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)',
              px: 5,
              '&:hover': {
                borderColor: 'var(--color-primary-light)',
                color: 'var(--color-primary-light)',
                backgroundColor: 'rgba(196,224,56,0.08)',
              },
            }}
          >
            더 보기
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

/* ── 5. Contact 섹션 ──────────────────────────────────────── */
const inputSx = {
  '& .MuiInput-root': {
    color: '#E0E0E0',
    '&:before': { borderBottomColor: 'rgba(224,224,224,0.25)' },
    '&:hover:not(.Mui-disabled):before': { borderBottomColor: 'rgba(224,224,224,0.6)' },
    '&:after': { borderBottomColor: '#C4E038' },
  },
  '& .MuiInputLabel-root': { color: 'rgba(224,224,224,0.4)', fontSize: '0.85rem' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#C4E038' },
}

const infoItems = [
  {
    label: 'EMAIL',
    render: (copied, onCopy) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          component="a"
          href="mailto:choiseulgi91@naver.com"
          sx={{
            color: '#E0E0E0',
            textDecoration: 'none',
            fontSize: { xs: '0.78rem', md: '0.875rem' },
            wordBreak: 'keep-all',
            transition: 'color 0.2s',
            '&:hover': { color: '#C4E038' },
          }}
        >
          choiseulgi91@naver.com
        </Typography>
        <Tooltip title={copied ? '복사됨!' : 'Copy'} placement="top">
          <IconButton
            size="small"
            onClick={onCopy}
            sx={{
              color: copied ? '#C4E038' : 'rgba(224,224,224,0.3)',
              p: 0.5,
              transition: 'color 0.2s',
              '&:hover': { color: '#C4E038', backgroundColor: 'transparent' },
            }}
          >
            <ContentCopyIcon sx={{ fontSize: 13 }} />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  },
  {
    label: 'LOCATION',
    render: () => (
      <Typography sx={{ color: '#E0E0E0', fontSize: { xs: '0.78rem', md: '0.875rem' }, wordBreak: 'keep-all' }}>
        Ulsan, South Korea
      </Typography>
    ),
  },
  {
    label: 'RESUME',
    render: () => (
      <Typography
        component="a"
        href="#"
        sx={{
          color: '#E0E0E0',
          textDecoration: 'none',
          fontSize: { xs: '0.78rem', md: '0.875rem' },
          transition: 'color 0.2s',
          '&:hover': { color: '#C4E038' },
        }}
      >
        Download PDF
      </Typography>
    ),
  },
]

const snsLinks = [
  { label: '/GITHUB', href: 'https://github.com/choiseulgi' },
  { label: '/INSTAGRAM', href: '#' },
]

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('choiseulgi91@naver.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const { error } = await supabase.from('guestbook').insert([form])
    setSubmitting(false)
    if (error) {
      setSnackbar({ open: true, message: '전송에 실패했습니다. 다시 시도해주세요.', severity: 'error' })
    } else {
      setSnackbar({ open: true, message: '메시지가 전송되었습니다!', severity: 'success' })
      setForm({ name: '', email: '', message: '' })
    }
  }

  const handleCloseSnackbar = () => setSnackbar(prev => ({ ...prev, open: false }))

  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        py: { xs: 10, md: 14 },
        borderTop: '1px solid rgba(224,224,224,0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 8, md: 6 }} alignItems="flex-start">

          {/* ── 좌측: 타이틀 + 폼 */}
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontSize: { xs: '4.5rem', sm: '6rem', md: '7.5rem' },
                fontWeight: 700,
                color: '#E0E0E0',
                letterSpacing: '-0.03em',
                lineHeight: 0.88,
                mb: 5,
                wordBreak: 'keep-all',
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              CONTACT
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: 'rgba(224,224,224,0.7)', mb: 0.5, fontWeight: 500, wordBreak: 'keep-all' }}
            >
              Let's work together!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(224,224,224,0.4)',
                mb: 5,
                lineHeight: 1.9,
                wordBreak: 'keep-all',
              }}
            >
              새로운 기회를 찾고 있습니다.<br />
              언제든 편하게 연락 주세요.
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="이름"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
                variant="standard"
                sx={{ ...inputSx, mb: 4 }}
              />
              <TextField
                name="email"
                label="이메일"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
                variant="standard"
                sx={{ ...inputSx, mb: 4 }}
              />
              <TextField
                name="message"
                label="메시지"
                value={form.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={3}
                variant="standard"
                sx={{ ...inputSx, mb: 5 }}
              />
              <Button
                type="submit"
                disabled={submitting}
                sx={{
                  color: '#E0E0E0',
                  border: '1px solid rgba(224,224,224,0.25)',
                  borderRadius: 0,
                  px: 4,
                  py: 1.5,
                  fontSize: '0.75rem',
                  letterSpacing: 2.5,
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#C4E038',
                    color: '#0E0E0E',
                    borderColor: '#C4E038',
                  },
                  '&.Mui-disabled': {
                    color: 'rgba(224,224,224,0.2)',
                    borderColor: 'rgba(224,224,224,0.1)',
                  },
                }}
              >
                {submitting ? '전송 중...' : '전송하기'}
              </Button>
            </Box>
          </Grid>

          {/* ── 우측: 정보 리스트 + SNS */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', pt: { md: '7rem !important' } }}
          >
            <Box>
              <Divider sx={{ borderColor: 'rgba(224,224,224,0.12)' }} />
              {infoItems.map(({ label, render }) => (
                <Box key={label}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      py: 3,
                      px: 0.5,
                      cursor: 'default',
                      '&:hover .info-label': { color: '#C4E038' },
                    }}
                  >
                    <Typography
                      className="info-label"
                      sx={{
                        color: 'rgba(224,224,224,0.35)',
                        fontSize: '0.6rem',
                        letterSpacing: 3.5,
                        fontWeight: 600,
                        transition: 'color 0.2s',
                        minWidth: 80,
                        flexShrink: 0,
                      }}
                    >
                      {label}
                    </Typography>
                    {render(copied, handleCopyEmail)}
                  </Box>
                  <Divider sx={{ borderColor: 'rgba(224,224,224,0.12)' }} />
                </Box>
              ))}

              {/* SNS 링크 */}
              <Box sx={{ display: 'flex', gap: 4, mt: 5, flexWrap: 'wrap' }}>
                {snsLinks.map(({ label, href }) => (
                  <Typography
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgba(224,224,224,0.2)',
                      textDecoration: 'none',
                      fontSize: '0.72rem',
                      letterSpacing: 2.5,
                      fontWeight: 500,
                      transition: 'color 0.35s ease',
                      '&:hover': { color: '#E0E0E0' },
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Box>

              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(224,224,224,0.15)',
                  display: 'block',
                  mt: 4,
                  letterSpacing: 1,
                  fontSize: '0.65rem',
                }}
              >
                © 2026 Choi Seulgi. All rights reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} variant="filled" onClose={handleCloseSnackbar}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

/* ── Home 페이지 조합 ─────────────────────────────────────── */
export default function Home() {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </Box>
  )
}
