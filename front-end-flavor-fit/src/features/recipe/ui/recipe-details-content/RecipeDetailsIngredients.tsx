import Image from 'next/image'

import { GetRecipeBySlugQuery, Unit } from '@/__generated__/graphql'

interface Props {
  recipeIngredients?: GetRecipeBySlugQuery['recipeBySlug']['recipeIngredients']
}

const UNIT_LABEL_MAP = {
  GRAM: 'g',
  MILLILITER: 'ml',
  PIECE: 'piece',
  TEASPOON: 'tsp',
  TABLESPOON: 'tbsp',
  CLOVES: 'cloves'
} as const

type TUnitKey = keyof typeof UNIT_LABEL_MAP

function getUnitLabel(unit?: Unit | null): string {
  if (!unit) return ''

  return UNIT_LABEL_MAP[unit as TUnitKey] ?? unit.toLowerCase()
}

export function RecipeDetailsIngredients({ recipeIngredients }: Props) {
  return (
    <div className="mt-5">
      <div className="mb-2 font-semibold">Ingredients:</div>

      <ul className="flex flex-wrap items-center gap-2.5">
        {recipeIngredients?.map(recipeIngredient => {
          const unitLabel = getUnitLabel(recipeIngredient.unit)

          return (
            <li
              key={recipeIngredient.ingredient.id}
              className="border-border flex h-18.5 w-18.5 flex-col items-center rounded-xl border"
            >
              <Image
                src={`/images/ingredients/${recipeIngredient.ingredient.iconUrl}`}
                alt={recipeIngredient.ingredient.name}
                width={43}
                height={43}
              />

              <span className="text-[0.8rem] opacity-65">
                {recipeIngredient.quantity}
                {unitLabel ? ` ${unitLabel}` : ''}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
