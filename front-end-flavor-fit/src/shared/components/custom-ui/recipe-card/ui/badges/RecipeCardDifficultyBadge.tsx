import { ChefHat } from 'lucide-react'

import { Difficulty } from '@/__generated__/graphql'

import { recipeCardDifficultyBadgeVariants } from '../../styles/recipe-card.styles'
import { TRecipeCardSize } from '../../types/recipe-card.types'

interface Props {
  difficultyLevel: Difficulty
  size: TRecipeCardSize
}

export function RecipeCardDifficultyBadge({ difficultyLevel, size }: Props) {
  const hatCount =
    difficultyLevel === Difficulty.Easy
      ? 1
      : difficultyLevel === Difficulty.Medium
        ? 2
        : 3
  return (
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
  )
}
