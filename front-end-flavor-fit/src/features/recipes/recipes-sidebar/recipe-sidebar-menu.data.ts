import { ISidebarMenuAccordionItem } from '@/shared/components/custom-ui/sidebar-menu-accordeon/sidebar-menu-accordion.types'
import { Apple, ChefHat, CookingPot, MonitorCog, Pill } from 'lucide-react'

import {
  Cuisine,
  DietaryPreference,
  HealthGoal,
  MealType,
  SpecialOccasion
} from '@/__generated__/graphql'

import { TRecipeFilters } from './recipe-sidebar-menu.types'

export const recipeSidebarMenuData: ISidebarMenuAccordionItem<
  keyof TRecipeFilters
>[] = [
  {
    isInitialOpen: true,
    icon: CookingPot,
    name: 'Meal Type',
    key: 'mealType',
    items: [
      {
        label: 'Breakfast',
        value: MealType.Breakfast
      },
      {
        label: 'Lunch',
        value: MealType.Lunch,
        bagdeValue: '+1'
      },
      {
        label: 'Dinner',
        value: MealType.Dinner
      },
      {
        label: 'Snacks',
        value: MealType.Snack
      },
      {
        label: 'Desserts',
        value: MealType.Dessert
      },
      {
        label: 'Drinks',
        value: MealType.Drinks
      }
    ]
  },
  {
    isInitialOpen: true,
    icon: Apple,
    name: 'Dietary Preferences',
    key: 'dietaryPreference',
    items: [
      {
        label: 'Vegetarian',
        value: DietaryPreference.Vegetarian
      },
      {
        label: 'Low-Carb',
        value: DietaryPreference.LowCarb,
        bagdeValue: '+2'
      },
      {
        label: 'Glutten-Free',
        value: DietaryPreference.GlutenFree
      },
      {
        label: 'Keto',
        value: DietaryPreference.Keto
      },
      {
        label: 'Dairy-Free',
        value: DietaryPreference.DairyFree
      }
    ]
  },
  {
    icon: Pill,
    name: 'Health Goals',
    key: 'healthGoal',
    items: [
      {
        label: 'Weight Loss',
        value: HealthGoal.WeightLoss
      },
      {
        label: 'Muscle Gain',
        value: HealthGoal.MuscleGain
      },
      {
        label: 'Heart Health',
        value: HealthGoal.HeartHealth
      }
    ]
  },
  {
    icon: ChefHat,
    name: 'Cuisine',
    key: 'cuisine',
    items: [
      {
        label: 'Russian',
        value: Cuisine.Russian
      },
      {
        label: 'Italian',
        value: Cuisine.Italian
      },
      {
        label: 'Chinese',
        value: Cuisine.Chinese
      },
      {
        label: 'Mexican',
        value: Cuisine.Mexican
      },
      {
        label: 'Indian',
        value: Cuisine.Indian
      },
      {
        label: 'French',
        value: Cuisine.French
      }
    ]
  },
  {
    icon: MonitorCog,
    name: 'Special Occasions',
    key: 'specialOccasion',
    items: [
      {
        label: 'Holiday',
        value: SpecialOccasion.Holiday
      },
      {
        label: 'Birthday',
        value: SpecialOccasion.Birthday
      },
      {
        label: 'Anniversary',
        value: SpecialOccasion.Anniversary
      },
      {
        label: 'Party',
        value: SpecialOccasion.Party
      }
    ]
  }
]
