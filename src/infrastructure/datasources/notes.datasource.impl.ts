import { NoteModel } from "../../data";
import { CustomError, NoteEntity, NotesDatasource } from "../../domain";
import { CreateNoteDto } from "../../domain/dtos/notes/create-note.dto";
import { UpdateNoteDto } from "../../domain/dtos/notes/update-note.dto";
import { NotesMapper } from "../mappers/notes.mapper";

export class NotesDatasourceImpl implements NotesDatasource {
    async create(createNoteDto: CreateNoteDto): Promise<NoteEntity> {
        const note = await NoteModel.create(createNoteDto)
        return NotesMapper.noteEntityFromObject(note)
    }

    async getAll(): Promise<NoteEntity[]> {
        const notes = await NoteModel.find()
        return notes.map((note) =>
            NotesMapper.noteEntityFromObject(note)
        )
    }

    async findById(id: string): Promise<NoteEntity> {
        const note = await NoteModel.findById(id)
        if (!note) throw CustomError.notFound("Note not found")
        return NotesMapper.noteEntityFromObject(note)
    }

    async updateById(updateNoteDto: UpdateNoteDto): Promise<NoteEntity> {
        const note = await NoteModel.findByIdAndUpdate(
            updateNoteDto.id,
            {
                title: updateNoteDto.title,
                content: updateNoteDto.content,
            },
            { new: true }
        )

        if (!note) throw CustomError.notFound("Note not found")
        return NotesMapper.noteEntityFromObject(note)
    }

    async deleteById(id: string): Promise<NoteEntity> {
        const note = await NoteModel.findByIdAndDelete(id);
        if (!note) throw CustomError.notFound("Note not found");
        return NotesMapper.noteEntityFromObject(note);
    }

}