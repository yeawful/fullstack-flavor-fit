import { RecipeCardBadge } from '@/shared/components/custom-ui/recipe-card/ui/badges/RecipeCardBadge'
import { RecipeCardDifficultyBadge } from '@/shared/components/custom-ui/recipe-card/ui/badges/RecipeCardDifficultyBadge'
import { Clock4, Flame, UserPlus } from 'lucide-react'
import Image from 'next/image'

import { Difficulty, GetRecipeBySlugQuery } from '@/__generated__/graphql'

interface Props {
  recipe?: GetRecipeBySlugQuery['recipeBySlug']
}

export function RecipeDetailsMeta({ recipe }: Props) {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <RecipeCardBadge>{recipe?.mealType}</RecipeCardBadge>

          <RecipeCardBadge Icon={Flame}>{recipe?.calories}kcal</RecipeCardBadge>

          <RecipeCardBadge Icon={Clock4}>
            {recipe?.cookingTime}min
          </RecipeCardBadge>

          <RecipeCardDifficultyBadge
            difficultyLevel={recipe?.difficulty || Difficulty.Easy}
            size="default"
          />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Image
          src={recipe?.author.avatarUrl || ''}
          alt={recipe?.author.profile?.fullName || ''}
          width={24}
          height={24}
          className="h-6 w-6 rounded-full object-cover"
          draggable={false}
        />
        <span className="opacity-60">
          @{recipe?.author.profile?.fullName || 'alicewood'}
        </span>
        <button className="ml-2 flex items-center gap-1 rounded-md bg-violet-100 px-1.5 py-0.5 text-sm font-semibold text-violet-500">
          <UserPlus
            size={16}
            className="fill-violet-500"
          />
          <span>Follow</span>
        </button>
      </div>
    </div>
  )
}
