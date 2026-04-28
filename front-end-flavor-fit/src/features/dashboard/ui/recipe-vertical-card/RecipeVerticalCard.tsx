import { recipeCardFooterTextVariants } from '@/shared/components/custom-ui/recipe-card/styles/recipe-card.styles'
import { RecipeCardBadge } from '@/shared/components/custom-ui/recipe-card/ui/badges/RecipeCardBadge'
import { RecipeCardDifficultyBadge } from '@/shared/components/custom-ui/recipe-card/ui/badges/RecipeCardDifficultyBadge'
import { Button } from '@/shared/components/ui/button'
import { ArrowUpRight, Clock4, Eye, Flame, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { RecipeDetailsIngredients } from '@/features/recipe/ui/recipe-details-content/RecipeDetailsIngredients'

import { PAGES } from '@/shared/config/page.config'

import { formatCompactNumber } from '@/shared/utils/format-compact-number.util'

import { Difficulty, GetRecipeBySlugQuery } from '@/__generated__/graphql'

interface Props {
  recipe?: Omit<
    GetRecipeBySlugQuery['recipeBySlug'],
    | '__typename'
    | 'createdAt'
    | 'updatedAt'
    | 'author'
    | 'tags'
    | 'recipeSteps'
    | 'comments'
    | 'nutritionFact'
  > | null
}

export function RecipeVerticalCard({ recipe }: Props) {
  return (
    <div className="flex min-h-208 flex-col rounded-4xl bg-white p-5">
      <Image
        src={recipe?.image || ''}
        alt={recipe?.title || ''}
        width={300}
        height={300}
        className="h-55 w-full rounded-xl object-cover"
        draggable={false}
        priority
      />

      <h2 className="mt-3 text-4xl leading-10 font-black italic">
        {recipe?.title}
      </h2>

      <div className="mt-3 text-sm opacity-65">{recipe?.description}</div>

      <div className="mt-2 flex items-center gap-2">
        <RecipeCardBadge>{recipe?.mealType}</RecipeCardBadge>

        <RecipeCardBadge Icon={Flame}>{recipe?.calories}kcal</RecipeCardBadge>

        <RecipeCardBadge Icon={Clock4}>
          {recipe?.cookingTime}min
        </RecipeCardBadge>
      </div>

      <RecipeDetailsIngredients recipeIngredients={recipe?.recipeIngredients} />

      <div className="mt-auto flex items-center justify-between">
        <RecipeCardDifficultyBadge
          difficultyLevel={recipe?.difficulty || Difficulty.Easy}
          size="default"
        />

        <div className="flex items-center gap-3">
          <span className={recipeCardFooterTextVariants({ size: 'lg' })}>
            <Heart className={'size-4'} />
            {formatCompactNumber(recipe?.likes)}
          </span>

          <span className={recipeCardFooterTextVariants({ size: 'lg' })}>
            <Eye className={'size-4'} />
            {formatCompactNumber(recipe?.views)}
          </span>
        </div>
      </div>

      <Link href={PAGES.RECIPE_DETAIL(recipe?.slug || '')}>
        <Button
          variant="outline"
          className="mt-5 flex w-full items-center gap-1.5 rounded-3xl py-5.5"
          asChild
        >
          <span>
            <span>Explore Recipe </span> <ArrowUpRight size={18} />
          </span>
        </Button>
      </Link>
    </div>
  )
}
