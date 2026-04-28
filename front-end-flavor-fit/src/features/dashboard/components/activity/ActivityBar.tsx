import { IDayActivity } from '../../types/dashboard-types'

const BAR_HEIGHT = 150

export function ActivityBar({
  dayShort,
  activityPercent,
  isHighlighted
}: IDayActivity) {
  const barHeight = Math.max((activityPercent / 100) * BAR_HEIGHT, 4)

  return (
    <div className="flex flex-col items-center">
      <span
        className={`text-foreground text-sm font-semibold transition-opacity ${isHighlighted ? 'opacity-60' : 'opacity-0'}`}
      >
        {activityPercent}%
      </span>

      <div
        className="relative -mt-4 flex w-8 items-end overflow-hidden rounded-full"
        style={{ height: BAR_HEIGHT }}
      >
        <div
          className="relative z-10 w-full rounded-full transition-all duration-500"
          style={{
            height: `${barHeight}px`,
            background: isHighlighted
              ? 'linear-gradient(to top, #7C3AED, #A78BFA)'
              : '#eaeaea'
          }}
        />
      </div>

      <span
        className={`mt-1 text-xs font-medium ${isHighlighted ? 'text-purple-600' : 'text-gray-400'}`}
      >
        {dayShort}
      </span>
    </div>
  )
}
