import { CookingPot } from 'lucide-react'
import Image from 'next/image'

import { GetRecipeBySlugQuery } from '@/__generated__/graphql'

interface Props {
  steps: GetRecipeBySlugQuery['recipeBySlug']['recipeSteps']
}

export function RecipeDetailsSteps({ steps }: Props) {
  return (
    <div className="mt-8">
      <div className={`mb-3 flex items-center`}>
        <CookingPot className="mr-1.5 opacity-70" />
        <h2 className="text-lg font-semibold text-[#222222]">
          Step-by-step preparation instructions:
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {steps?.map((step, index) => (
          <div key={step?.id}>
            <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={step?.image || ''}
                alt={step?.title || ''}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>

            <h3 className="text-sm font-semibold text-[#222222] opacity-60">
              Step {index + 1} of {steps.length}
            </h3>
            <h4 className="text-md font-semibold text-[#222222]">
              {step?.title}
            </h4>
            <p className="text-sm text-[#555555]">{step?.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
