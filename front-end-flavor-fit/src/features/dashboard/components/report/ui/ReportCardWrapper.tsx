import { cn } from '@/shared/utils'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title: string
  footerText: [string, string]
  backgroundColor?: string
}

export function ReportCardWrapper({
  title,
  footerText,
  children,
  backgroundColor
}: Props) {
  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{ backgroundColor: backgroundColor || '#FDFDFE' }}
    >
      <h3 className="absolute top-3 left-3 font-bold">{title}</h3>

      {children}

      <div className="absolute bottom-3 left-3 flex w-[calc(100%-1.5rem)] items-center justify-between">
        <span
          className={cn(
            'text-foreground text-base font-bold',
            title === 'Water' && 'text-white'
          )}
        >
          {footerText[0]}
        </span>
        <span
          className={cn(
            'text-sm opacity-60',
            title === 'Water' && 'text-white opacity-80'
          )}
        >
          {footerText[1]}
        </span>
      </div>
    </div>
  )
}
