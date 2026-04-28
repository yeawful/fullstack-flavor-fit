class PageConfig {
  readonly HOME = '/'

  readonly DASHBOARD = '/dashboard'

  readonly MEAL_PLANS = this.DASHBOARD + '/meal-plans'
  readonly NUTRITION = this.DASHBOARD + '/nutrition'
  readonly ANALYTICS = this.DASHBOARD + '/analytics'

  readonly MY_ORDERS = this.DASHBOARD + '/my-orders'
  readonly ORDER_DETAIL = (orderId: string) => this.MY_ORDERS + `/${orderId}`
  readonly PAYMENT = this.DASHBOARD + '/payment'

  readonly RECIPES = this.DASHBOARD + '/recipes'
  readonly RECIPE_DETAIL = (slug: string) => this.RECIPES + `/${slug}`

  readonly PROFILE = this.DASHBOARD + '/profile'

  private readonly AUTH = '/auth'
  readonly LOGIN = this.AUTH + '/login'
  readonly REGISTER = this.AUTH + '/register'
  readonly FORGOT_PASSWORD = this.AUTH + '/forgot-password'
}

export const PAGES = new PageConfig()
