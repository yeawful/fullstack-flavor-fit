import { cn } from '@/shared/utils'
import { LucideIcon } from 'lucide-react'

interface Props {
  Icon: LucideIcon
  children?: React.ReactNode
  className?: string
}

export function HeadingWithIcon({ Icon, children, className }: Props) {
  return (
    <div className={cn(`flex items-center`, className)}>
      <Icon className="mr-1.5 opacity-60" />
      <h1 className="text=[#222222] text-xl font-semibold">{children}</h1>
    </div>
  )
}
