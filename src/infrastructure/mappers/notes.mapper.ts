import { CustomError, NoteEntity, UserEntity } from "../../domain";

export class NotesMapper {


    static noteEntityFromObject(object: { [key: string]: any }): NoteEntity {

        const { id, _id, title, content } = object

        if (!id || !_id) throw CustomError.badRequest('Missing id or _id')
        if (!title) throw CustomError.badRequest('Missing title')
        if (!content) throw CustomError.badRequest('Missing content')


        return new NoteEntity(_id || id, title, content)

    }
}