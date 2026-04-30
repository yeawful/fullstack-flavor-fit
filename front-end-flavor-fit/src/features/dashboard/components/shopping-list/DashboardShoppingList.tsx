import { Button } from '@/shared/components/ui/button'
import { useIngredientsCartStore } from '@/store'
import { useMutation } from '@apollo/client/react'
import { Loader2, ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { PAGES } from '@/shared/config/page.config'

import { CreateOrderDocument, OrderItemInput } from '@/__generated__/graphql'

import { DashboardCardWrapper } from '../../ui/card-wrapper/DashboardCardWrapper'
import { DashboardShoppingItem } from './DashboardShoppingItem'

export function DashboardShoppingList() {
  const [checkedItems, setCheckedItems] = useState<OrderItemInput[]>([])

  const toggle = (id: string, quantity: number) => {
    setCheckedItems(prev => {
      const isChecked = prev.some(item => item.ingredientId === id)

      if (isChecked) {
        return prev.filter(item => item.ingredientId !== id)
      }

      return [...prev, { ingredientId: id, quantity }]
    })
  }

  const router = useRouter()

  const items = useIngredientsCartStore(state => state.items)
  const removeItems = useIngredientsCartStore(state => state.removeItems)

  const [mutate, { loading }] = useMutation(CreateOrderDocument, {
    onCompleted: ({ createOrder }) => {
      toast.success('Order created successfully!')
      router.push(
        PAGES.ORDER_DETAIL(
          createOrder.orderId + '?status=' + createOrder.status
        )
      )
    }
  })

  const checkout = () => {
    if (!checkedItems.length) {
      return
    }

    mutate({
      variables: {
        input: {
          items: checkedItems
        }
      }
    })

    removeItems(checkedItems.map(item => item.ingredientId))
  }

  return (
    <DashboardCardWrapper
      Icon={ShoppingCart}
      title="Shopping list"
    >
      <div className="flex h-[88%] flex-col justify-between">
        <div className="max-h-75 overflow-y-auto rounded-3xl">
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
