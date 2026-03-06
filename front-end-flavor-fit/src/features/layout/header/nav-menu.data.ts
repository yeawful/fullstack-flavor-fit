import { IMenuItem } from '@/shared/components/custom-ui/nav-menu/nav-menu.types'
import {
  BookMarked,
  CalendarDays,
  ChartColumn,
  House,
  Settings,
  Store,
  Utensils
} from 'lucide-react'

import { PAGES } from '@/shared/config/page.config'

export const navMenuItems: IMenuItem[] = [
  {
    icon: House,
    label: 'Home',
    href: PAGES.DASHBOARD
  },
  {
    icon: CalendarDays,
    label: 'Meal Plans',
    href: PAGES.MEAL_PLANS
  },
  {
    icon: Utensils,
    label: 'Nutrition',
    href: PAGES.NUTRITION
  },
  {
    icon: ChartColumn,
    label: 'Analytics',
    href: PAGES.ANALYTICS
  },
  {
    icon: Store,
    label: 'Order Groceries',
    href: PAGES.ORDER_GROCERIES
  },
  {
    icon: BookMarked,
    label: 'Recipes',
    href: PAGES.RECIPES
  },
  {
    icon: Settings,
    label: 'Profile',
    href: PAGES.PROFILE
  }
]
