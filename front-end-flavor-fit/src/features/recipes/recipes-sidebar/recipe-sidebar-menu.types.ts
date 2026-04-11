import {
  Cuisine,
  DietaryPreference,
  HealthGoal,
  MealType,
  SpecialOccasion
} from '@/__generated__/graphql'

export type TRecipeFilters = {
  mealType: MealType | null
  dietaryPreference: DietaryPreference | null
  healthGoal: HealthGoal | null
  cuisine: Cuisine | null
  specialOccasion: SpecialOccasion | null
}
