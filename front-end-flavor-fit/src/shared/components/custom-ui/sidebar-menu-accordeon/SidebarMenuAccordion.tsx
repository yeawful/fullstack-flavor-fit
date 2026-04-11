import { MenuAccordionItem } from './MenuAccordionItem'
import { ISidebarMenuAccordionItem } from './sidebar-menu-accordion.types'

interface Props<K extends string = string> {
  data: ISidebarMenuAccordionItem<K>[]
  values: Record<K, string | null>
  onValueChange?: (key: K, value: string) => void
}

export function SidebarMenuAccordion<K extends string = string>({
  data,
  values,
  onValueChange
}: Props<K>) {
  return (
    <div className="space-y-4">
      {data.map(item => (
        <MenuAccordionItem<K>
          key={item.name}
          item={item}
          activeValue={values[item.key]}
          onValueChange={value => onValueChange?.(item.key, value)}
        />
      ))}
    </div>
  )
}
