import { cn } from '@/shared/utils'
import Image from 'next/image'

export function DashboardShoppingItem({
  item,
  checked,
  onToggle
}: {
  item: ICartItem
  checked: boolean
  onToggle: () => void
}) {
  return (
    <label
      className="flex cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 transition-colors hover:bg-gray-100"
      onClick={onToggle}
    >
      <div
        className={cn(
          'flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border-2 transition-colors',
          checked ? 'border-green-500 bg-green-500' : 'border-gray-300 bg-white'
        )}
      >
        {checked && (
          <svg
            className="h-3.5 w-3.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>

      <div className="flex min-w-0 flex-1 items-center">
        <Image
          src={`/images/ingredients/${item.iconUrl}`}
          alt={item.name}
          width={32}
          height={32}
          className="mr-2 rounded-full object-cover"
          draggable={false}
        />
        <span className={cn('text-[1.05rem] font-medium')}>{item.name}</span>
      </div>

      <span className="shrink-0 text-[0.9rem] font-medium text-gray-500 lowercase">
        {item.quantity}
        {item.unit ? ` ${item.unit}` : ''}
      </span>
    </label>
  )
}
