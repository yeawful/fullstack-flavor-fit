import { HeadingWithIcon } from '@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon'
import { LucideIcon } from 'lucide-react'

interface Props {
  Icon: LucideIcon
  title: string
}

export function RecipeCarousel({ Icon, title }: Props) {
  return (
    <div>
      <HeadingWithIcon Icon={Icon}>{title}</HeadingWithIcon>

      {/* carousel */}
    </div>
  )
}
