import { Router } from "express"
import { NotesController } from "./notes-controller"
import { NotesDatasourceImpl } from "../../infrastructure/datasources/notes.datasource.impl"
import { NotesRepositoryImpl } from "../../infrastructure/repositories/notes.repository.impl"


export class NotesRouter {
    static get routes(): Router {
        const router = Router()

        const datasource = new NotesDatasourceImpl()
        const repository = new NotesRepositoryImpl(datasource)
        const controller = new NotesController(repository)

        router.get('/', controller.getNotes)
        router.get('/:id', controller.getNoteById)

        router.post('/', controller.createNote)

        router.put('/:id', controller.updateNote)
        router.delete('/:id', controller.deleteNote)

        return router
    }
}