'use client'

import Image from 'next/image'

import { GetRecipeBySlugQuery } from '@/__generated__/graphql'

import { RecipeDetailsSteps } from '../recipe-details-steps/RecipeDetailsSteps'
import { RecipeDetailsInformation } from './RecipeDetailsInformation'

interface Props {
  recipe?: GetRecipeBySlugQuery['recipeBySlug']
}

export function RecipeDetailsContent({ recipe }: Props) {
  return (
    <div>
      <div className="rounded-2xl bg-white p-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="relative h-90 w-full">
            <Image
              src={recipe?.image || ''}
              alt={recipe?.title || ''}
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <RecipeDetailsInformation recipe={recipe} />
        </div>

        <RecipeDetailsSteps steps={recipe?.recipeSteps} />
      </div>
    </div>
  )
}
