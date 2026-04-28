import { SidebarMenuAccordion } from '@/shared/components/custom-ui/sidebar-menu-accordeon/SidebarMenuAccordion'
import { InputLabel } from '@/shared/components/custom-ui/with-label/InputLabel'
import { Search } from 'lucide-react'

import { recipeSidebarMenuData } from './recipe-sidebar-menu.data'
import { TRecipeFilters } from './recipe-sidebar-menu.types'

interface Props {
  filters: TRecipeFilters
  searchTerm: string
  setSearchTerm: (term: string) => void
  setFilters: (filters: Partial<TRecipeFilters>) => void
}

export function RecipeSidebar({
  filters,
  searchTerm,
  setSearchTerm,
  setFilters
}: Props) {
  const setActiveFilter = (key: keyof TRecipeFilters, value: string) => {
    setFilters({ [key]: value })
  }

  return (
    <aside className="w-full max-w-64 space-y-6 rounded-2xl bg-white px-3 py-4">
      <InputLabel
        Icon={Search}
        placeholder="Search by recipes"
        className="bg-gray-100"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <SidebarMenuAccordion
        data={recipeSidebarMenuData}
        values={filters}
        onValueChange={setActiveFilter}
      />
    </aside>
  )
}
