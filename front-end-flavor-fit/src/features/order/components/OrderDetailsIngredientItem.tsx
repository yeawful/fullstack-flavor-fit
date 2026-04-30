import Image from 'next/image'

import { GetByOrderIdQuery } from '@/__generated__/graphql'

interface Props {
  ingredient: GetByOrderIdQuery['getByOrderId']['items'][number]
}

export function OrderDetailsIngredientItem({ ingredient }: Props) {
  return (
    <div className="flex w-full items-start gap-3">
      <div className="border-border flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border">
        <Image
          src={`/images/ingredients/${ingredient.ingredient.iconUrl}`}
          alt={ingredient.ingredient.name}
          width={45}
          height={45}
          draggable={false}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="grid grid-cols-[1.2fr_1fr]">
          <div className="mb-0.5 font-bold">{ingredient.ingredient.name}</div>

          <div className="flex items-center gap-6">
            <div className="flex w-19 items-center gap-2 text-sm opacity-50">
              <div>${ingredient.ingredient.price.toFixed(2)}</div>
              <div>
                <span className="text-xs">x</span>
                {ingredient.quantity}
              </div>
            </div>

            <div className="font-semibold">
              {ingredient.quantity
                ? `$${(ingredient.ingredient.price * ingredient.quantity).toFixed(2)}`
                : `$${ingredient.ingredient.price.toFixed(2)}`}
            </div>
          </div>
        </div>

        <div className="max-w-xs text-sm leading-tight opacity-50">
          Fresh, organic bananas perfect for snacking or smoothies.
        </div>
      </div>
    </div>
  )
}
