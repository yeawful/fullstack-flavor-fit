import { Field, Int, ObjectType } from '@nestjs/graphql'
import { RecipeModel } from './recipe.model'

@ObjectType()
export class GetAllRecipesModel {
	@Field(() => [RecipeModel])
	items!: RecipeModel[]

	@Field(() => Boolean)
	hasMore!: boolean

	@Field(() => Int)
	total!: number
}
