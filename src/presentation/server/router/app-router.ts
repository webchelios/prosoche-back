import { Router } from "express";

export class AppRouter {
    static routes(): Router {
        const routes = Router()

        routes.get("/", (req, res) => {
            res.send("Hola")
        })

        return routes
    }
}