import { NoteEntity } from "../../entities/note.entity";
import { NotesRepository } from "../../repositories/notes.repository";

export interface GetNoteUseCase {
    execute(id: string): Promise<NoteEntity>
}

export class GetNote implements GetNoteUseCase {
    constructor(
        private readonly repository: NotesRepository
    ) { }

    execute(id: string): Promise<NoteEntity> {
        return this.repository.findById(id)
    }
}