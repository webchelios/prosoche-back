import { Request, Response } from "express";
import { CreateNote, GetNote, GetNotes, NotesRepository } from "../../domain";

export class NotesController {
    constructor(

        private readonly notesRepository: NotesRepository
    ) { }

    getNotes = (req: Request, res: Response) => {
        new GetNotes(this.notesRepository)
            .execute()
            .then(notes => res.json(notes))
            .catch(error => res.status(400).json({ error }))
    }

    getNoteById = (req: Request, res: Response) => {
        const id = req.params.id

        new GetNote(this.notesRepository)
            .execute(id)
            .then(note => res.json(note))
            .catch(error => res.status(400).json({ error }))

    }

    createNote = (req: Request, res: Response) => {
        const { title, content } = req.body
        if (!title) return res.status(400).json({ error: `Title is required` })
        if (!content) return res.status(400).json({ error: `Content is required` })

        new CreateNote(title)

    }

    updateNote = (req: Request, res: Response) => {
        const id = +req.params.id



    }

    deleteNote = (req: Request, res: Response) => {
        const id = +req.params.id


    }
}