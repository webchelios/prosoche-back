import { CustomError } from "../errors/custom.error"

export class NoteEntity {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public createdAt?: Date,

    ) { }

    public fromObject(object: { [key: string]: any }) {
        const { id, _id, title, content, createdAt } = object

        if (!id || !_id) throw CustomError.badRequest('Missing id or _id')
        if (!title) throw CustomError.badRequest('Missing title')
        if (!content) throw CustomError.badRequest('Missing content')

        return new NoteEntity(id, title, content, createdAt)
    }
}