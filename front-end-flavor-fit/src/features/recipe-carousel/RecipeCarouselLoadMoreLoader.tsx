import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'
import { TRecipeCardSize } from '@/shared/components/custom-ui/recipe-card/types/recipe-card.types'

interface Props {
  size: TRecipeCardSize
}

export function RecipeCarouselLoadMoreLoader({ size }: Props) {
  const isSmall = size === 'sm'

  return (
    <div className="mb-6">
      <div className={'grid grid-cols-[repeat(2,1fr)] gap-4'}>
        <SkeletonLoader
          count={2}
          className={isSmall ? 'h-68' : 'h-78'}
        />
      </div>
    </div>
  )
}
