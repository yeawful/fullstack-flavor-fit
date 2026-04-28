import { CreditCard, ListOrdered, Truck } from 'lucide-react'

import { ISidebarMenuAccordionItem } from '@/shared/components/custom-ui/sidebar-menu-accordion/sidebar-menu-accordion.types'

import { OrderStatus } from '@/__generated__/graphql'

import { TOrderMenu } from '../types/order-sidebar-menu.types'

export const orderSidebarMenuData: ISidebarMenuAccordionItem<TOrderMenu>[] = [
  {
    isInitialOpen: false,
    icon: ListOrdered,
    name: 'My orders',
    key: 'myOrders',
    items: []
  },
  {
    isInitialOpen: true,
    icon: Truck,
    name: 'Delivery',
    key: 'delivery',
    items: [
      {
        label: 'Upcoming',
        value: OrderStatus.Pending
      },
      {
        label: 'In Progress',
        value: OrderStatus.Processing
      },
      {
        label: 'Completed',
        value: OrderStatus.Completed
      },
      {
        label: 'Cancelled',
        value: OrderStatus.Cancelled
      }
    ]
  },
  {
    icon: CreditCard,
    name: 'Payment',
    key: 'payment',
    items: []
  }
]
