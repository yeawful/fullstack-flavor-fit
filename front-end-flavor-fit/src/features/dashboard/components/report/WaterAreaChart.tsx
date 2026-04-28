import { ReportCardWrapper } from './ui/ReportCardWrapper'

const h = 165
const w = 200

export function WaterAreaChart({
  currentMl,
  goalMl
}: {
  currentMl: number
  goalMl: number
}) {
  const pct = Math.min(currentMl / goalMl, 1)
  const fillY = h - pct * h * 0.7 // оставляем верхний отступ

  const wavePath = `
    M 0 ${fillY}
    C 40 ${fillY - 8}, 80 ${fillY + 8}, 120 ${fillY - 5}
    C 160 ${fillY - 12}, 180 ${fillY + 6}, ${w} ${fillY}
    L ${w} ${h} L 0 ${h} Z
  `

  return (
    <ReportCardWrapper
      title="Water"
      footerText={[
        `${(currentMl / 1000).toFixed(1)}L`,
        `Goal ${(goalMl / 1000).toFixed(1)}L`
      ]}
      backgroundColor="#f2fafd"
    >
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="waterGrad"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#88caf9"
              stopOpacity="0.7"
            />
            <stop
              offset="100%"
              stopColor="#79c4ff"
              stopOpacity="1"
            />
          </linearGradient>
        </defs>
        <path
          d={wavePath}
          fill="url(#waterGrad)"
        />
      </svg>
    </ReportCardWrapper>
  )
}
