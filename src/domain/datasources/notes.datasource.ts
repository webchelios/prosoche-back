import { CreateNoteDto } from "../dtos/notes/create-note.dto";
import { UpdateNoteDto } from "../dtos/notes/update-note.dto";
import { NoteEntity } from "../entities/note.entity";

export abstract class NotesDatasource {
    abstract create(createNoteDto: CreateNoteDto): Promise<NoteEntity>;
    abstract getAll(): Promise<NoteEntity[]>;
    abstract findById(id: number): Promise<NoteEntity>
    abstract updateById(updateNoteDto: UpdateNoteDto): Promise<NoteEntity>
    abstract deleteById(id: number): Promise<NoteEntity>
}