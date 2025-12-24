import { NoteEntity, NotesDatasource } from "../../domain";
import { CreateNoteDto } from "../../domain/dtos/notes/create-note.dto";
import { UpdateNoteDto } from "../../domain/dtos/notes/update-note.dto";

const notes = [{ id: 1, title: 'Titulo', content: 'hola', createdAt: new Date() }, { id: 2, title: 'Titulo2', content: 'adios', createdAt: new Date() }]


export class NotesDatasourceImpl implements NotesDatasource {
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