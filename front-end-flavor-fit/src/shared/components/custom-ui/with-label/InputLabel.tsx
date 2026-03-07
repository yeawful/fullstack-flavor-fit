import { cn } from '@/shared/utils'
import { LucideIcon } from 'lucide-react'
import { ComponentProps } from 'react'

import { Input } from '../../ui/input'
import { LabelIcon } from './LabelIcon'

interface Props extends ComponentProps<'input'> {
  label: string
  Icon: LucideIcon
}

export function InputLabel({ label, Icon, className, ...props }: Props) {
  return (
    <label className="relative block">
      <LabelIcon
        label={label}
        Icon={Icon}
      />

      <Input
        className={cn(className, 'rounded-xl bg-[#ececec] pl-9')}
        {...props}
      />
    </label>
  )
}
