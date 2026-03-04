import { BadRequestException } from '@nestjs/common'
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import type { IGqlContext } from 'src/app.interface'
import { AuthAccountService } from './auth-account.service'
import { AuthResponse } from './auth.interface'
import { AuthService } from './auth.service'
import { VerifyCaptcha } from './decorators/captcha.decorator'
import { AuthInput } from './inputs/auth.input'
import { RequestPasswordResetInput } from './inputs/reset-password-request.input'
import { ResetPasswordInput } from './inputs/reset-password.input'

@Resolver()
export class AuthResolver {
	constructor(
		private authService: AuthService,
		private authAccountService: AuthAccountService
	) {}

	@Mutation(() => AuthResponse)
	@VerifyCaptcha()
	async login(
		@Args('data', { type: () => AuthInput }) input: AuthInput,
		@Context() { res }: IGqlContext
	) {
		const { refreshToken, accessToken, ...response } =
			await this.authService.login(input)

		this.authService.toggleAccessTokenCookie(res, accessToken)
		this.authService.toggleRefreshTokenCookie(res, refreshToken)

		return response
	}

	@Mutation(() => AuthResponse)
	@VerifyCaptcha()
	async register(
		@Args('data', { type: () => AuthInput }) input: AuthInput,
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
	async verifyEmail(@Args('token', { type: () => String }) token: string) {
		return await this.authAccountService.verifyEmail(token)
	}

	@Mutation(() => Boolean)
	@VerifyCaptcha()
	async requestPasswordReset(
		@Args('data', { type: () => RequestPasswordResetInput })
		input: RequestPasswordResetInput
	) {
		return this.authAccountService.requestPasswordReset(input.email)
	}

	@Mutation(() => Boolean)
	@VerifyCaptcha()
	async resetPassword(
		@Args('data', { type: () => ResetPasswordInput }) input: ResetPasswordInput
	) {
		return this.authAccountService.resetPassword(input.token, input.newPassword)
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
