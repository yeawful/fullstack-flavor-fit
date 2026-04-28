import { Droplet, Drumstick, Plus, Sprout, Utensils } from 'lucide-react'

import { IDailyIntake } from '../../types/dashboard-types'
import { DashboardCardWrapper } from '../../ui/card-wrapper/DashboardCardWrapper'
import { MacroRing } from './MacroRing'
import { WaterGlass } from './WaterGlass'

interface Props {
  intake: IDailyIntake
  onAddWater?: () => void
}

const FATS_MAX = 70
const PROTEIN_MAX = 90
const CARBS_MAX = 300

export function DailyIntake({ intake, onAddWater }: Props) {
  const { fatsG, proteinG, carbsG, waterCurrentL, waterGoalL } = intake

  const totalGlasses = 4
  const filledGlasses = 1

  return (
    <DashboardCardWrapper
      Icon={Utensils}
      title="Daily Intake"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-around">
          <MacroRing
            value={fatsG}
            max={FATS_MAX}
            color="#84CC16"
            label="Fats"
            Icon={Droplet}
          />

          <MacroRing
            value={proteinG}
            max={PROTEIN_MAX}
            color="#F59E0B"
            label="Prot."
            Icon={Drumstick}
          />

          <MacroRing
            value={carbsG}
            max={CARBS_MAX}
            color="#8B5CF6"
            label="Car."
            Icon={Sprout}
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              Water {waterCurrentL.toFixed(1)}/{waterGoalL.toFixed(1)}L
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-1 items-end gap-1">
              {Array.from({ length: totalGlasses }, (_, i) => (
                <div
                  className="relative"
                  key={i}
                >
                  <WaterGlass filled={i < filledGlasses} />
                  {i === 1 && (
                    <button
                      onClick={onAddWater}
                      className="absolute top-7 left-1/2 flex size-5 shrink-0 -translate-x-1/2 items-center justify-center rounded-full bg-[#8dbcea] text-[#edf8fe] transition-colors hover:bg-blue-300"
                    >
                      <Plus />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardCardWrapper>
  )
}
