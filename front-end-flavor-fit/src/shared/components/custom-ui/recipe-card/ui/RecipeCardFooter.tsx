import { Eye, Heart } from 'lucide-react'

import { formatCompactNumber } from '@/shared/utils/format-compact-number.utils'

import { Difficulty } from '@/__generated__/graphql'

import { recipeCardFooterTextVariants } from '../styles/recipe-card.styles'
import { TRecipeCardSize } from '../types/recipe-card.types'
import { RecipeCardDifficultyBadge } from './badges/RecipeCardDifficultyBadge'

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
  return (
    <div className="mt-4 flex items-center justify-between gap-3">
      <RecipeCardDifficultyBadge
        difficultyLevel={difficultyLevel || Difficulty.Easy}
        size={size}
      />
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
