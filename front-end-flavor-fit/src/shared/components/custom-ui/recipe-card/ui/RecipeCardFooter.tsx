import { ChefHat, Eye, Heart } from 'lucide-react'

import { formatCompactNumber } from '@/shared/utils/format-compact-number.utils'

import { Difficulty } from '@/__generated__/graphql'

import {
  recipeCardDifficultyBadgeVariants,
  recipeCardFooterTextVariants
} from '../styles/recipe-card.styles'
import { TRecipeCardSize } from '../types/recipe-card.types'

interface Props {
  views?: number | null
  likes?: number | null
  difficultyLevel?: Difficulty
  size: TRecipeCardSize
}

export function RecipeCardFooter({
  views,
  likes,
  difficultyLevel,
  size
}: Props) {
  const hatCount =
    difficultyLevel === Difficulty.Easy
      ? 1
      : difficultyLevel === Difficulty.Medium
        ? 2
        : 3

  return (
    <div className="mt-4 flex items-center justify-between gap-3">
      <div
        className={recipeCardDifficultyBadgeVariants({
          tone: difficultyLevel,
          size
        })}
      >
        <span className="flex gap-0.5">
          {[...Array(hatCount)].map((_, index) => (
            <ChefHat
              key={index}
              className="size-3.5"
            />
          ))}
        </span>
        {size !== 'sm' && <span className="capitalize">{difficultyLevel}</span>}
      </div>

      <div className="flex items-center gap-4">
        <span className={recipeCardFooterTextVariants({ size })}>
          <Heart className={size === 'sm' ? 'size-3.5' : 'size-4'} />
          {formatCompactNumber(likes)}
        </span>

        <span className={recipeCardFooterTextVariants({ size })}>
          <Eye className={size === 'sm' ? 'size-3.5' : 'size-4'} />
          {formatCompactNumber(views)}
        </span>
      </div>
    </div>
  )
}
