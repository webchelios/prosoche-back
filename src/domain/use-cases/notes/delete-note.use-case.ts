import { NoteEntity } from "../../entities/note.entity";
import { NotesRepository } from "../../repositories/notes.repository";

export interface DeleteNoteUseCase {
    execute(id: string): Promise<NoteEntity>
}

export class DeleteNote implements DeleteNoteUseCase {
    constructor(
        private readonly repository: NotesRepository
    ) { }

    execute(id: string): Promise<NoteEntity> {
        return this.repository.deleteById(id)
    }
}