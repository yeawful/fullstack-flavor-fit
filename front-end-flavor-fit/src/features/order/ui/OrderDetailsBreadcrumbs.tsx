import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  orderId: string
}

export function OrderDetailsBreadcrumbs({ orderId }: Props) {
  return (
    <div className="flex items-center text-sm">
      <Link
        href={PAGES.MY_ORDERS}
        className="flex items-center gap-1 text-gray-600 transition-colors hover:text-gray-800"
      >
        <ArrowLeft size={16} />
        <span className="font-medium">My Orders</span>
      </Link>

      <span className="mx-2 text-gray-600">/</span>
      <span className="font-semibold text-gray-800">Order #{orderId}</span>
    </div>
  )
}
