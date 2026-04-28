'use client'

import { cn } from '@/shared/utils'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'

dayjs.extend(isoWeek)

interface IProps {
  selectedDate: string
  onSelect: (date: string) => void
}

export function DashboardWeekPicker({ selectedDate, onSelect }: IProps) {
  const [weekOffset, setWeekOffset] = useState(0)

  const days = useMemo(() => {
    const startOfWeek = dayjs().add(weekOffset, 'week').startOf('isoWeek')

    return Array.from({ length: 7 }, (_, index) => {
      const currentDate = startOfWeek.add(index, 'day')

      return {
        value: currentDate.format('YYYY-MM-DD'),
        date: currentDate.date(),
        day: currentDate.format('ddd'),
        isToday: currentDate.isSame(dayjs(), 'day')
      }
    })
  }, [weekOffset])

  return (
    <div className="mx-auto flex items-center gap-1">
      <button
        type="button"
        onClick={() => setWeekOffset(prev => prev - 1)}
        className="rounded-full p-1 hover:bg-gray-100"
      >
        <ChevronLeft className="size-5 text-gray-400" />
      </button>

      <div className="grid grid-cols-7 gap-2">
        {days.map(({ value, date, day, isToday }) => {
          const isSelected = selectedDate === value

          return (
            <button
              key={value}
              type="button"
              onClick={() => onSelect(value)}
              className={cn(
                'flex flex-col items-center rounded-2xl px-2 py-1.5 transition',
                isSelected
                  ? 'bg-accent text-foreground font-semibold'
                  : 'text-foreground bg-gray-200 opacity-60 hover:opacity-100',
                isToday && !isSelected && 'ring-1 ring-gray-300'
              )}
            >
              <span className="text-base font-bold">{date}</span>
              <span className="text-xs">{day}</span>
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={() => setWeekOffset(prev => prev + 1)}
        className="rounded-full p-1 hover:bg-gray-100"
      >
        <ChevronRight className="size-5 text-gray-400" />
      </button>
    </div>
  )
}
