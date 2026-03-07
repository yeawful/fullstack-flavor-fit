'use client'

import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'
import { useQuery } from '@apollo/client/react'

import { GetProfileDocument } from '@/__generated__/graphql'

import { ProfileForm } from './ProfileForm'

export function Profile() {
  const { data, loading } = useQuery(GetProfileDocument)

  if (loading || !data?.me) {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <SkeletonLoader
            count={1}
            className="w-xs"
          />
          <div className="flex items-center gap-2">
            <SkeletonLoader
              count={2}
              className="mb-0 w-32"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <SkeletonLoader
              count={4}
              className="mb-4"
            />
          </div>
          <div>
            <SkeletonLoader
              count={6}
              className="mb-4"
            />
          </div>
        </div>
      </div>
    )
  }

  return <ProfileForm data={data} />
}
