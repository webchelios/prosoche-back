import { NoteEntity, NotesDatasource, NotesRepository } from "../../domain";
import { CreateNoteDto } from "../../domain/dtos/notes/create-note.dto";
import { UpdateNoteDto } from "../../domain/dtos/notes/update-note.dto";

export class NotesRepositoryImpl implements NotesRepository {

    constructor(
        private readonly datasource: NotesDatasource,
    ) { }

    create(createNoteDto: CreateNoteDto): Promise<NoteEntity> {
        return this.datasource.create(createNoteDto)
    }
    getAll(): Promise<NoteEntity[]> {
        return this.datasource.getAll()
    }
    findById(id: string): Promise<NoteEntity> {
        return this.datasource.findById(id)
    }
    updateById(updateNoteDto: UpdateNoteDto): Promise<NoteEntity> {
        return this.datasource.updateById(updateNoteDto)
    }
    deleteById(id: string): Promise<NoteEntity> {
        return this.datasource.deleteById(id)
    }

}