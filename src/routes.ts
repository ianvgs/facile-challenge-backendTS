import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/registro/:id', UserController.index)
routes.get('/', (req,res)=>{
    res.send("Você acessou o projeto facile-backend, consulte o manual no README para verificar os métodos disponíveis.").status(200)
})
routes.post('/registro/', UserController.store)

export default routes




