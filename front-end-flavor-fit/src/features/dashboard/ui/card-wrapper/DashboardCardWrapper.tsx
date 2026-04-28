import { LucideIcon } from 'lucide-react'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title: string
  subTitle?: string
  Icon: LucideIcon
}

export function DashboardCardWrapper({
  Icon,
  title,
  subTitle,
  children
}: Props) {
  return (
    <div className="rounded-4xl bg-white p-4">
      <div className="mb-4 flex items-center gap-2">
        <Icon
          className="opacity-40"
          size={22}
        />
        <h1 className="text-lg font-semibold text-[#252525]">{title}</h1>
        {subTitle && <p className="text-sm text-[#777]">{subTitle}</p>}
      </div>

      {children}
    </div>
  )
}
