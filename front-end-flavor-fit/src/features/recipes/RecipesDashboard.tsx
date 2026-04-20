'use client'

import { useQuery } from '@apollo/client/react'
import { parseAsStringEnum, useQueryState, useQueryStates } from 'nuqs'
import { useMemo } from 'react'

import { useDebounce } from '@/shared/hooks/useDebounce'

import {
  Cuisine,
  DietaryPreference,
  GetRecipesDocument,
  HealthGoal,
  MealType,
  RecipeSort,
  RecipesQueryInput,
  SpecialOccasion
} from '@/__generated__/graphql'

import { useFetchMoreRecipes } from './hooks/useFetchMoreRecipes'
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

  const commonInput: RecipesQueryInput = useMemo(
    () => ({
      ...filters,
      searchTerm: debouncedSearchTerm
    }),
    [filters, debouncedSearchTerm]
  )

  const recommendedInput: RecipesQueryInput = useMemo(
    () => ({
      ...commonInput,
      limit: 4
    }),
    [commonInput]
  )

  const popularInput: RecipesQueryInput = useMemo(
    () => ({
      ...commonInput,
      limit: 5
    }),
    [commonInput]
  )

  const {
    data: recommendedRecipes,
    loading,
    fetchMore: fetchMoreRecommended
  } = useQuery(GetRecipesDocument, {
    variables: {
      input: {
        ...recommendedInput,
        page: 1,
        sort: RecipeSort.Recommended
      }
    },
    notifyOnNetworkStatusChange: true
  })

  const {
    data: popularRecipes,
    loading: popularLoading,
    fetchMore: fetchMorePopular
  } = useQuery(GetRecipesDocument, {
    variables: {
      input: {
        ...popularInput,
        page: 1,
        sort: RecipeSort.Popular
      }
    },
    notifyOnNetworkStatusChange: true
  })

  const recommendedPagination = useFetchMoreRecipes({
    fetchMore: fetchMoreRecommended,
    input: recommendedInput,
    sort: RecipeSort.Recommended,
    hasMore: recommendedRecipes?.recipes.hasMore
  })

  const popularPagination = useFetchMoreRecipes({
    fetchMore: fetchMorePopular,
    input: popularInput,
    sort: RecipeSort.Popular,
    hasMore: popularRecipes?.recipes.hasMore
  })

  const isInitialLoading =
    (loading && !recommendedRecipes) || (popularLoading && !popularRecipes)

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

        {isInitialLoading ? (
          <RecipesCatalogLoader />
        ) : (
          <>
            <RecipesCatalog
              recommended={recommendedRecipes?.recipes.items || []}
              popular={popularRecipes?.recipes.items || []}
              recommendedHasMore={recommendedRecipes?.recipes.hasMore}
              popularHasMore={popularRecipes?.recipes.hasMore}
              isRecommendedFetchingMore={recommendedPagination.isFetchingMore}
              isPopularFetchingMore={popularPagination.isFetchingMore}
              onLoadMoreRecommended={recommendedPagination.loadMore}
              onLoadMorePopular={popularPagination.loadMore}
            />
          </>
        )}
      </main>
    </div>
  )
}
