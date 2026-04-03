import { BookHeart, Star } from 'lucide-react'

import { RecipeCarousel } from '@/features/recipe-carousel/RecipeCarousel'

interface Props {}

export function RecipesCatalog({}: Props) {
  return (
    <div>
      <RecipeCarousel
        Icon={BookHeart}
        title="Recommended"
      />

      <RecipeCarousel
        Icon={Star}
        title="Popular"
      />
    </div>
  )
}
