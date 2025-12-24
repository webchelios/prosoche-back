import { Router } from "express"
import { NotesController } from "./notes-controller"


export class NotesRouter {
    static get routes(): Router {
        const router = Router()

        const controller = new NotesController()

        router.get('/', controller.getNotes)
        router.get('/:id', controller.getNoteById)

        router.post('/', controller.createNote)

        router.put('/:id', controller.createNote)
        router.delete('/:id', controller.deleteNote)

        return router
    }
}