'use client'

import { useQuery } from '@apollo/client/react'
import { useParams } from 'next/navigation'

import { GetRecipeBySlugDocument } from '@/__generated__/graphql'

import { RecipeDetailsLoader } from './ui/RecipeDetailsLoader'
import { RecipeDetailsComments } from './ui/recipe-details-comments/RecipeDetailsComments'
import { RecipeDetailsContent } from './ui/recipe-details-content/RecipeDetailsContent'

export function RecipeDetails() {
  const params = useParams()

  const { data: recipe, loading } = useQuery(GetRecipeBySlugDocument, {
    variables: {
      slug: params.slug?.toString() || ''
    },
    skip: !params.slug
  })

  return (
    <div className="grid grid-cols-[1fr_minmax(300px,.25fr)] gap-5">
      {loading ? (
        <RecipeDetailsLoader />
      ) : (
        <RecipeDetailsContent recipe={recipe?.recipeBySlug} />
      )}
      <RecipeDetailsComments
        comments={recipe?.recipeBySlug?.comments}
        likes={recipe?.recipeBySlug?.likes}
        views={recipe?.recipeBySlug?.views}
        recipeId={recipe?.recipeBySlug?.id}
      />
    </div>
  )
}
