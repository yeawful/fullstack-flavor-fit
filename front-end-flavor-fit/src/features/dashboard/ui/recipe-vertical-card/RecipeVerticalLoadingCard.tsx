import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'

export function RecipeVerticalLoadingCard() {
  return (
    <div>
      <div className="mb-3">
        <SkeletonLoader className="h-60 w-full" />
      </div>

      <SkeletonLoader className="h-20 w-full" />

      <SkeletonLoader
        count={2}
        className="h-10 w-full"
      />

      <div className="grid grid-cols-3 gap-3">
        <SkeletonLoader
          count={6}
          className="h-18.5"
        />
      </div>

      <SkeletonLoader className="h-10 w-full" />

      <SkeletonLoader className="h-16 w-full" />
    </div>
  )
}
