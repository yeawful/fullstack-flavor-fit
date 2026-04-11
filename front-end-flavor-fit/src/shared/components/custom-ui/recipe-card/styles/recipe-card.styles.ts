import { cva } from 'class-variance-authority'

export const recipeCardVariants = cva('bg-white rounded-xl', {
  variants: {
    size: {
      default: 'p-4',
      sm: 'p-3.5'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

export const recipeCardBadgeVariants = cva(
  'flex items-center gap-1.5 rounded-md bg-gray-200 font-semibold text-black/70',
  {
    variants: {
      size: {
        default: 'py-1.5 px-3 text-xs',
        sm: 'py-1.5 px-2.5 text-xs'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export const recipeCardTitleVariants = cva(
  'line-clamp-1 font-semibold tracking-tight text-black',
  {
    variants: {
      size: {
        default: 'text-lg',
        sm: 'text-base'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export const recipeCardDescriptionVariants = cva('line-clamp-2 text-black/55', {
  variants: {
    size: {
      default: 'mt-2 text-sm leading-5',
      sm: 'mt-1.5 text-sm leading-4.5'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

export const recipeCardFooterTextVariants = cva(
  'inline-flex items-center gap-1.5 font-medium text-black/45',
  {
    variants: {
      size: {
        default: 'text-sm',
        sm: 'text-sm'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

export const recipeCardDifficultyBadgeVariants = cva(
  'flex items-center gap-1.5 rounded-md px-2.5 py-1 font-semibold',
  {
    variants: {
      tone: {
        EASY: 'bg-emerald-100 text-emerald-600',
        MEDIUM: 'bg-amber-100 text-amber-600',
        HARD: 'bg-red-100 text-red-500'
      },
      size: {
        default: 'text-xs',
        sm: 'text-xs'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)
