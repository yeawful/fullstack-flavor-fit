import { SidebarMenuAccordion } from '@/shared/components/custom-ui/sidebar-menu-accordeon/SidebarMenuAccordion'

import { orderSidebarMenuData } from './data/order-sidebar-menu.data'
import { TOrderMenu } from './types/order-sidebar-menu.types'

interface Props {
  filters: Record<TOrderMenu, string>
}

export function OrderSidebar({ filters }: Props) {
  return (
    <aside className="h-full w-full max-w-64 space-y-6 rounded-2xl bg-white px-3 py-4">
      <SidebarMenuAccordion
        data={orderSidebarMenuData}
        values={filters}
        onValueChange={null}
      />
    </aside>
  )
}
