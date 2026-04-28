interface Props {
  value: number
  max: number
  color: string
  backgroundColor?: string
}

const r = 25
const cx = 60
const cy = 58
const circumference = 2 * Math.PI * r
const arcLength = (192 / 288) * circumference
const gapLength = circumference - arcLength

export function ArcGauge({ value, max, color, backgroundColor }: Props) {
  const progress = Math.min(value / max, 1)
  const filledLength = progress * arcLength

  return (
    <svg
      viewBox="0 0 120 80"
      className="-mt-1 mb-8 w-full"
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={backgroundColor || '#F1F5F9'}
        strokeWidth={8}
        strokeDasharray={`${arcLength} ${gapLength}`}
        strokeLinecap="round"
        transform={`rotate(150, ${cx}, ${cy})`}
      />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={8}
        strokeDasharray={`${filledLength} ${circumference - filledLength}`}
        strokeLinecap="round"
        transform={`rotate(150, ${cx}, ${cy})`}
      />
    </svg>
  )
}
