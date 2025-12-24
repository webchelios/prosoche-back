import { Request, Response } from "express";
import { CreateNote, DeleteNote, GetNote, GetNotes, NotesRepository, UpdateNote } from "../../domain";
import { UpdateNoteDto } from "../../domain/dtos/notes/update-note.dto";

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

        new CreateNote(this.notesRepository)
            .execute({ title, content })
            .then(note => res.json(note))
            .catch(error => res.status(400).json({ error }))

    }

    updateNote = (req: Request, res: Response) => {
        const id = `${req.params.id || ''}`

        const { title, content } = req.body
        if (!title) return res.status(400).json({ error: `Title is required` })
        if (!content) return res.status(400).json({ error: `Content is required` })

        const updateNoteDto = UpdateNoteDto.create({ id, title, content })[1]
        if (!updateNoteDto) {
            return
        }


        new UpdateNote(this.notesRepository)
            .execute(updateNoteDto)
            .then(updatedNote => res.json(updatedNote))

    }

    deleteNote = (req: Request, res: Response) => {
        const id = req.params.id


        new DeleteNote(this.notesRepository)
            .execute(id)
            .then(note => res.json({ message: `Note Deleted` }))
            .catch(error => res.status(500).json({ error }))
    }
}