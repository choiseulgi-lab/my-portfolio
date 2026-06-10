import { useState, useEffect } from 'react'
import {
  Box, Typography, Button, Container,
  Card, CardContent, Grid, LinearProgress,
  TextField, Stack, Divider, Snackbar, Alert,
  IconButton, Tooltip, Checkbox, FormControlLabel,
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
    fontSize: '0.875rem',
    '&:before': { borderBottomColor: 'rgba(224,224,224,0.18)' },
    '&:hover:not(.Mui-disabled):before': { borderBottomColor: 'rgba(224,224,224,0.45)' },
    '&:after': { borderBottomColor: '#C4E038' },
  },
  '& .MuiInputLabel-root': { color: 'rgba(224,224,224,0.3)', fontSize: '0.875rem', letterSpacing: 1 },
  '& .MuiInputLabel-root.Mui-focused': { color: '#C4E038' },
}

const EMOJIS = ['😊', '🔥', '✨', '👍', '💡']

const INFO_ROWS = [
  {
    label: 'EMAIL',
    renderValue: (copied, onCopy) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          component="a"
          href="mailto:choiseulgi91@naver.com"
          className="info-value"
          sx={{ color: '#E0E0E0', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', '&:hover': { color: '#C4E038' } }}
        >
          choiseulgi91@naver.com
        </Typography>
        <Tooltip title={copied ? '복사됨!' : 'Copy'} placement="top">
          <IconButton
            size="small"
            onClick={onCopy}
            sx={{ color: copied ? '#C4E038' : 'rgba(224,224,224,0.22)', p: 0.5, transition: 'color 0.2s', '&:hover': { color: '#C4E038', backgroundColor: 'transparent' } }}
          >
            <ContentCopyIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  },
  {
    label: 'LOCATION',
    renderValue: () => (
      <Typography className="info-value" sx={{ color: '#E0E0E0', fontSize: '0.875rem', transition: 'color 0.2s' }}>
        Ulsan, South Korea
      </Typography>
    ),
  },
  {
    label: 'RESUME',
    renderValue: () => (
      <Typography
        component="a"
        href="#"
        className="info-value"
        sx={{ color: '#E0E0E0', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', '&:hover': { color: '#C4E038' } }}
      >
        Download PDF
      </Typography>
    ),
  },
]

function GuestbookForm({ onSubmitSuccess }) {
  const [form, setForm] = useState({
    writer_name: '',
    email: '',
    is_email_public: false,
    company_or_job: '',
    keyword: '',
    emoji: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.emoji) {
      setSnackbar({ open: true, message: '이모지를 선택해주세요.', severity: 'warning' })
      return
    }
    setSubmitting(true)
    const { error } = await supabase.from('guestbook').insert([{
      writer_name: form.writer_name,
      email: form.email,
      is_email_public: form.is_email_public,
      company_or_job: form.company_or_job || null,
      keyword: form.keyword || null,
      emoji: form.emoji,
      message: form.message,
    }])
    setSubmitting(false)
    if (error) {
      setSnackbar({ open: true, message: '등록에 실패했습니다. 다시 시도해주세요.', severity: 'error' })
    } else {
      setSnackbar({ open: true, message: '방명록이 등록되었습니다!', severity: 'success' })
      setForm({ writer_name: '', email: '', is_email_public: false, company_or_job: '', keyword: '', emoji: '', message: '' })
      onSubmitSuccess?.()
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        name="writer_name"
        label="NAME *"
        value={form.writer_name}
        onChange={handleChange}
        required
        fullWidth
        variant="standard"
        sx={{ ...inputSx, mb: 4 }}
      />

      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2, mb: 4 }}>
        <TextField
          name="email"
          label="EMAIL *"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          fullWidth
          variant="standard"
          sx={inputSx}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="is_email_public"
              checked={form.is_email_public}
              onChange={handleChange}
              size="small"
              sx={{ color: 'rgba(224,224,224,0.25)', '&.Mui-checked': { color: '#C4E038' }, p: 0.5 }}
            />
          }
          label={
            <Typography sx={{ fontSize: '0.875rem', color: 'rgba(224,224,224,0.4)', whiteSpace: 'nowrap' }}>
              이메일 공개
            </Typography>
          }
          sx={{ mb: 0.3, flexShrink: 0 }}
        />
      </Box>

      <TextField
        name="company_or_job"
        label="COMPANY / JOB (선택)"
        value={form.company_or_job}
        onChange={handleChange}
        fullWidth
        variant="standard"
        sx={{ ...inputSx, mb: 4 }}
      />

      <TextField
        name="keyword"
        label="TODAY'S KEYWORD (선택)"
        value={form.keyword}
        onChange={handleChange}
        fullWidth
        variant="standard"
        sx={{ ...inputSx, mb: 4 }}
      />

      <Box sx={{ mb: 4 }}>
        <Typography sx={{ fontSize: '0.875rem', letterSpacing: 1, color: 'rgba(224,224,224,0.3)', mb: 1.5 }}>
          EMOJI *
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          {EMOJIS.map(e => (
            <Box
              key={e}
              onClick={() => setForm(prev => ({ ...prev, emoji: e }))}
              sx={{
                width: 42, height: 42,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
                cursor: 'pointer',
                border: form.emoji === e
                  ? '1.5px solid #C4E038'
                  : '1px solid rgba(224,224,224,0.12)',
                transition: 'border-color 0.2s, background-color 0.2s',
                backgroundColor: form.emoji === e ? 'rgba(196,224,56,0.06)' : 'transparent',
                '&:hover': { borderColor: 'rgba(196,224,56,0.45)' },
              }}
            >
              {e}
            </Box>
          ))}
        </Box>
      </Box>

      <TextField
        name="message"
        label="MESSAGE *"
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
          backgroundColor: 'rgba(28,28,28,0.9)',
          border: '1px solid rgba(224,224,224,0.18)',
          borderRadius: 0,
          px: 4, py: 1.5,
          fontSize: '0.875rem',
          letterSpacing: 2,
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#C4E038',
            color: '#C4E038',
          },
          '&.Mui-disabled': {
            color: 'rgba(224,224,224,0.18)',
            borderColor: 'rgba(224,224,224,0.08)',
            backgroundColor: 'transparent',
          },
        }}
      >
        {submitting ? '등록 중...' : '등록하기'}
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar(p => ({ ...p, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} variant="filled" onClose={() => setSnackbar(p => ({ ...p, open: false }))}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

function GuestbookFeed({ refreshTrigger }) {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const fetchEntries = async () => {
      const { data } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20)
      if (data) setEntries(data)
    }
    fetchEntries()
  }, [refreshTrigger])

  if (entries.length === 0) {
    return (
      <Typography sx={{ color: 'rgba(224,224,224,0.18)', fontSize: '0.875rem', mt: 2, py: 4, textAlign: 'center' }}>
        아직 작성된 방명록이 없어요. 첫 번째 방명록을 남겨주세요!
      </Typography>
    )
  }

  return (
    <Box>
      <Divider sx={{ borderColor: 'rgba(224,224,224,0.08)' }} />
      {entries.map(entry => (
        <Box key={entry.id}>
          <Box sx={{ py: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 1, mb: 1, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, flexWrap: 'wrap' }}>
                <Typography component="span" sx={{ fontSize: '1rem', lineHeight: 1 }}>{entry.emoji}</Typography>
                <Typography sx={{ color: '#E0E0E0', fontSize: '0.875rem', fontWeight: 600 }}>
                  {entry.writer_name}
                </Typography>
                {entry.company_or_job && (
                  <Typography sx={{ color: 'rgba(224,224,224,0.35)', fontSize: '0.875rem' }}>
                    · {entry.company_or_job}
                  </Typography>
                )}
                {entry.is_email_public && (
                  <Typography
                    component="a"
                    href={`mailto:${entry.email}`}
                    sx={{ color: 'rgba(196,224,56,0.5)', fontSize: '0.875rem', textDecoration: 'none', '&:hover': { color: '#C4E038' }, transition: 'color 0.2s' }}
                  >
                    {entry.email}
                  </Typography>
                )}
              </Box>
              <Typography sx={{ color: 'rgba(224,224,224,0.2)', fontSize: '0.875rem', flexShrink: 0 }}>
                {new Date(entry.created_at).toLocaleDateString('ko-KR')}
              </Typography>
            </Box>

            {entry.keyword && (
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 1, py: 0.25,
                  border: '1px solid rgba(196,224,56,0.25)',
                  color: 'rgba(196,224,56,0.6)',
                  fontSize: '0.875rem',
                  letterSpacing: 0.5,
                  mb: 1.2,
                }}
              >
                # {entry.keyword}
              </Box>
            )}

            <Typography sx={{ color: 'rgba(224,224,224,0.6)', fontSize: '0.875rem', lineHeight: 1.8, wordBreak: 'keep-all' }}>
              {entry.message}
            </Typography>
          </Box>
          <Divider sx={{ borderColor: 'rgba(224,224,224,0.08)' }} />
        </Box>
      ))}
    </Box>
  )
}

