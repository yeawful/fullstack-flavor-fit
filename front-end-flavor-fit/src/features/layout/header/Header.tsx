'use client'
import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'
import { NavMenu } from '@/shared/components/custom-ui/nav-menu/NavMenu'
import { UserInfo } from '@/shared/components/custom-ui/user-info/UserInfo'
import { Button } from '@/shared/components/ui/button'
import { Bell, Headset } from 'lucide-react'
import Link from 'next/link'

import { useAuth } from '@/features/auth/hooks/useAuth'

import { PAGES } from '@/shared/config/page.config'

import { Logout } from '../../auth/ui/Logout'
import { navMenuItems } from './nav-menu.data'

export function Header() {
  const { user, isLoading } = useAuth()

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link
          href={PAGES.DASHBOARD}
          className="from-primary to-primary-dark flex size-9 items-center justify-center rounded-full bg-linear-to-b text-xl font-black text-white"
        >
          F
        </Link>
        <NavMenu menu={navMenuItems} />
      </div>
      <div className="flex items-center">
        <Button
          variant="soft"
          size="icon"
          className="mr-2 rounded-full"
        >
          <Headset className="size-5" />
        </Button>
        <Button
          variant="soft"
          size="icon"
          className="mr-2 rounded-full"
        >
          <Bell className="size-5" />
        </Button>

        <Logout />

        {isLoading ? (
          <div className="flex items-center gap-2">
            <SkeletonLoader className="size-9" />

            <div>
              <SkeletonLoader className="mb-1 h-4 w-20" />
              <SkeletonLoader className="h-4 w-16" />
            </div>
          </div>
        ) : (
          <UserInfo
            avatarUrl={user?.avatarUrl || ''}
            name={user?.profile?.fullName || 'Anonymous'}
            email={user?.email || ''}
          />
        )}
      </div>
    </header>
  )
}
