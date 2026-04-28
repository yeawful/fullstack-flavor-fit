import { useIngredientsCartStore } from '@/store'
import { Heart, Share, ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'

import { GetRecipeBySlugQuery } from '@/__generated__/graphql'

export function RecipeDetailsActions({
  recipeIngredients
}: {
  recipeIngredients: GetRecipeBySlugQuery['recipeBySlug']['recipeIngredients']
}) {
  const { addItems } = useIngredientsCartStore()

  const onAddToCart = () => {
    addItems(
      recipeIngredients?.map(ri => ({
        id: ri.ingredient.id,
        name: ri.ingredient.name,
        quantity: ri.quantity,
        unit: ri.unit,
        iconUrl: ri.ingredient.iconUrl,
        price: ri.ingredient.price
      })) || []
    )
    toast.success('Ingredients added to cart!')
  }

  return (
    <div className="flex items-center gap-3 pt-1">
      <button
        className="opacity-60 transition-opacity hover:opacity-100"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          toast.success('Link copied to clipboard!')
        }}
      >
        <Share size={20} />
      </button>

      <button
        className="opacity-60 transition-opacity hover:opacity-100"
        onClick={onAddToCart}
      >
        <ShoppingCart size={20} />
      </button>

      <button>
        <Heart
          size={24}
          fill="#e96e65"
          strokeOpacity={0}
        />
      </button>
    </div>
  )
}
