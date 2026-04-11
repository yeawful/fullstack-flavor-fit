import { cn } from '@/shared/utils'
import Image from 'next/image'
import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

import { TRecipeCardSize } from '../types/recipe-card.types'

interface Props {
  image: string
  title: string
  slug: string
  size: TRecipeCardSize
}

export function RecipeCardImage({ image, title, slug, size }: Props) {
  return (
    <Link
      href={PAGES.RECIPE_DETAIL(slug)}
      className="relative w-full"
    >
      <Image
        src={image}
        alt={title}
        className={cn(
          'rounded-2xl object-cover transition-transform duration-200 will-change-transform group-hover:scale-[1.03]',
          size === 'sm' ? 'h-36 w-72' : 'h-40 w-90'
        )}
        width={size === 'sm' ? 240 : 300}
        height={size === 'sm' ? 140 : 160}
        draggable={false}
      />
    </Link>
  )
}
