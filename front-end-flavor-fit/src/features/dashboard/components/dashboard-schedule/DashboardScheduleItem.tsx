'use client'

import { cn } from '@/shared/utils'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { CheckCircle2, Circle, Clock, Dumbbell, Flame } from 'lucide-react'

import { IScheduleItem, TMealTag } from '../../types/dashboard-types'

dayjs.extend(customParseFormat)

interface IProps {
  item: IScheduleItem
}

const MEAL_TAG_STYLES: Record<TMealTag, string> = {
  Breakfast: 'bg-red-100 text-red-400',
  Lunch: 'bg-green-100 text-green-500',
  Dinner: 'bg-purple-100 text-purple-400'
}

function getItemTimeStatus(startTime: string, endTime: string) {
  const now = dayjs()

  const start = dayjs(startTime, 'HH:mm')
  const end = dayjs(endTime, 'HH:mm')

  const startToday = now
    .hour(start.hour())
    .minute(start.minute())
    .second(0)
    .millisecond(0)

  const endToday = now
    .hour(end.hour())
    .minute(end.minute())
    .second(0)
    .millisecond(0)

  const isPast = now.isAfter(endToday)
  const isCurrent = now.isAfter(startToday) && now.isBefore(endToday)

  return {
    isPast,
    isCurrent
  }
}

export function DashboardScheduleItem({ item }: IProps) {
  const { isPast, isCurrent } = getItemTimeStatus(item.startTime, item.endTime)

  const isDone = item.isCompleted || isPast

  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center pt-0.5">
        {isDone ? (
          <CheckCircle2 className="size-6 shrink-0 fill-green-500 text-white" />
        ) : (
          <Circle
            className={cn(
              'size-6 shrink-0',
              isCurrent ? 'text-accent' : 'text-gray-300'
            )}
          />
        )}

        <div
          className={cn(
            'my-1 h-14 w-px',
            isDone ? 'bg-green-500' : isCurrent ? 'bg-accent' : 'bg-gray-200'
          )}
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="mb-0.5 text-sm opacity-40">
          {item.startTime} – {item.endTime}
        </p>

        <p
          className={cn(
            'mt-0.5 truncate text-base font-medium',
            isDone ? 'text-gray-500' : 'text-gray-800'
          )}
        >
          {item.title}
        </p>

        {(item.mealTag ||
          item.kcal ||
          item.durationMinutes ||
          item.muscleGroup) && (
          <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs">
            {item.mealTag && (
              <span
                className={cn(
                  'rounded px-2 py-0.5 font-medium',
                  MEAL_TAG_STYLES[item.mealTag]
                )}
              >
                {item.mealTag}
              </span>
            )}

            {item.kcal && (
              <span className="flex items-center gap-0.5 rounded bg-gray-200/70 px-1 py-0.5 text-xs font-medium text-gray-500">
                <Flame size={16} />
                {item.kcal}kcal
              </span>
            )}

            {item.durationMinutes && (
              <span className="flex items-center gap-1 rounded bg-gray-200/70 px-1 py-0.5 text-xs font-medium text-gray-500">
                <Clock size={16} />
                {item.durationMinutes}min
              </span>
            )}

            {item.muscleGroup && (
              <span className="flex items-center gap-1 rounded bg-gray-200/70 px-1 py-0.5 text-xs font-medium text-gray-500">
                <Dumbbell size={16} />
                {item.muscleGroup}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
