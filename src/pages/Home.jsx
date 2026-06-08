import {
  Box, Typography, Button, Container,
  Card, CardContent, Grid, LinearProgress,
  TextField, Stack,
} from '@mui/material'
import { Link } from 'react-router-dom'

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
          sx={{ color: 'var(--color-primary)', letterSpacing: 4, mb: 2, display: 'block' }}
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
          sx={{ color: 'var(--color-primary-dark)', letterSpacing: 4, mb: 2, display: 'block' }}
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
            sx={{ color: 'var(--color-primary)', letterSpacing: 4, mb: 2, display: 'block' }}
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
            sx={{ color: 'var(--color-primary)', letterSpacing: 4, mb: 2, display: 'block' }}
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
                    sx={{ color: 'var(--color-primary)', letterSpacing: 2 }}
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
function ContactSection() {
  return (
    <Box sx={{ py: 12, backgroundColor: 'var(--color-bg-primary)' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          variant="overline"
          sx={{ color: 'var(--color-primary)', letterSpacing: 4, mb: 2, display: 'block' }}
        >
          Contact
        </Typography>
        <Typography variant="h3" sx={{ color: 'var(--color-text-primary)', fontWeight: 700, mb: 2 }}>
          여기는 Contact 섹션입니다.
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--color-text-muted)', mb: 6 }}>
          연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
        </Typography>
        <Stack spacing={2}>
          <TextField
            disabled
            placeholder="이름"
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'var(--color-text-muted)',
                '& fieldset': { borderColor: 'var(--color-border-dark)' },
              },
            }}
          />
          <TextField
            disabled
            placeholder="이메일"
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'var(--color-text-muted)',
                '& fieldset': { borderColor: 'var(--color-border-dark)' },
              },
            }}
          />
          <TextField
            disabled
            placeholder="메시지를 입력하세요"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'var(--color-text-muted)',
                '& fieldset': { borderColor: 'var(--color-border-dark)' },
              },
            }}
          />
          <Button
            disabled
            variant="contained"
            size="large"
            fullWidth
            sx={{
              backgroundColor: 'var(--color-button-primary)',
              color: 'var(--color-text-inverse)',
              fontWeight: 700,
              '&:hover': { backgroundColor: 'var(--color-button-hover)' },
            }}
          >
            전송하기 (개발 예정)
          </Button>
        </Stack>
        <Typography variant="caption" sx={{ color: 'var(--color-text-disabled)', mt: 4, display: 'block' }}>
          © 2026 My Portfolio. All rights reserved.
        </Typography>
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
