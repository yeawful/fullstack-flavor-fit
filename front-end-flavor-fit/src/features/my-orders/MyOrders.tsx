'use client'
import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'
import { useQuery } from '@apollo/client/react'
import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

import { GetMyOrdersDocument } from '@/__generated__/graphql'

export function MyOrders() {
  const { data, loading } = useQuery(GetMyOrdersDocument)

  return (
    <div className="h-full w-1/2 min-w-80 rounded-2xl bg-white p-5">
      <h1 className="mb-4 text-2xl font-bold">My Orders</h1>
      {loading ? (
        <SkeletonLoader
          count={3}
          className="w-full"
        />
      ) : data?.myOrders.length ? (
        data?.myOrders?.map(order => (
          <Link
            key={order.orderId}
            className="mb-4 block rounded-xl border p-4"
            href={PAGES.ORDER_DETAIL(order.orderId + '?status=' + order.status)}
          >
            <h3 className="mb-2 text-lg font-bold">Order #{order.orderId}</h3>
            <p className="mb-1">Status: {order.status}</p>
            <p className="mb-1">Total: ${order.total}</p>
            <p className="mb-1">
              Placed on: {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </Link>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  )
}
