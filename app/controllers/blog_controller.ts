import type { HttpContext } from '@adonisjs/core/http'

export default class BlogController {
  async render({ inertia }: HttpContext) {
    return inertia.render('blog')
  }
}