function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('choiseulgi91@naver.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: '#121212',
        py: { xs: 10, md: 14 },
        borderTop: '1px solid rgba(224,224,224,0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="flex-start">

          {/* ── 좌측: CONTACT 타이틀 + 정보 리스트 + SNS */}
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5.5rem' },
                fontWeight: 700,
                color: '#E0E0E0',
                letterSpacing: '-0.02em',
                lineHeight: 0.9,
                mb: 6,
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              CONTACT
            </Typography>

            <Box>
              <Divider sx={{ borderColor: 'rgba(224,224,224,0.1)' }} />
              {INFO_ROWS.map(({ label, renderValue }) => (
                <Box key={label}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      py: 2.5,
                      px: 0.5,
                      cursor: 'default',
                      '&:hover .info-label': { color: '#C4E038' },
                      '&:hover .info-value': { color: '#C4E038' },
                    }}
                  >
                    <Typography
                      className="info-label"
                      sx={{
                        color: 'rgba(224,224,224,0.28)',
                        fontSize: '0.875rem',
                        letterSpacing: 1.5,
                        fontWeight: 600,
                        transition: 'color 0.2s',
                        minWidth: 90,
                        flexShrink: 0,
                      }}
                    >
                      {label}
                    </Typography>
                    {renderValue(copied, handleCopyEmail)}
                  </Box>
                  <Divider sx={{ borderColor: 'rgba(224,224,224,0.1)' }} />
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 4, mt: 5, flexWrap: 'wrap' }}>
              {[
                { label: '/GITHUB', href: 'https://github.com/choiseulgi' },
                { label: '/INSTAGRAM', href: '#' },
              ].map(({ label, href }) => (
                <Typography
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'rgba(224,224,224,0.3)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    letterSpacing: 2,
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
              sx={{ color: 'rgba(224,224,224,0.2)', display: 'block', mt: 6, fontSize: '0.875rem' }}
            >
              © 2026 Choi Seulgi. All rights reserved.
            </Typography>
          </Grid>

          {/* ── 우측: 방명록 폼 + 피드 */}
          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                color: 'rgba(224,224,224,0.35)',
                fontSize: '0.875rem',
                letterSpacing: 2,
                fontWeight: 600,
                mb: 5,
              }}
            >
              GUESTBOOK
            </Typography>

            <GuestbookForm onSubmitSuccess={() => setRefreshTrigger(p => p + 1)} />

            <Box sx={{ mt: 8 }}>
              <Typography
                sx={{
                  color: 'rgba(224,224,224,0.25)',
                  fontSize: '0.58rem',
                  letterSpacing: 4,
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                FEED
              </Typography>
              <GuestbookFeed refreshTrigger={refreshTrigger} />
            </Box>
          </Grid>

        </Grid>
      </Container>
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
