import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/shared/components/ui/collapsible'
import { cn } from '@/shared/utils'
import { ChevronDown, CornerDownRight } from 'lucide-react'

import { ISidebarMenuAccordionItem } from './sidebar-menu-accordion.types'

interface Props {
  item: ISidebarMenuAccordionItem
  activeValue?: string
  onValueChange?: (value: string) => void
}

export function MenuAccordionItem({ item, activeValue, onValueChange }: Props) {
  return (
    <Collapsible defaultOpen={item.isInitialOpen}>
      <CollapsibleTrigger
        className={cn(
          'flex w-full items-center justify-between rounded-xl px-2 py-1.5 opacity-80',
          {
            'bg-accent': item.items.some(child => child.value === activeValue)
          }
        )}
      >
        <span className="flex items-center gap-2 text-sm font-semibold">
          <item.icon size={22} />
          {item.name}
        </span>

        <ChevronDown size={20} />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="space-y-2 pt-2 pl-4 text-sm">
          {item.items.map(child => (
            <li
              key={child.value}
              className={cn('opacity-50', {
                'opacity-100': activeValue === child.value
              })}
            >
              <button
                className="flex w-full items-center justify-between"
                onClick={() => onValueChange?.(child.value)}
              >
                <span className="flex items-center gap-1.5">
                  <CornerDownRight size="18" />
                  <span>{child.label}</span>
                </span>

                {!!child.bagdeValue && (
                  <span className="mr-2 block rounded-xl bg-red-200 px-1 py-0.5 text-xs font-semibold text-red-600">
                    {child.bagdeValue}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
