import { RecipeDetailsComments } from './ui/RecipeDetailsComments'
import { RecipeDetailsContent } from './ui/recipe-details-content/RecipeDetailsContent'

export function RecipeDetails() {
  return (
    <div className="grid grid-cols-[1fr_minmax(300px,.25fr)] gap-5">
      <RecipeDetailsContent />
      <RecipeDetailsComments />
    </div>
  )
}
