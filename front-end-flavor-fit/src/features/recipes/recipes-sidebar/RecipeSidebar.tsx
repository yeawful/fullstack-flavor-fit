import { SidebarMenuAccordion } from '@/shared/components/custom-ui/sidebar-menu-accordeon/SidebarMenuAccordion'
import { InputLabel } from '@/shared/components/custom-ui/with-label/InputLabel'
import { Search } from 'lucide-react'

import { recipeSidebarMenuData } from './recipe-sidebar-menu.data'

interface Props {
  filter: string
  searchTerm: string
  setSearchTerm: (term: string) => void
  setFilter: (filter: string) => void
}

export function RecipeSidebar({
  filter,
  searchTerm,
  setSearchTerm,
  setFilter
}: Props) {
  const setActiveFilter = (filter: string) => {
    setFilter(filter)
  }

  return (
    <div className="w-full max-w-64 space-y-6 rounded-2xl bg-white p-4">
      <InputLabel
        Icon={Search}
        placeholder="Search by recipes"
        className="bg-gray-100"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <SidebarMenuAccordion
        data={recipeSidebarMenuData}
        activeValue={filter}
        onValueChange={setActiveFilter}
      />
    </div>
  )
}
