import { ISidebarMenuAccordionItem } from '@/shared/components/custom-ui/sidebar-menu-accordeon/sidebar-menu-accordion.types'
import { Apple, ChefHat, CookingPot, MonitorCog, Pill } from 'lucide-react'

export const recipeSidebarMenuData: ISidebarMenuAccordionItem[] = [
  {
    isInitialOpen: true,
    icon: CookingPot,
    name: 'Meal Type',
    items: [
      {
        label: 'Breakfast',
        value: 'breakfast'
      },
      {
        label: 'Lunch',
        value: 'lunch',
        bagdeValue: '+1'
      },
      {
        label: 'Dinner',
        value: 'dinner'
      },
      {
        label: 'Snacks',
        value: 'snacks'
      },
      {
        label: 'Desserts',
        value: 'desserts'
      },
      {
        label: 'Drinks',
        value: 'drinks'
      }
    ]
  },
  {
    isInitialOpen: true,
    icon: Apple,
    name: 'Dietary Preferences',
    items: [
      {
        label: 'Vegetarian',
        value: 'vegetarian'
      },
      {
        label: 'Low-Carb',
        value: 'low-carb',
        bagdeValue: '+2'
      },
      {
        label: 'Glutten-Free',
        value: 'glutten-free'
      },
      {
        label: 'Keto',
        value: 'keto'
      },
      {
        label: 'Dairy-Free',
        value: 'dairy-free'
      }
    ]
  },
  {
    icon: Pill,
    name: 'Health Goals',
    items: [
      {
        label: 'Weight Loss',
        value: 'weight-loss'
      },
      {
        label: 'Muscle Gain',
        value: 'muscle-gain'
      },
      {
        label: 'Heart Health',
        value: 'heart-health'
      }
    ]
  },
  {
    icon: ChefHat,
    name: 'Cuisine',
    items: [
      {
        label: 'Russian',
        value: 'russion'
      },
      {
        label: 'Italian',
        value: 'italian'
      },
      {
        label: 'Chinese',
        value: 'chinese'
      },
      {
        label: 'Mexican',
        value: 'mexican'
      },
      {
        label: 'Indian',
        value: 'indian'
      },
      {
        label: 'French',
        value: 'french'
      }
    ]
  },
  {
    icon: MonitorCog,
    name: 'Special Occasions',
    items: [
      {
        label: 'Holiday',
        value: 'holiday'
      },
      {
        label: 'Birthday',
        value: 'birthday'
      },
      {
        label: 'Anniversary',
        value: 'anniversary'
      },
      {
        label: 'Party',
        value: 'party'
      }
    ]
  }
]
