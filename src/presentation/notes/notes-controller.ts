import { Request, Response } from "express";


const notes = [{ id: 1, title: 'Titulo', content: 'hola', createdAt: new Date() }, { id: 2, title: 'Titulo2', content: 'adios', createdAt: new Date() }]

export class NotesController {
    constructor() { }

    getNotes = (req: Request, res: Response) => {
        return res.status(200).json(notes)
    }

    getNoteById = (req: Request, res: Response) => {
        const id = +req.params.id
        if (isNaN(id)) return res.status(400).json({ error: `Argument ID is not a number` })

        const note = notes.find((note) => {
            return note.id === id
        })
        if (note) {
            res.status(200).json(note)
        } else {
            res.status(404).json(`Note with ID: ${id} not found`)
        }


    }

    createNote = (req: Request, res: Response) => {
        const { title, content } = req.body
        if (!title) return res.status(400).json({ error: `Title is required` })
        if (!content) return res.status(400).json({ error: `Content is required` })

        const newNote = {
            id: notes.length + 1,
            title,
            content,
            createdAt: new Date()
        }

        notes.push(newNote)

        res.json(newNote)
    }

    updateNote = (req: Request, res: Response) => {
        const id = +req.params.id


        const note = notes.find((note) => {
            return note.id === id
        })
        if (!note) {
            return res.status(404).json(`Note with ID: ${id} not found`)
        }

        const { title, content, createdAt } = req.body
        if (!title || !content || !createdAt) return res.status(400).json({ error: `Title, content or createdAt are required` })

        note.title = title || note.title
        note.content = content || note.content
        note.createdAt = new Date(createdAt || note.createdAt)


        res.json(note)
    }

    deleteNote = (req: Request, res: Response) => {
        const id = +req.params.id


        const note = notes.find((note) => {
            return note.id === id
        })
        if (!note) {
            return res.status(404).json(`Note with ID: ${id} not found`)
        }

        notes.splice(notes.indexOf(note), 1)

        res.json(notes)
    }
}