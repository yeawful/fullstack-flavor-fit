import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql'
import {
	Cuisine,
	DietaryPreference,
	HealthGoal,
	MealType,
	SpecialOccasion
} from '../recipe.enum'

enum RecipeSort {
	NEW = 'new',
	RECOMMENDED = 'recommended',
	POPULAR = 'popular'
}

registerEnumType(RecipeSort, {
	name: 'RecipeSort',
	description: 'Sorting options for recipes'
})

@InputType()
export class RecipesQueryInput {
	@Field(() => Int, { defaultValue: 1 })
	page!: number

	@Field(() => Int, { defaultValue: 10 })
	limit!: number

	@Field(() => String, { nullable: true })
	searchTerm?: string

	@Field(() => RecipeSort, { nullable: true, defaultValue: RecipeSort.NEW })
	sort?: RecipeSort

	@Field(() => MealType, { nullable: true })
	mealType?: `${MealType}`

	@Field(() => DietaryPreference, { nullable: true })
	dietaryPreference?: `${DietaryPreference}`

	@Field(() => HealthGoal, { nullable: true })
	healthGoal?: `${HealthGoal}`

	@Field(() => Cuisine, { nullable: true })
	cuisine?: `${Cuisine}`

	@Field(() => SpecialOccasion, { nullable: true })
	specialOccasion?: `${SpecialOccasion}`
}
