import { GetRecipeBySlugQuery } from '@/__generated__/graphql'

import { RecipeDetailsActions } from './RecipeDetailsActions'
import { RecipeDetailsDescription } from './RecipeDetailsDescription'
import { RecipeDetailsIngredients } from './RecipeDetailsIngredients'
import { RecipeDetailsMeta } from './RecipeDetailsMeta'

interface Props {
  recipe?: GetRecipeBySlugQuery['recipeBySlug']
}

export function RecipeDetailsInformation({ recipe }: Props) {
  return (
    <div>
      <div className="flex items-start justify-between">
        <h1 className="text-4xl leading-tight font-bold italic">
          {recipe?.title}
        </h1>

        <RecipeDetailsActions recipeIngredients={recipe?.recipeIngredients} />
      </div>

      <RecipeDetailsMeta recipe={recipe} />

      <RecipeDetailsDescription recipe={recipe} />

      <RecipeDetailsIngredients recipeIngredients={recipe?.recipeIngredients} />
    </div>
  )
}
