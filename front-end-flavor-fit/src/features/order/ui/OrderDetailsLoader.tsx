import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'

export function OrderDetailsLoader() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <SkeletonLoader className="h-12 w-1/3" />

        <SkeletonLoader className="w-1/4" />

        <SkeletonLoader
          count={4}
          className="h-12 w-full"
        />
      </div>

      <div>
        <SkeletonLoader className="h-12 w-full" />
      </div>
    </div>
  )
}
