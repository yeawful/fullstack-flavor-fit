import { Button } from '@/shared/components/ui/button'
import { Loader2, ShoppingCart } from 'lucide-react'

import { DashboardCardWrapper } from '../../ui/card-wrapper/DashboardCardWrapper'
import { DashboardShoppingItem } from './DashboardShoppingItem'

export function DashboardShoppingList() {
  return (
    <DashboardCardWrapper
      Icon={ShoppingCart}
      title="Shopping list"
    >
      <div className="flex h-[88%] flex-col justify-between">
        <div className="max-h-69 overflow-y-auto rounded-3xl">
          <div className="flex flex-col">
            {items.map(item => (
              <DashboardShoppingItem
                key={item.id}
                item={item}
                checked={checkedItems.some(ci => ci.ingredientId === item.id)}
                onToggle={() => toggle(item.id, item.quantity)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={checkout}
          className="flex w-full items-center justify-center gap-2 py-6 text-base font-semibold"
          variant="accent"
          disabled={!checkedItems.length || loading}
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <ShoppingCart className="h-4 w-4" />
          )}
          Shop Now
        </Button>
      </div>
    </DashboardCardWrapper>
  )
}
