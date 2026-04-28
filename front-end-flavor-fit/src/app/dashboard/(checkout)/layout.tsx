'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { type PropsWithChildren, useMemo } from 'react'

import { OrderSidebar } from '@/features/order-sidebar/OrderSidebar'

import { PAGES } from '@/shared/config/page.config'

export default function Layout({ children }: PropsWithChildren<unknown>) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const filters = useMemo(() => {
    return {
      myOrders: pathname === PAGES.MY_ORDERS ? 'active' : '',
      delivery: pathname.includes(PAGES.MY_ORDERS + '/')
        ? searchParams.get('status') || ''
        : '',
      payment: pathname === PAGES.PAYMENT ? 'active' : ''
    }
  }, [pathname, searchParams])

  console.log(filters)

  return (
    <div className="grid min-h-0 grid-cols-[1fr_minmax(0,5fr)] gap-7">
      <OrderSidebar filters={filters} />

      <main className="min-h-0">{children}</main>
    </div>
  )
}
