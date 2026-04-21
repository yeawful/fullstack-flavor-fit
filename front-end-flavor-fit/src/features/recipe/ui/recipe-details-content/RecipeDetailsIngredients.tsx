import Image from 'next/image'

import { GetRecipeBySlugQuery } from '@/__generated__/graphql'

interface Props {
  recipeIngredients?: GetRecipeBySlugQuery['recipeBySlug']['recipeIngredients']
}

export function RecipeDetailsIngredients({ recipeIngredients }: Props) {
  return (
    <div className="mt-5">
      <div className="mb-2 font-semibold">Ingredients:</div>

      <ul className="flex flex-wrap items-center gap-2.5">
        {recipeIngredients?.map(rI => (
          <li
            key={rI.ingredient.id}
            className="border-border flex h-18.5 w-18.5 flex-col items-center rounded-xl border"
          >
            <Image
              src={`/images/ingredients/${rI.ingredient.iconUrl}`}
              alt={rI.ingredient.name}
              width={43}
              height={43}
            />
            <span className="text-[0.8rem] lowercase opacity-65">
              {rI.quantity} {rI.unit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
