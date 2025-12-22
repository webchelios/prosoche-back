import { Router } from "express"
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure"
import { AuthController } from "./controller"
import { AuthMiddleware } from "../middlewares/auth.middleware"

export class AuthRouter {
    static get routes(): Router {
        const router = Router()
        const database = new AuthDatasourceImpl()
        const authRepository = new AuthRepositoryImpl(database)

        const controller = new AuthController(authRepository)

        router.post('/login', controller.loginUser)
        router.post('/register', controller.registerUser)
        router.get('/', AuthMiddleware.validateJwt, controller.getUsers)

        return router
    }
}