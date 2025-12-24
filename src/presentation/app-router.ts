import { Router } from "express";
import { AuthRouter } from "./auth/auth-router";
import { NotesRouter } from "./notes/notes-router";

export class AppRouter {
    static get routes(): Router {
        const router = Router()

        router.use('/api/auth', AuthRouter.routes)
        router.use('/api/notes', NotesRouter.routes)

        return router
    }
}