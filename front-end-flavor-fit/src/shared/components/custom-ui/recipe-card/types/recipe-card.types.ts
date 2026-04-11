import { VariantProps } from 'class-variance-authority'

import { recipeCardVariants } from '../styles/recipe-card.styles'

export type TRecipeCardSize = VariantProps<typeof recipeCardVariants>['size']
