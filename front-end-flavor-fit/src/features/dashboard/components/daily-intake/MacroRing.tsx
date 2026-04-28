import type { LucideIcon } from 'lucide-react'

interface Props {
  value: number
  max: number
  color: string
  label: string
  unit?: string
  Icon: LucideIcon
}

const SIZE = 72
const STROKE = 5

const RING_PATH = `
  M 24 10
  H 48
  Q 62 10 62 24
  V 48
  Q 62 62 48 62
  H 24
  Q 10 62 10 48
  V 24
  Q 10 10 24 10
`

const PATH_LENGTH = 208
const GAP = 35
const TRACK_LENGTH = PATH_LENGTH - GAP

export function MacroRing({ value, max, color, label, Icon }: Props) {
  const progress = Math.min(value / max, 1)
  const filled = TRACK_LENGTH * progress

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative size-18">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="h-full w-full"
        >
          <path
            d={RING_PATH}
            fill="none"
            stroke={`${color}20`}
            strokeWidth={STROKE}
            strokeLinecap="round"
            pathLength={PATH_LENGTH}
            strokeDasharray={`${TRACK_LENGTH} ${GAP}`}
            strokeDashoffset={-31}
          />

          <path
            d={RING_PATH}
            fill="none"
            stroke={color}
            strokeWidth={STROKE}
            strokeLinecap="round"
            pathLength={PATH_LENGTH}
            strokeDasharray={`${filled} ${PATH_LENGTH - filled}`}
            strokeDashoffset={-31}
          />
        </svg>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <Icon
            className="-mt-5"
            size={26}
            stroke={color}
            fill={color}
          />

          <span className="text-[.7rem] font-medium text-gray-500">
            {label}
          </span>

          <span className="text-base leading-none font-semibold text-gray-900">
            {max}
          </span>
        </div>
      </div>
    </div>
  )
}
