import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'

export function RecipesCatalogLoader() {
  return (
    <div>
      <div className="mb-6">
        <SkeletonLoader
          count={1}
          className="h-8 w-3xs"
        />
      </div>

      <div className="mb-4 grid grid-cols-[repeat(4,1fr)] gap-4">
        <SkeletonLoader
          count={4}
          className="h-78"
        />
      </div>
      <div className="mb-6">
        <SkeletonLoader
          count={1}
          className="h-8 w-3xs"
        />
      </div>

      <div className="mb-4 grid grid-cols-[repeat(5,1fr)] gap-4">
        <SkeletonLoader
          count={5}
          className="h-68"
        />
      </div>
    </div>
  )
}
