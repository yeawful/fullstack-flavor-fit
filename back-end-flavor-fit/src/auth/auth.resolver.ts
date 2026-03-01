import { BadRequestException } from '@nestjs/common'
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import type { IGqlContext } from 'src/app.interface'
import { AuthInput } from './auth.input'
import { AuthResponse } from './auth.interface'
import { AuthService } from './auth.service'
import { VerifyCaptcha } from './decorators/captcha.decorator'

@Resolver()
export class AuthResolver {
	constructor(private authService: AuthService) {}

	@Mutation(() => AuthResponse)
	@VerifyCaptcha()
	async login(@Args('data') input: AuthInput, @Context() { res }: IGqlContext) {
		const { refreshToken, accessToken, ...response } =
			await this.authService.login(input)

		this.authService.toggleAccessTokenCookie(res, accessToken)
		this.authService.toggleRefreshTokenCookie(res, refreshToken)

		return response
	}

	@Mutation(() => AuthResponse)
	@VerifyCaptcha()
	async register(
		@Args('data') input: AuthInput,
		@Context() { res }: IGqlContext
	) {
		const { refreshToken, accessToken, ...response } =
			await this.authService.register(input)

		this.authService.toggleAccessTokenCookie(res, accessToken)
		this.authService.toggleRefreshTokenCookie(res, refreshToken)

		return response
	}

	@Query(() => AuthResponse)
	async newTokens(@Context() { req, res }: IGqlContext) {
		const initialRefreshToken =
			req.cookies?.[this.authService.REFRESH_TOKEN_NAME]

		if (!initialRefreshToken) {
			this.authService.toggleAccessTokenCookie(res, null)
			this.authService.toggleRefreshTokenCookie(res, null)
			throw new BadRequestException('Refresh token is missing')
		}

		const { refreshToken, accessToken, ...response } =
			await this.authService.getNewTokens(initialRefreshToken)

		this.authService.toggleAccessTokenCookie(res, accessToken)
		this.authService.toggleRefreshTokenCookie(res, refreshToken)

		return response
	}

	@Mutation(() => Boolean)
	logout(@Context() { res, req }: IGqlContext) {
		const initialRefreshToken =
			req.cookies?.[this.authService.REFRESH_TOKEN_NAME]

		this.authService.toggleAccessTokenCookie(res, null)
		this.authService.toggleRefreshTokenCookie(res, null)

		if (!initialRefreshToken) {
			throw new BadRequestException('Refresh token is missing')
		}

		return true
	}
}
