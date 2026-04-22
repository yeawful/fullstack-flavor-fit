import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'

export function RecipeCommentsLoader() {
  return (
    <div>
      <div className="mb-3">
        <SkeletonLoader
          count={2}
          className="h-8 w-3xs"
        />
      </div>

      <SkeletonLoader
        count={3}
        className="mb-3 h-38 w-full"
      />

      <SkeletonLoader className="h-10 w-full" />
    </div>
  )
}
