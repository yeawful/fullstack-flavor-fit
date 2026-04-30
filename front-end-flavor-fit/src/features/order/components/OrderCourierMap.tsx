'use client'

import { Expand, MessageCircleMore, Phone } from 'lucide-react'
import Image from 'next/image'

interface IOrderCourierMapProps {
  courierName: string
  courierPhone: string
  courierAvatar?: string
  message?: string
  mapImage?: string
}

export function OrderCourierMap({
  courierName,
  courierPhone,
  courierAvatar = '/images/avatar-placeholder.png',
  message = "Hey there! This is your delivery driver. I'm on my way and should be there shortly.",
  mapImage = '/images/order-map-placeholder.avif'
}: IOrderCourierMapProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#f4f1fb]">
      <div className="relative aspect-16/14 w-full">
        <Image
          src={mapImage}
          alt="Delivery map"
          fill
          className="object-cover"
          priority
          draggable={false}
        />

        <button
          type="button"
          className="absolute top-5 right-5 flex size-8 items-center justify-center rounded-full bg-white/95 shadow-sm"
        >
          <Expand className="size-5" />
        </button>

        <div className="absolute top-5 left-5 max-w-87.5 rounded-2xl bg-white px-5 py-4">
          <div className="flex items-start gap-3">
            <div className="relative size-10 overflow-hidden rounded-full bg-sky-200">
              <Image
                src={courierAvatar}
                alt={courierName}
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="leading-none font-semibold text-neutral-900">
                    {courierName}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {courierPhone}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="flex size-6.5 items-center justify-center rounded-full bg-neutral-950 text-white"
                  >
                    <MessageCircleMore className="size-4" />
                  </button>

                  <button
                    type="button"
                    className="flex size-6.5 items-center justify-center rounded-full bg-neutral-950 text-white"
                  >
                    <Phone className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-2 max-w-107.5 text-sm leading-5 text-neutral-800">
            {message}
          </p>
        </div>
      </div>
    </div>
  )
}
