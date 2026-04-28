import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { IngredientModel } from 'src/recipes/ingredients/models/ingredient.model'

@ObjectType()
export class OrderItemModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => Int, { defaultValue: 1, nullable: true })
	quantity!: number | null

	@Field(() => String, { nullable: false })
	price!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => IngredientModel, { nullable: false })
	ingredient?: IngredientModel
}
