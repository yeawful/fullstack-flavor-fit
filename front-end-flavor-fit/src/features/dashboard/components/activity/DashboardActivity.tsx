import { BarChart } from 'lucide-react'

import { IDayActivity } from '../../types/dashboard-types'
import { DashboardCardWrapper } from '../../ui/card-wrapper/DashboardCardWrapper'
import { ActivityBar } from './ActivityBar'

interface Props {
  weekActivities: IDayActivity[]
}

export function DashboardActivity({ weekActivities }: Props) {
  return (
    <DashboardCardWrapper
      Icon={BarChart}
      title="Activity"
    >
      <div className="flex flex-1 items-end justify-around pb-1">
        {weekActivities.map(day => (
          <ActivityBar
            key={day.dayShort}
            {...day}
          />
        ))}
      </div>
    </DashboardCardWrapper>
  )
}
