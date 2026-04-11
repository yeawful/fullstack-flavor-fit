import { BookHeart, Star } from 'lucide-react'

import { RecipeCarousel } from '@/features/recipe-carousel/RecipeCarousel'

import { GetRecipesQuery } from '@/__generated__/graphql'

export function RecipesCatalog({
  recommended,
  popular
}: {
  recommended: GetRecipesQuery['recipes']
  popular: GetRecipesQuery['recipes']
}) {
  return (
    <div>
      <RecipeCarousel
        Icon={BookHeart}
        title="Recommended"
        size="default"
        recipes={recommended}
      />

      <RecipeCarousel
        Icon={Star}
        title="Popular"
        size="sm"
        recipes={popular}
      />
    </div>
  )
}
