import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UserModel } from 'src/users/models/user.model'

@ObjectType()
export class CommentModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	content!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => UserModel, { nullable: false })
	author!: UserModel
}
