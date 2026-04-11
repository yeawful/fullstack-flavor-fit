import { ISelectItem } from '@/shared/types'
import { LucideIcon } from 'lucide-react'

export interface ISidebarMenuAccordionItem<K extends string = string> {
  isInitialOpen?: boolean
  name: string
  key: K
  icon: LucideIcon
  items: ISelectItem[]
}
