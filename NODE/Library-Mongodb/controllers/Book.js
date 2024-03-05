import { Library } from "../models/library.js";



// this is my controllers of borrow books and return books
export const borrowBook = async (req, res) => {
    const bookId = req.params.id;
    const book = await Library.findOne({ id: bookId });

    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }

    if (book.isBorrowed === true) {
        return res.status(400).json({
            success: false,
            message: 'Book is already borrowed'
        });
    }

    // Updating the book status
    book.isBorrowed = true;
    // Save the updated book in the database
    await book.save();
    return res.status(200).json({
        success: true,
        message: 'Book borrowed successfully'
    });
}
export const returnBook = async (req, res) => {
    const bookId = req.params.id;
    const book = await Library.findOne({ id: bookId });

    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }

    if (book.isBorrowed === true) {
        book.isBorrowed = false;
        // Save the updated book in the database
        await book.save();
        res.status(200).json({
            success: true,
            message: 'Book returned successfully'
        });
    }

    return res.status(404).json({
        success: false,
        message: 'Book isnt borrowed successfully'
    });

}