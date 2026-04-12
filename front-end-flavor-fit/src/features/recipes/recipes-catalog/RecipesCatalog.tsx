import { BookHeart, Star } from 'lucide-react'

import { RecipeCarousel } from '@/features/recipe-carousel/RecipeCarousel'

import { GetRecipesQuery } from '@/__generated__/graphql'

interface Props {
  recommended: GetRecipesQuery['recipes']['items']
  popular: GetRecipesQuery['recipes']['items']

  recommendedHasMore?: boolean
  popularHasMore?: boolean

  isRecommendedFetchingMore: boolean
  isPopularFetchingMore: boolean

  onLoadMoreRecommended: () => void | Promise<void>
  onLoadMorePopular: () => void | Promise<void>
}

export function RecipesCatalog({
  recommended,
  popular,
  recommendedHasMore,
  popularHasMore,
  isRecommendedFetchingMore,
  isPopularFetchingMore,
  onLoadMoreRecommended,
  onLoadMorePopular
}: Props) {
  return (
    <div>
      <RecipeCarousel
        Icon={BookHeart}
        title="Recommended"
        size="default"
        recipes={recommended}
        hasMore={recommendedHasMore}
        isFetchingMore={isRecommendedFetchingMore}
        onLoadMore={onLoadMoreRecommended}
      />

      <RecipeCarousel
        Icon={Star}
        title="Popular"
        size="sm"
        recipes={popular}
        hasMore={popularHasMore}
        isFetchingMore={isPopularFetchingMore}
        onLoadMore={onLoadMorePopular}
      />
    </div>
  )
}
