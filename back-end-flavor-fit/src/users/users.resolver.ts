import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Role } from 'prisma/generated/enums'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { UserUpdateCustomInput } from './inputs/user-update.input'
import { UserModel } from './models/user.model'
import { UsersService } from './users.service'

@Resolver()
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => UserModel, { name: 'profile' })
	@Auth()
	getProfile(@CurrentUser('id') id: string) {
		return this.usersService.findById(id)
	}

	@Mutation(() => UserModel)
	@Auth()
	updateProfile(
		@CurrentUser('id') id: string,
		@Args('data') input: UserUpdateCustomInput
	) {
		return this.usersService.updateProfile(id, input)
	}

	// Test
	@Query(() => [UserModel], { name: 'users' })
	@Auth(Role.ADMIN)
	async getUsers() {
		return this.usersService.findAll()
	}
}
