import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { hash, verify } from 'argon2'
import { Response } from 'express'
import { EmailService } from 'src/email/email.service'
import { PrismaService } from 'src/prisma/prisma.service'
import { UsersService } from 'src/users/users.service'
import { generateToken } from 'src/utils/generate-token.util'
import { isDev } from 'src/utils/is-dev.util'
import { TAuthTokerData } from './auth.interface'
import { AuthInput } from './inputs/auth.input'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private configService: ConfigService,
		private jwt: JwtService,
		private usersService: UsersService,
		private emailService: EmailService
	) {}

	private readonly EXPIRE_HOURS_ACCESS_TOKEN = 1
	readonly ACCESS_TOKEN_NAME = 'accessToken' as const

	private readonly EXPIRE_DAYS_REFRESH_TOKEN = 3
	readonly REFRESH_TOKEN_NAME = 'refreshToken' as const

	async register(input: AuthInput) {
		try {
			const email = input.email.toLowerCase()
			const existingUser = await this.prisma.user.findFirst({
				where: {
					email: {
						equals: email,
						mode: 'insensitive'
					}
				}
			})

			if (existingUser) {
				throw new BadRequestException('User with this email already exist')
			}

			const emailVerificationToken = generateToken()

			const user = await this.prisma.user.create({
				data: {
					email: email,
					password: await hash(input.password),
					emailVerificationToken,
					emailVerificationTokenExpiresAt: new Date(Date.now() + 1000 * 60 * 60)
				},
				include: {
					profile: true
				}
			})

			const tokens = this.generateTokens({
				id: user.id,
				role: user.role
			})

			const verificationUrl = `${this.configService.get(
				'CLIENT_URL'
			)}/verify-email?token=${emailVerificationToken}`

			await this.emailService.sendVerificationEmail(user.email, verificationUrl)

			return { user, ...tokens }
		} catch (error) {
			throw new BadRequestException('Registation failed' + error)
		}
	}

	async login(input: AuthInput) {
		const user = await this.validateUser(input)

		const tokens = this.generateTokens({
			id: user.id,
			role: user.role
		})

		return { user, ...tokens }
	}

	async getNewTokens(refreshToken: string) {
		const result =
			await this.jwt.verifyAsync<Pick<TAuthTokerData, 'id'>>(refreshToken)
		if (!result) {
			throw new BadRequestException('Invalid refresh token')
		}

		const user = await this.usersService.findById(result.id)

		if (!user) {
			throw new NotFoundException('User not found')
		}

		const tokens = this.generateTokens({
			id: user.id,
			role: user.role
		})

		return {
			user,
			...tokens
		}
	}

	private async validateUser(input: AuthInput) {
		const email = input.email

		const user = await this.usersService.findByEmail(email)

		if (!user) {
			throw new NotFoundException('Invalid email or password')
		}

		const isPasswordValid = await verify(user.password, input.password)

		if (!isPasswordValid) {
			throw new NotFoundException('Invalid email or password')
		}

		return user
	}

	private generateTokens(data: TAuthTokerData) {
		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h'
		})

		const refreshToken = this.jwt.sign(
			{
				id: data.id
			},
			{
				expiresIn: `${this.EXPIRE_DAYS_REFRESH_TOKEN}d`
			}
		)

		return { accessToken, refreshToken }
	}

	toggleAccessTokenCookie(res: Response, token: string | null) {
		this.toggleAuthTokenCookie({
			response: res,
			name: this.ACCESS_TOKEN_NAME,
			token,
			expires: new Date(Date.now() + this.EXPIRE_HOURS_ACCESS_TOKEN * 3600000)
		})
	}

	toggleRefreshTokenCookie(res: Response, token: string | null) {
		this.toggleAuthTokenCookie({
			response: res,
			name: this.REFRESH_TOKEN_NAME,
			token,
			expires: new Date(
				Date.now() + this.EXPIRE_DAYS_REFRESH_TOKEN * 24 * 60 * 60 * 1000
			)
		})
	}

	private toggleAuthTokenCookie({
		expires,
		name,
		token,
		response
	}: {
		response: Response
		name: AuthService['ACCESS_TOKEN_NAME'] | AuthService['REFRESH_TOKEN_NAME']
		token: string | null
		expires: Date
	}) {
		const isRemoveCookie = !token

		const expiresIn = isRemoveCookie ? new Date(0) : expires

		response.cookie(name, token || '', {
			httpOnly: true,
			domain: 'localhost',
			expires: expiresIn,
			sameSite: isDev(this.configService) ? 'none' : 'strict',
			secure: true
		})
	}
}
