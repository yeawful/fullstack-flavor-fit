'use client'

import { useQueryState } from 'nuqs'

import { useDebounce } from '@/shared/hooks/useDebounce'

import { RecipesBanners } from './recipes-banners/RecipesBanners'
import { RecipesCatalog } from './recipes-catalog/RecipesCatalog'
import { RecipeSidebar } from './recipes-sidebar/RecipeSidebar'

export function RecipesDashboard() {
  const [searchTerm, setSearchTerm] = useQueryState('q', {
    defaultValue: ''
  })
  const [filter, setFilter] = useQueryState('f', {
    defaultValue: ''
  })

  const debouncedSearchTerm = useDebounce(searchTerm, 400)

  return (
    <div className="grid grid-cols-[1fr_5fr] gap-5">
      <RecipeSidebar
        searchTerm={searchTerm}
        filter={filter}
        setFilter={setFilter}
        setSearchTerm={setSearchTerm}
      />
      <main>
        <RecipesBanners />
        <RecipesCatalog />
      </main>
    </div>
  )
}
