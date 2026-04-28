import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { OrderStatus } from './enums'
import { OrderCreateInput } from './inputs/order.input'

@Injectable()
export class OrdersService {
	constructor(private readonly prisma: PrismaService) {}

	async getAllByUserId(userId: string) {
		const orders = await this.prisma.order.findMany({
			where: { userId },
			orderBy: { createdAt: 'desc' },
			include: {
				items: {
					include: {
						ingredient: true
					}
				}
			}
		})

		return orders.map(order => ({
			...order,
			total: Number(order.total)
		}))
	}

	async getByOrderId(orderId: string) {
		const order = await this.prisma.order.findUnique({
			where: { orderId },
			include: {
				items: {
					include: {
						ingredient: true
					}
				}
			}
		})

		if (!order) {
			throw new NotFoundException('Order not found')
		}

		return order
	}

	async makeOrder(userId: string, input: OrderCreateInput) {
		if (!input.items.length) {
			throw new BadRequestException('Order must contain at least one item')
		}

		const generatedOrderId = Math.random()
			.toString(36)
			.substring(2, 8)
			.toUpperCase()

		const ingredientIds = input.items.map(item => item.ingredientId)

		const ingredients = await this.prisma.ingredient.findMany({
			where: {
				id: { in: ingredientIds }
			}
		})

		const ingredientsMap = new Map(ingredients.map(item => [item.id, item]))

		let total = 0

		const itemsWithPrice = input.items.map(item => {
			const ingredient = ingredientsMap.get(item.ingredientId)

			if (!ingredient) {
				throw new NotFoundException(`Ingredient ${item.ingredientId} not found`)
			}

			const itemPrice = Number(ingredient.price) * item.quantity

			total += itemPrice

			return {
				ingredientId: item.ingredientId,
				quantity: item.quantity,
				price: itemPrice
			}
		})

		return this.prisma.order.create({
			data: {
				orderId: generatedOrderId,
				userId,
				status: OrderStatus.PENDING,
				total,
				items: {
					create: itemsWithPrice
				}
			},
			include: {
				items: {
					include: {
						ingredient: true
					}
				}
			}
		})
	}
}
