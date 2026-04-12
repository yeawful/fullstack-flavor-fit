'use client'

import { CarouselApi } from '@/shared/components/ui/carousel'
import { useEffect } from 'react'

interface Props {
  api?: CarouselApi
  hasMore?: boolean
  isFetchingMore: boolean
  onLoadMore: () => void | Promise<void>
}

export function useCarouselInfiniteScroll({
  api,
  hasMore,
  isFetchingMore,
  onLoadMore
}: Props) {
  useEffect(() => {
    if (!api) return

    const checkAndLoadMore = () => {
      if (!hasMore || isFetchingMore) return

      const selectedIndex = api.selectedScrollSnap()
      const lastIndex = api.scrollSnapList().length - 1

      if (selectedIndex >= lastIndex) {
        void onLoadMore()
      }
    }

    api.on('select', checkAndLoadMore)

    return () => {
      api.off('select', checkAndLoadMore)
    }
  }, [api, hasMore, isFetchingMore, onLoadMore])
}
