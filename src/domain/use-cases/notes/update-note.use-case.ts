import { UpdateNoteDto } from "../../dtos/notes/update-note.dto";
import { NoteEntity } from "../../entities/note.entity";
import { NotesRepository } from "../../repositories/notes.repository";

export interface UpdateNoteUseCase {
    execute(dto: UpdateNoteDto): Promise<NoteEntity>
}

export class UpdateNote implements UpdateNoteUseCase {
    constructor(
        private readonly repository: NotesRepository
    ) { }

    execute(dto: UpdateNoteDto): Promise<NoteEntity> {
        return this.repository.updateById(dto)
    }
}