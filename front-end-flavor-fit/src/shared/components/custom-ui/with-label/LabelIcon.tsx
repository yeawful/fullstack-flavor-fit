import { LucideIcon } from 'lucide-react'

interface Props {
  label: string
  Icon: LucideIcon
}

export function LabelIcon({ label, Icon }: Props) {
  return (
    <>
      <span className="mb-1.5 block text-sm opacity-50">{label}</span>
      <Icon
        size={17}
        className="absolute bottom-2.5 left-3 opacity-50"
      />
    </>
  )
}
