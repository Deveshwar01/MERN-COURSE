import { Library } from "../models/library.js";


//  Here i am implementing CURD operations like addbook ,Updatebook,removebook and findbook
export const addBook = async (req, res) => {
    const { id, bookName, authorName, isBorrowed } = req.body;
    await Library.create({
        id,
        bookName,
        authorName,
        isBorrowed
    })
    res.status(201).json({
        success: true,
        message: 'book added Successfully'
    })

}

export const updateBook = async (req, res) => {
    const bookId = req.params.id;
    const { bookName, authorName } = req.body;
    const updatedBook = await Library.findOneAndUpdate(
        { id: bookId },
        { $set: { bookName, authorName } },
        { new: true }
    );

    if (updatedBook) {
        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: updatedBook
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }

};

export const removeBook = async (req, res) => {
    const bookId = req.params.id;

    const deleteBook = await Library.findOneAndDelete({ id: bookId })
    if (deleteBook) {
        res.status(200).json({
            success: true,
            message: 'book removed successfully'
        })
    }
    else {
        res.status(404).json({
            success: false,
            message: 'book not found'
        })
    }

}

export const findBook = async (req, res) => {
    const userId = req.params.id;
    try {
        const findingBook = await Library.findById({ _id: userId });
        return res.status(201).json({
            success: true,
            message: "book find sucessfully"
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

export const displayAllBook = async (req, res) => {
    try {
        const allBooks = await Library.find();

        res.status(200).json({
            success: true,
            data: allBooks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}