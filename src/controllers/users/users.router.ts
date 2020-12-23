import * as restify from 'restify'
import { Router } from '@config/common/router'

class UsersRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get('/users', (req, res, next) => {
      return res.json({
        message: 'Users Router'
      })
    })
  }
}

export const usersRouter = new UsersRouter()
