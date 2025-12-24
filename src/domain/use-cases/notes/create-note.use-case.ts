import { CreateNoteDto } from "../../dtos/notes/create-note.dto";
import { NoteEntity } from "../../entities/note.entity";
import { NotesRepository } from "../../repositories/notes.repository";

export interface CreateNoteUseCase {
    execute(dto: CreateNoteDto): Promise<NoteEntity>
}

export class CreateNote implements CreateNoteUseCase {
    constructor(
        private readonly repository: NotesRepository
    ) { }

    execute(dto: CreateNoteDto): Promise<NoteEntity> {
        return this.repository.create(dto)
    }
}