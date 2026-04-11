import { Field, InputType, Int } from '@nestjs/graphql'

import {
	Cuisine,
	DietaryPreference,
	Difficulty,
	HealthGoal,
	MealType,
	SpecialOccasion
} from '../recipe.enum'
import { NutritionFactUpdateInput } from './nutrition-fact.input'
import { RecipeIngredientInput } from './recipe-ingredients.input'
import { RecipeStepInput } from './step.input'

@InputType()
export class RecipeCreateInput {
	@Field(() => String, { nullable: false })
	slug!: string

	@Field(() => String, { nullable: false })
	title!: string

	@Field(() => String, { nullable: false })
	description!: string

	@Field(() => String, { nullable: false })
	image!: string

	@Field(() => Int, { nullable: false })
	calories!: number

	@Field(() => Int, { nullable: false })
	cookingTime!: number

	@Field(() => Difficulty, { nullable: false })
	difficulty!: `${Difficulty}`

	@Field(() => MealType, { nullable: false })
	mealType!: `${MealType}`

	@Field(() => DietaryPreference, { nullable: false })
	dietaryPreference!: `${DietaryPreference}`

	@Field(() => HealthGoal, { nullable: false })
	healthGoal!: `${HealthGoal}`

	@Field(() => Cuisine, { nullable: false })
	cuisine!: `${Cuisine}`

	@Field(() => SpecialOccasion, { nullable: false })
	specialOccasion!: `${SpecialOccasion}`

	@Field(() => NutritionFactUpdateInput, {
		nullable: true
	})
	nutritionFact?: NutritionFactUpdateInput

	@Field(() => String, { nullable: true })
	tags?: string[]

	@Field(() => [RecipeStepInput], { nullable: true })
	recipeSteps?: RecipeStepInput[]

	@Field(() => [RecipeIngredientInput], {
		nullable: true
	})
	ingredients?: RecipeIngredientInput[]
}
