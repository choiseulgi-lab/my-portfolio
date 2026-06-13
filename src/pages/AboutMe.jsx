import { useState } from 'react'
import {
  Box, Container, Typography, Grid,
  Accordion, AccordionSummary, AccordionDetails,
  Chip, Tooltip,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const aboutMeData = {
  basicInfo: {
    name: '최슬기',
    role: 'UI/UX Designer',
    work: [
      '2024. 06 ~ 2025. 12  네오시스템 (기획 및 디자인)',
      '2016. 01 ~ 2021. 10  국립수산과학원 연구원',
    ],
    education: [
      "2026. 07.  SBS아카데미 '웹디자이너 실무자 양성과정' 수료",
      "2023. 12.  그린AI캠퍼스 '디지털 편집디자인 인재 양성과정' 수료",
      '2016. 02.  전남대학교 수산과학과 졸업',
    ],
    certification: [
      '2024. 07  컴퓨터그래픽스운용기능사',
      '2023. 12  GTQ 인디자인 1급',
      '2023. 11  GTQ 포토샵 1급',
      '2023. 11  GTQ 일러스트 1급',
      '2013. 12  사무자동화산업기사',
    ],
  },
  sections: [
    {
      id: 'why-design',
      title: 'Why Design',
      content: '사용자가 정보를 쉽고 편안하게 이해할 수 있는 화면을 만드는 것에 흥미를 느껴 UI/UX 디자인을 시작했습니다. 피그마를 활용해 다양한 서비스를 기획하고 설계하며, 사용자의 관점에서 더 쉽고 직관적인 경험을 만드는 방법을 꾸준히 고민하고 있습니다. 보기 좋은 화면을 넘어 문제를 해결하는 디자인을 만드는 것이 저의 목표입니다.',
    },
    {
      id: 'how-i-design',
      title: 'How I Design',
      content: '저는 모든 디자인에는 명확한 이유가 있어야 한다고 생각합니다. 정보의 우선순위를 분명하게 전달하고, 사용자가 자연스럽게 흐름을 따라갈 수 있도록 설계하는 것을 중요하게 여깁니다. 작은 간격과 정렬, 터치 영역까지도 근거를 가지고 결정하며 일관성 있는 사용자 경험을 만드는 데 집중합니다.',
    },
    {
      id: 'how-i-learn',
      title: 'How I Learn',
      content: '새로운 웹사이트와 앱을 탐색하는 것을 좋아합니다. 좋은 서비스를 발견하면 단순히 사용하는 데 그치지 않고 화면 구성과 사용자 흐름을 살펴보며 설계 의도를 분석합니다. 인상 깊은 디자인은 직접 피그마로 구현해 보며 구조와 원리를 이해하고, 이를 통해 실무 감각과 디자인 역량을 꾸준히 키워가고 있습니다.',
    },
  ],
}

const skills = [
  { name: 'Figma',       tooltip: '' },
  { name: 'Illustrator', tooltip: 'GTQ 일러스트 1급 취득' },
  { name: 'Photoshop',   tooltip: 'GTQ 포토샵 1급 취득' },
  { name: 'Adobe XD',    tooltip: '' },
  { name: 'Indesign',    tooltip: 'GTQ 인디자인 1급 취득' },
]

const cardSx = {
  backgroundColor: '#1A1A1A',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '12px',
  p: { xs: 3, md: 3.5 },
  height: '100%',
  boxSizing: 'border-box',
}

const labelSx = {
  color: 'rgba(196,224,56,0.65)',
  fontSize: '0.68rem',
  letterSpacing: 3,
  fontWeight: 700,
  mb: 2.5,
  display: 'block',
}

const itemSx = {
  color: '#E0E0E0',
  fontSize: '0.875rem',
  lineHeight: 1.9,
  wordBreak: 'keep-all',
}

export default function AboutMe() {
  const [expanded, setExpanded] = useState('why-design')

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#0E0E0E',
        pt: { xs: 12, md: 14 },
        pb: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 5 } }}>

        {/* ── 인트로 문구 ── */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Typography
            sx={{
              fontSize: { xs: '2.2rem', md: '3.75rem' },
              fontWeight: 700,
              color: '#E0E0E0',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            Hello :D
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '2.2rem', md: '3.75rem' },
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            <Box component="span" sx={{ color: '#C4E038' }}>I'm </Box>
            <Box component="span" sx={{ color: '#E0E0E0' }}>Seulgi Choi</Box>
          </Typography>
        </Box>

        {/* ── 2컬럼 레이아웃 ── */}
        <Grid container spacing={2} sx={{ mb: { xs: 6, md: 8 } }} alignItems="stretch">

          {/* 좌측: Profile + Skills (4) */}
          <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>

              {/* Profile */}
              <Box sx={{ ...cardSx, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography component="span" sx={labelSx}>PROFILE</Typography>
                {/* 사진 영역 — 실제 사진으로 교체 시 img 태그로 변경 */}
                <Box
                  sx={{
                    width: '65%',
                    aspectRatio: '3 / 4',
                    mx: 'auto',
                    backgroundColor: '#242424',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px dashed rgba(255,255,255,0.07)',
                    mb: 3,
                  }}
                >
                  <Typography sx={{ color: 'rgba(255,255,255,0.12)', fontSize: '0.75rem', letterSpacing: 3 }}>
                    PHOTO
                  </Typography>
                </Box>
                <Typography
                  sx={{ color: '#E0E0E0', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em', mb: 1 }}
                >
                  {aboutMeData.basicInfo.name}
                </Typography>
                <Chip
                  label={aboutMeData.basicInfo.role}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(196,224,56,0.1)',
                    color: '#C4E038',
                    border: '1px solid rgba(196,224,56,0.3)',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    alignSelf: 'flex-start',
                    mb: 2.5,
                  }}
                />
                <Typography
                  sx={{
                    color: 'rgba(224,224,224,0.5)',
                    fontSize: '0.78rem',
                    letterSpacing: 0.3,
                    mb: 1,
                  }}
                >
                  choiseulgi91@naver.com
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(224,224,224,0.65)',
                    fontSize: '0.85rem',
                    lineHeight: 1.7,
                    wordBreak: 'keep-all',
                  }}
                >
                  보기 좋은 화면을 넘어,<br />사용자의 불편함을 직관적으로 해결하는 디자이너
                </Typography>
              </Box>

              {/* Skills */}
              <Box sx={cardSx}>
                <Typography component="span" sx={labelSx}>SKILLS</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {skills.map(({ name, tooltip }) => (
                    <Tooltip
                      key={name}
                      title={tooltip || ''}
                      placement="top"
                      arrow
                      disableHoverListener={!tooltip}
                      componentsProps={{
                        tooltip: {
                          sx: {
                            backgroundColor: '#2A2A2A',
                            color: '#C4E038',
                            fontSize: '0.75rem',
                            border: '1px solid rgba(196,224,56,0.2)',
                          },
                        },
                        arrow: { sx: { color: '#2A2A2A' } },
                      }}
                    >
                      <Chip
                        label={name}
                        size="medium"
                        sx={{
                          backgroundColor: 'rgba(224,224,224,0.08)',
                          color: '#E0E0E0',
                          border: '1px solid rgba(224,224,224,0.25)',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          cursor: tooltip ? 'help' : 'default',
                          transition: 'all 0.2s',
                          '&:hover': tooltip ? {
                            backgroundColor: 'rgba(196,224,56,0.12)',
                            color: '#C4E038',
                            borderColor: 'rgba(196,224,56,0.5)',
                          } : {
                            backgroundColor: 'rgba(224,224,224,0.14)',
                            borderColor: 'rgba(224,224,224,0.4)',
                          },
                        }}
                      />
                    </Tooltip>
                  ))}
                </Box>
              </Box>

            </Box>
          </Grid>

          {/* 우측: Education + Work + Certification (6) */}
          <Grid item xs={12} md={7} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>

              {/* Education */}
              <Box sx={cardSx}>
                <Typography component="span" sx={labelSx}>EDUCATION</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {aboutMeData.basicInfo.education.map((item, i) => (
                    <Typography key={i} sx={itemSx}>{item}</Typography>
                  ))}
                </Box>
              </Box>

              {/* Work */}
              <Box sx={cardSx}>
                <Typography component="span" sx={labelSx}>WORK</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {aboutMeData.basicInfo.work.map((item, i) => (
                    <Typography key={i} sx={itemSx}>{item}</Typography>
                  ))}
                </Box>
              </Box>

              {/* Certification */}
              <Box sx={{ ...cardSx, flexGrow: 1 }}>
                <Typography component="span" sx={labelSx}>CERTIFICATION</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
                  {aboutMeData.basicInfo.certification.map((item, i) => (
                    <Typography key={i} sx={itemSx}>{item}</Typography>
                  ))}
                </Box>
              </Box>

            </Box>
          </Grid>

        </Grid>

        {/* ── 아코디언 섹션 ── */}
        <Box>
          {aboutMeData.sections.map((section) => (
            <Accordion
              key={section.id}
              expanded={expanded === section.id}
              onChange={handleChange(section.id)}
              disableGutters
              elevation={0}
              sx={{
                backgroundColor: 'transparent',
                borderTop: '1px solid rgba(224,224,224,0.08)',
                '&:last-of-type': { borderBottom: '1px solid rgba(224,224,224,0.08)' },
                '&::before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: expanded === section.id ? '#C4E038' : 'rgba(224,224,224,0.3)',
                      transition: 'color 0.2s',
                    }}
                  />
                }
                sx={{
                  px: 0,
                  py: 3,
                  minHeight: 'unset',
                  '& .MuiAccordionSummary-content': { my: 0 },
                  '&:hover .section-title': { color: '#C4E038' },
                }}
              >
                <Typography
                  className="section-title"
                  sx={{
                    color: expanded === section.id ? '#C4E038' : '#E0E0E0',
                    fontWeight: 700,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s',
                  }}
                >
                  {section.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pb: 4, pt: 0 }}>
                <Typography
                  sx={{
                    color: 'rgba(224,224,224,0.6)',
                    fontSize: '0.9375rem',
                    lineHeight: 2,
                    wordBreak: 'keep-all',
                  }}
                >
                  {section.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

      </Container>
    </Box>
  )
}
