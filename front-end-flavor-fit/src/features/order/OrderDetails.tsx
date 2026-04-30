'use client'

import { useQuery } from '@apollo/client/react'
import dayjs from 'dayjs'
import { Car, ClockFading, Share } from 'lucide-react'
import { useParams } from 'next/navigation'
import toast from 'react-hot-toast'

import { GetByOrderIdDocument } from '@/__generated__/graphql'

import { OrderCourierMap } from './components/OrderCourierMap'
import { OrderDetailsIngredientItem } from './components/OrderDetailsIngredientItem'
import { OrderDetailsBreadcrumbs } from './ui/OrderDetailsBreadcrumbs'
import { OrderDetailsLoader } from './ui/OrderDetailsLoader'

export function OrderDetails() {
  const { orderId } = useParams()

  const { data: order, loading } = useQuery(GetByOrderIdDocument, {
    variables: {
      orderId: orderId?.toString() || ''
    },
    skip: !orderId
  })

  return (
    <div className="flex h-full min-h-0 flex-col gap-5">
      <OrderDetailsBreadcrumbs orderId={orderId?.toString() || ''} />

      <div className="grid flex-1 grid-cols-[1fr_2fr] gap-10 rounded-xl bg-white p-5">
        <div>
          {loading ? (
            <OrderDetailsLoader />
          ) : (
            <div className="flex h-full min-h-0 flex-col justify-between">
              <div className="flex-1 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-black italic">
                    Order <span className="text-2xl">#</span>
                    {orderId}
                  </h1>
                  <button
                    className="opacity-60 transition-opacity hover:opacity-100"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href)
                      toast.success('Link copied to clipboard!')
                    }}
                  >
                    <Share size={20} />
                  </button>
                </div>
                <div className="mt-1.5 text-sm font-semibold opacity-35">
                  {dayjs(order?.getByOrderId.createdAt).format(
                    'DD MMMM, hh:mma'
                  )}
                </div>

                <div className="mt-5 space-y-3">
                  {order?.getByOrderId.items.map(item => (
                    <OrderDetailsIngredientItem
                      key={item.id}
                      ingredient={item}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="border-border mt-6 border-t-2 border-dashed" />

                <div className="mt-3 flex items-center justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>{`$${order?.getByOrderId.total.toFixed(2)}`}</span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 rounded-xl bg-violet-100 px-3 py-3.5 text-sm">
                    <Car className="text-primary" />
                    <div className="flex min-w-0 flex-1 items-center justify-between">
                      <span>Courier:</span>
                      <span className="font-semibold">On my way</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-red-100 px-3 py-3.5 text-sm">
                    <ClockFading className="text-[#c26874]" />
                    <div className="flex min-w-0 flex-1 items-center justify-between">
                      <span>Courier:</span>
                      <span className="font-semibold">On my way</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <OrderCourierMap
          courierName="Jake Anderson"
          courierPhone="+1 (555) 123-6789"
          courierAvatar="/images/couriers/jake.webp"
        />
      </div>
    </div>
  )
}
