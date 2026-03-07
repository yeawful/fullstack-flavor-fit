import type {
  ActivityLevel,
  Gender,
  NutritionGoal,
  UserUpdateCustomInput
} from '@/__generated__/graphql'

export interface IProfileForm {
  fullName: string
  email?: string
  gender?: Gender
  age?: number
  bio?: string

  heightCm?: number
  weightKg?: number
  goalWeightKg?: number
  chestCm?: number
  waistCm?: number
  thighCm?: number
  armCm?: number

  activityLevel?: ActivityLevel
  nutritionGoal?: NutritionGoal

  avatarUrl?: string
}

export type TProfileForm = Omit<UserUpdateCustomInput, 'password'>
