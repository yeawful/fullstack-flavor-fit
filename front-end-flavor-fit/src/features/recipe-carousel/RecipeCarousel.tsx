import { HeadingWithIcon } from '@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon'
import { RecipeCard } from '@/shared/components/custom-ui/recipe-card/RecipeCard'
import { TRecipeCardSize } from '@/shared/components/custom-ui/recipe-card/types/recipe-card.types'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/shared/components/ui/carousel'
import { LucideIcon } from 'lucide-react'

import { GetRecipesQuery } from '@/__generated__/graphql'

interface Props {
  Icon: LucideIcon
  title: string
  size: TRecipeCardSize
  recipes: GetRecipesQuery['recipes']
}

export function RecipeCarousel({ Icon, title, size, recipes }: Props) {
  return (
    <div className="mb-6">
      <HeadingWithIcon
        className="mb-4"
        Icon={Icon}
      >
        {title}
      </HeadingWithIcon>

      <Carousel>
        <CarouselContent>
          {recipes.map(recipe => (
            <CarouselItem
              key={recipe.slug}
              className={size === 'sm' ? 'basis-[22%]' : 'basis-[26%]'}
            >
              <RecipeCard
                recipe={recipe}
                size={size}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
