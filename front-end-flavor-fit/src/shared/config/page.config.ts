class PageConfig {
  readonly HOME = '/'

  readonly DASHBOARD = '/dashboard'

  readonly MEAL_PLANS = this.DASHBOARD + '/meal-plans'
  readonly NUTRITION = this.DASHBOARD + '/nutrition'
  readonly ANALYTICS = this.DASHBOARD + '/analytics'
  readonly ORDER_GROCERIES = this.DASHBOARD + '/order-groceries'
  readonly RECIPES = this.DASHBOARD + '/recipes'
  readonly RECIPE_DETAIL = (slug: string) => this.RECIPES + `/${slug}`
  readonly PROFILE = this.DASHBOARD + '/profile'

  private readonly AUTH = '/auth'
  readonly LOGIN = this.AUTH + '/login'
  readonly REGISTER = this.AUTH + '/register'
  readonly FORGOT_PASSWORD = this.AUTH + '/forgot-password'
}

export const PAGES = new PageConfig()
