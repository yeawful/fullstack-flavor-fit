export type TScheduleItemType = 'meal' | 'water' | 'workout'
export type TMealTag = 'Breakfast' | 'Lunch' | 'Dinner'

export interface IScheduleItem {
  id: string
  startTime: string
  endTime: string
  title: string
  type: TScheduleItemType
  isCompleted: boolean
  kcal?: number | null
  durationMinutes?: number | null
  mealTag?: TMealTag | null
  muscleGroup?: string | null
}

export interface IWaterReport {
  currentMl: number
  goalMl: number
}

export interface IWeightReport {
  currentKg: number
  goalKg: number
}

export interface IBpmReport {
  current: number
  measuredMinutesAgo: number
}

export interface ICaloriesReport {
  consumed: number
  remaining: number
}

export interface IWeekReport {
  water: IWaterReport
  weight: IWeightReport
  bpm: IBpmReport
  calories: ICaloriesReport
}

export interface IShoppingItem {
  id: string
  name: string
  quantity: string
  unit?: string | null
  isChecked: boolean
}

export interface IDailyIntake {
  fatsG: number
  proteinG: number
  carbsG: number
  waterCurrentL: number
  waterGoalL: number
}

export interface IDayActivity {
  dayShort: string
  activityPercent: number
  isHighlighted: boolean
}

export interface IHomeDashboard {
  me: {
    id: string
    name: string
    todayActivitiesCount: number
  }
  todaySchedule: IScheduleItem[]
  weekReport: IWeekReport
  shoppingList: IShoppingItem[]
  todayIntake: IDailyIntake
  weekActivity: IDayActivity[]
}
