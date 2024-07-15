import express from 'express';
import getBooks from '../services/books/getBooks.js';
import getBookById from '../services/books/getBookById.js';
import createBook from '../services/books/createBook.js';
import updateBookById from '../services/books/updateBookById.js';
import deleteBookById from '../services/books/deleteBookById.js';
import authMiddleware from '../middleware/advancedAuth.js';

const router = express.Router();

router.get('/', (req, res) => {
    try {
        const { genre, available } = req.query;
        const books = getBooks(genre, available);
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong while getting list of books!');
    }
});

router.get("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const book = getBookById(id);

        if (!book) {
            res.status(404).send(`Book with id: ${id} not found.`);
        }
        else {
            res.status(200).json(book);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong while getting the book by Id!");
    }
});

router.post("/", (req, res) => {
    // try {
    const { title, author, isbn, pages, available, genre } = req.body;
    const newBook = createBook(title, author, isbn, pages, available, genre);
    res.status(201).json(newBook);
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send('Something went wrong while creating new book!')
    // }
});

router.put("/:id", authMiddleware, (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, isbn, pages, available, genre } = req.body;
        const book = updateBookById(id, title, author, isbn, pages, available, genre);
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong while updating book by id!");
    }
});

router.delete("/:id", authMiddleware, (req, res) => {
    try {
        const { id } = req.params;
        const deletedBookId = deleteBookById(id);

        if (!deletedBookId) {
            res.status(404).send(`Book with id ${id} was not found!`);
        } else {
            res.status(200).json({
                message: `Book with id ${deletedBookId} was deleted!`,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong while deleting book by id!");
    }
});

export default router;