import { Flame, NotepadText } from 'lucide-react'

import { DashboardCardWrapper } from '../../ui/card-wrapper/DashboardCardWrapper'
import { ArcGauge } from './ArcGauge'
import { BpmSparkline } from './BpmSparkline'
import { WaterAreaChart } from './WaterAreaChart'
import { ReportCardWrapper } from './ui/ReportCardWrapper'

export function DashboardReport() {
  return (
    <DashboardCardWrapper
      Icon={NotepadText}
      title="Report"
      subTitle="Goals this week"
    >
      <div className="grid grid-cols-2 gap-4">
        <WaterAreaChart
          currentMl={2500}
          goalMl={3100}
        />

        <ReportCardWrapper
          title="Weight"
          footerText={['62 kg', 'Goal 56 kg']}
          backgroundColor="#fcf9e9"
        >
          <ArcGauge
            color="#f77563"
            backgroundColor="#fadd75"
            value={62}
            max={150}
          />
        </ReportCardWrapper>

        <BpmSparkline bpm={95} />

        <ReportCardWrapper
          title="Calories"
          footerText={['320kcal', 'Left 1950']}
          backgroundColor="#faedf5"
        >
          <ArcGauge
            color="#f17d6d"
            backgroundColor="#f8d6d9"
            value={320}
            max={2270}
          />
          <Flame
            stroke="#f17d6d"
            fill="#f17d6d"
            className="absolute top-17 left-1/2 -translate-x-1/2"
            size={30}
          />
        </ReportCardWrapper>
      </div>
    </DashboardCardWrapper>
  )
}
