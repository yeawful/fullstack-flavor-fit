import { Clock4, Flame } from 'lucide-react'

import { GetRecipesQuery } from '@/__generated__/graphql'

import { TRecipeCardSize } from '../../types/recipe-card.types'
import { RecipeCardBadge } from './RecipeCardBadge'

interface Props {
  recipe: GetRecipesQuery['recipes'][number]
  size: TRecipeCardSize
}

export function RecipeCardMetaBadges({ recipe, size }: Props) {
  return (
    <div className="mt-4 flex items-center gap-2">
      <RecipeCardBadge size={size}>Main dish</RecipeCardBadge>

      <RecipeCardBadge
        Icon={Flame}
        size={size}
      >
        {recipe.calories}kcal
      </RecipeCardBadge>

      {size !== 'sm' ? (
        <RecipeCardBadge
          Icon={Clock4}
          size={size}
        >
          {recipe.cookingTime}min
        </RecipeCardBadge>
      ) : (
        <RecipeCardBadge size={size}>+1</RecipeCardBadge>
      )}
    </div>
  )
}
