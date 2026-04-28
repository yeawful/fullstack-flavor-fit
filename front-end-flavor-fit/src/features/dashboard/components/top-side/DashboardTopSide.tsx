'use client'

import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'
import { InputLabel } from '@/shared/components/custom-ui/with-label/InputLabel'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useAuth } from '@/features/auth/hooks/useAuth'

import { PAGES } from '@/shared/config/page.config'

export function DashboardTopSide() {
  const { user, isLoading } = useAuth()

  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  return (
    <div className="mb-6 flex items-end gap-7">
      <div className="shrink-0">
        <h1 className="text-3xl text-gray-800">
          Hello,{' '}
          {isLoading ? (
            <SkeletonLoader className="inline-block h-6 w-24" />
          ) : (
            <span className="font-bold text-gray-900">
              {user?.profile?.fullName}
            </span>
          )}
        </h1>
        <p className="mt-0.5 text-base text-gray-700">
          You have <b>8</b> activities today
        </p>
      </div>
      <InputLabel
        Icon={Search}
        placeholder="Search by recipes..."
        parentClassName="w-full"
        className="w-full rounded-2xl bg-white py-5"
        value={searchTerm}
        name="Search by recipes"
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && searchTerm.trim() !== '') {
            router.push(PAGES.RECIPES + `?q=${searchTerm}`)
          }
        }}
      />
    </div>
  )
}
