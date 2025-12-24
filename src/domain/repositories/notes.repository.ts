import { CreateNoteDto } from "../dtos/notes/create-note.dto";
import { UpdateNoteDto } from "../dtos/notes/update-note.dto";
import { NoteEntity } from "../entities/note.entity";

export abstract class NotesRepository {
    public abstract create(createNoteDto: CreateNoteDto): Promise<NoteEntity>;
    public abstract getAll(): Promise<NoteEntity[]>;
    public abstract findById(id: string): Promise<NoteEntity>
    public abstract updateById(updateNoteDto: UpdateNoteDto): Promise<NoteEntity>
    public abstract deleteById(id: string): Promise<NoteEntity>
}