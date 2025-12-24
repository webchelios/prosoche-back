import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
        unique: true,
    },
    createdAt: {
        type: Date,
        required: false,
    }
})

export const NoteModel = mongoose.model('Note', noteSchema)