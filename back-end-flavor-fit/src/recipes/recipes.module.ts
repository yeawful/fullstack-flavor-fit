import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { AdminRecipesService } from './admin-recipes.service'
import { IngredientsModule } from './ingredients/ingredients.module'
import { ReactionModule } from './reaction/reaction.module'
import './recipe.enum'
import { RecipesResolver } from './recipes.resolver'
import { RecipesService } from './recipes.service'

@Module({
	providers: [RecipesResolver, RecipesService, AdminRecipesService],
	imports: [IngredientsModule, ReactionModule, PrismaModule]
})
export class RecipesModule {}
