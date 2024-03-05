import mongoose from "mongoose";

//  This schema is for my library 
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
    },
    isBorrowed: {
        type: Boolean,
        default: false,
    }
})

// here i am giving my schema name library
export const Library = mongoose.model('library', schema)