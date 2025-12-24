import { NoteEntity, NotesRepository } from "../../domain";
import { CreateNoteDto } from "../../domain/dtos/notes/create-note.dto";
import { UpdateNoteDto } from "../../domain/dtos/notes/update-note.dto";

export class NotesRepositoryImpl implements NotesRepository {
    create(createNoteDto: CreateNoteDto): Promise<NoteEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<NoteEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<NoteEntity> {
        throw new Error("Method not implemented.");
    }
    updateById(updateNoteDto: UpdateNoteDto): Promise<NoteEntity> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: number): Promise<NoteEntity> {
        throw new Error("Method not implemented.");
    }

}