'use client'

import { useQuery } from '@apollo/client/react'

import { GetRandomRecipeDocument } from '@/__generated__/graphql'

import { DashboardActivity } from './components/activity/DashboardActivity'
import { DashboardAddRecipeBanner } from './components/banners/DashboardAddRecipeBanner'
import { DailyIntake } from './components/daily-intake/DailyIntake'
import { DashboardSchedule } from './components/dashboard-schedule/DashboardSchedule'
import { DashboardReport } from './components/report/DashboardReport'
import { DashboardShoppingList } from './components/shopping-list/DashboardShoppingList'
import { DashboardTopSide } from './components/top-side/DashboardTopSide'
import { RecipeVerticalCard } from './ui/recipe-vertical-card/RecipeVerticalCard'
import { RecipeVerticalLoadingCard } from './ui/recipe-vertical-card/RecipeVerticalLoadingCard'

export function Dashboard() {
  const { data: recipe, loading } = useQuery(GetRandomRecipeDocument)

  return (
    <div className="grid grid-cols-[1fr_minmax(300px,.25fr)] gap-7">
      <div>
        <DashboardTopSide />

        <div className="mt-5 grid grid-cols-[1fr_3fr] gap-6">
          <DashboardSchedule />
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <DashboardReport />
              <DashboardShoppingList
                items={[
                  {
                    id: '1',
                    name: 'Chicken Breast',
                    quantity: '500g',
                    isChecked: true
                  },
                  {
                    id: '2',
                    name: 'Broccoli',
                    quantity: '300g',
                    isChecked: false
                  },
                  {
                    id: '3',
                    name: 'Quinoa',
                    quantity: '200g',
                    isChecked: false
                  },
                  {
                    id: '4',
                    name: 'Avocado',
                    quantity: '2 pcs',
                    isChecked: true
                  },
                  {
                    id: '5',
                    name: 'Eggs',
                    quantity: '12 pcs',
                    isChecked: false
                  },
                  {
                    id: '6',
                    name: 'Spinach',
                    quantity: '150g',
                    isChecked: false
                  }
                ]}
              />
            </div>
            <div className="grid grid-cols-3 gap-6">
              <DailyIntake
                intake={{
                  fatsG: 14,
                  proteinG: 22,
                  carbsG: 15,
                  waterCurrentL: 2.5,
                  waterGoalL: 3.1
                }}
              />
              <DashboardActivity
                weekActivities={[
                  {
                    activityPercent: 80,
                    dayShort: 'Sun',
                    isHighlighted: false
                  },
                  {
                    activityPercent: 60,
                    dayShort: 'Mon',
                    isHighlighted: false
                  },
                  {
                    activityPercent: 85,
                    dayShort: 'Tue',
                    isHighlighted: true
                  },
                  {
                    activityPercent: 65,
                    dayShort: 'Wed',
                    isHighlighted: false
                  },
                  {
                    activityPercent: 50,
                    dayShort: 'Thu',
                    isHighlighted: false
                  }
                ]}
              />
              <DashboardAddRecipeBanner />
            </div>
          </div>
        </div>
      </div>

      <div>
        {loading ? (
          <RecipeVerticalLoadingCard />
        ) : (
          <RecipeVerticalCard recipe={recipe?.randomRecipe} />
        )}
      </div>
    </div>
  )
}
