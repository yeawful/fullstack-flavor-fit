import { cn } from '@/shared/utils'
import { EllipsisVertical } from 'lucide-react'
import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

import { GetRecipesQuery } from '@/__generated__/graphql'

import {
  recipeCardDescriptionVariants,
  recipeCardTitleVariants,
  recipeCardVariants
} from './styles/recipe-card.styles'
import { TRecipeCardSize } from './types/recipe-card.types'
import { RecipeCardFooter } from './ui/RecipeCardFooter'
import { RecipeCardImage } from './ui/RecipeCardImage'
import { RecipeCardMetaBadges } from './ui/badges/RecipeCardMetaBadges'

interface Props {
  recipe: GetRecipesQuery['recipes'][0]
  size?: TRecipeCardSize
}

export function RecipeCard({ recipe, size }: Props) {
  return (
    <div
      className={cn(
        recipeCardVariants({ size }),
        'transition-shadow duration-300 group-hover:shadow-[0_3px_14px_rgba(0,0,0,.1)]'
      )}
    >
      <RecipeCardImage
        image={recipe.image}
        title={recipe.title}
        size={size}
        slug={recipe.slug}
      />

      <div className="mt-4 flex items-start justify-between gap-3">
        <Link
          href={PAGES.RECIPE_DETAIL(recipe.slug)}
          className={`min-w-0 flex-1 ${recipeCardTitleVariants({ size })} `}
        >
          <h3>{recipe.title}</h3>
        </Link>

        <button
          type="button"
          className="shrink-0 text-black/40"
          aria-label="More actions"
          onClick={e => e.preventDefault()}
        >
          <EllipsisVertical className={size === 'sm' ? 'size-4' : 'size-5'} />
        </button>
      </div>

      <p className={recipeCardDescriptionVariants({ size })}>
        {recipe.description}
      </p>

      <RecipeCardMetaBadges
        recipe={recipe}
        size={size}
      />

      <RecipeCardFooter
        difficultyLevel={recipe.difficulty}
        likes={recipe.likes}
        views={recipe.views}
        size={size}
      />
    </div>
  )
}
