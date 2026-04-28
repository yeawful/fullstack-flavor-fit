import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Role } from 'prisma/generated/enums'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { AdminRecipesService } from './admin-recipes.service'
import { RecipesQueryInput } from './inputs/get-recipes-query.input'
import { RecipeCreateInput } from './inputs/recipe.input'
import { GetAllRecipesModel } from './models/get-all-recipes.model'
import { RecipeModel } from './models/recipe.model'
import { RecipesService } from './recipes.service'

@Resolver()
export class RecipesResolver {
	constructor(
		private readonly recipesService: RecipesService,
		private readonly adminRecipesService: AdminRecipesService
	) {}

	@Query(() => GetAllRecipesModel, {
		name: 'recipes'
	})
	getAll(@Args('input') input: RecipesQueryInput) {
		return this.recipesService.getAll(input)
	}

	@Query(() => RecipeModel, {
		name: 'recipeBySlug'
	})
	getBySlug(@Args('slug') slug: string) {
		return this.recipesService.getBySlug(slug)
	}

	@Query(() => RecipeModel, {
		name: 'randomRecipe'
	})
	getRandom() {
		return this.recipesService.getRandom()
	}

	@Query(() => [RecipeModel], {
		name: 'adminRecipes'
	})
	@Auth(Role.ADMIN)
	getAllAdmin(@Args('input') input: RecipesQueryInput) {
		return this.recipesService.getAll(input)
	}

	@Query(() => RecipeModel, {
		name: 'recipeById'
	})
	@Auth(Role.ADMIN)
	getById(@Args('id') id: string) {
		return this.adminRecipesService.getById(id)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	createRecipe(
		@CurrentUser('id') authorId: string,
		@Args('input') input: RecipeCreateInput
	) {
		return this.adminRecipesService.create(authorId, input)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	updateRecipe(
		@Args('id') id: string,
		@Args('input') input: RecipeCreateInput
	) {
		return this.adminRecipesService.update(id, input)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	deleteRecipeById(@Args('id') id: string) {
		return this.adminRecipesService.deleteById(id)
	}
}
