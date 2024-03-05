import mongoose from "mongoose";


const schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    bookName: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    }
})

export const Library = mongoose.model('library', schema)