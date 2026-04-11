'use client'

import { useQuery } from '@apollo/client/react'
import { parseAsStringEnum, useQueryState, useQueryStates } from 'nuqs'

import { useDebounce } from '@/shared/hooks/useDebounce'

import {
  Cuisine,
  DietaryPreference,
  GetRecipesDocument,
  HealthGoal,
  MealType,
  RecipeSort,
  SpecialOccasion
} from '@/__generated__/graphql'

import { RecipesBanners } from './recipes-banners/RecipesBanners'
import { RecipesCatalog } from './recipes-catalog/RecipesCatalog'
import { RecipesCatalogLoader } from './recipes-catalog/RecipesCatalogLoader'
import { RecipeSidebar } from './recipes-sidebar/RecipeSidebar'

export function RecipesDashboard() {
  const [searchTerm, setSearchTerm] = useQueryState('q', {
    defaultValue: ''
  })

  const [filters, setFilters] = useQueryStates({
    mealType: parseAsStringEnum(Object.values(MealType)),
    dietaryPreference: parseAsStringEnum(Object.values(DietaryPreference)),
    healthGoal: parseAsStringEnum(Object.values(HealthGoal)),
    cuisine: parseAsStringEnum(Object.values(Cuisine)),
    specialOccasion: parseAsStringEnum(Object.values(SpecialOccasion))
  })

  const debouncedSearchTerm = useDebounce(searchTerm, 400)

  const { data: recommendedRecipes, loading } = useQuery(GetRecipesDocument, {
    variables: {
      input: {
        ...filters,
        searchTerm: debouncedSearchTerm,
        page: 1,
        limit: 10,
        sort: RecipeSort.Recommended
      }
    }
  })

  const { data: popularRecipes, loading: popularLoading } = useQuery(
    GetRecipesDocument,
    {
      variables: {
        input: {
          ...filters,
          searchTerm: debouncedSearchTerm,
          page: 1,
          limit: 10,
          sort: RecipeSort.Recommended
        }
      }
    }
  )

  return (
    <div className="grid grid-cols-[1fr_minmax(0,5fr)] gap-1">
      <RecipeSidebar
        searchTerm={searchTerm}
        filters={filters}
        setSearchTerm={setSearchTerm}
        setFilters={setFilters}
      />
      <main>
        <RecipesBanners />

        {loading || popularLoading ? (
          <RecipesCatalogLoader />
        ) : (
          <RecipesCatalog
            popular={popularRecipes?.recipes || []}
            recommended={recommendedRecipes?.recipes || []}
          />
        )}
      </main>
    </div>
  )
}
