import { ISelectItem } from '@/shared/types'
import { LucideIcon } from 'lucide-react'

export interface ISidebarMenuAccordionItem {
  isInitialOpen?: boolean
  name: string
  icon: LucideIcon
  items: ISelectItem[]
}
