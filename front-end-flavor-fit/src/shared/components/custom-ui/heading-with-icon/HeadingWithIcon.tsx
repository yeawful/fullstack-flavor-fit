import { LucideIcon } from 'lucide-react'

interface Props {
  Icon: LucideIcon
  children?: React.ReactNode
}

export function HeadingWithIcon({ Icon, children }: Props) {
  return (
    <div className="flex items-center">
      <Icon className="mr-1.5 opacity-45" />
      <h1 className="text-lg font-semibold">{children}</h1>
    </div>
  )
}
