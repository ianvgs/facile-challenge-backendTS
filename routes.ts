import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/registro/:id', UserController.index)
routes.post('/registro/', UserController.store)

export default routes
