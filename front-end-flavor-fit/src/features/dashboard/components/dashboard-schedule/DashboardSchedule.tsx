'use client'

import dayjs from 'dayjs'
import { ClockCheck } from 'lucide-react'
import { useState } from 'react'

import { SCHEDULE_ITEMS } from '../../data/schedule.data'
import { DashboardCardWrapper } from '../../ui/card-wrapper/DashboardCardWrapper'
import { DashboardScheduleItem } from './DashboardScheduleItem'
import { DashboardWeekPicker } from './DashboardWeekPicker'

export function DashboardSchedule() {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'))

  return (
    <DashboardCardWrapper
      Icon={ClockCheck}
      title="View today’s schedule"
    >
      <div className="flex h-full flex-col gap-4">
        <DashboardWeekPicker
          selectedDate={selectedDate}
          onSelect={setSelectedDate}
        />

        <div className="flex-1 overflow-y-auto">
          {SCHEDULE_ITEMS.length === 0 ? (
            <p className="py-8 text-center text-sm text-gray-400">
              No activities scheduled
            </p>
          ) : (
            <div className="flex flex-col">
              {SCHEDULE_ITEMS.map(item => (
                <DashboardScheduleItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardCardWrapper>
  )
}
