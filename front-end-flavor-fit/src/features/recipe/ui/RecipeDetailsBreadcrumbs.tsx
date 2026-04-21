import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  title?: string
}

export function RecipeDetailsBreadcrumbs({ title }: Props) {
  return (
    <div className="mb-6 flex items-center text-sm">
      <Link
        href={PAGES.RECIPES}
        className="flex items-center gap-1 text-gray-600 transition-colors hover:text-gray-800"
      >
        <ArrowLeft size={16} />
        <span className="font-medium">Back</span>
      </Link>

      <span className="mx-2 text-gray-600">/</span>
      <span className="font-semibold text-gray-800">{title}</span>
    </div>
  )
}
