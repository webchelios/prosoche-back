import { NoteEntity } from "../../entities/note.entity";
import { NotesRepository } from "../../repositories/notes.repository";

export interface GetNotesUseCase {
    execute(): Promise<NoteEntity[]>
}

export class GetNotes implements GetNotesUseCase {
    constructor(
        private readonly repository: NotesRepository
    ) { }

    execute(): Promise<NoteEntity[]> {
        return this.repository.getAll()
    }
}