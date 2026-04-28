import { ReportCardWrapper } from './ui/ReportCardWrapper'

const points = [
  [0, 35],
  [15, 35],
  [20, 10],
  [25, 55],
  [30, 20],
  [35, 35],
  [50, 35],
  [65, 35],
  [70, 10],
  [75, 55],
  [80, 20],
  [85, 35],
  [100, 35],
  [115, 35],
  [120, 10],
  [125, 55],
  [130, 20],
  [135, 35],
  [150, 35],
  [160, 35]
]
const d = points
  .map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x} ${y}`)
  .join(' ')

export function BpmSparkline({ bpm }: { bpm: number }) {
  return (
    <ReportCardWrapper
      title="BPM"
      footerText={[`${bpm} bpm`, '15min ago']}
      backgroundColor="#ecf6d9"
    >
      <svg
        viewBox="0 0 160 60"
        className="mt-9 w-full"
      >
        <path
          d={d}
          fill="none"
          stroke="#22C55E"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ReportCardWrapper>
  )
}
