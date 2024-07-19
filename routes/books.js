import express from 'express';
import getBooks from '../services/books/getBooks.js';
import getBookById from '../services/books/getBookById.js';
import createBook from '../services/books/createBook.js';
import updateBookById from '../services/books/updateBookById.js';
import deleteBookById from '../services/books/deleteBookById.js';
import authMiddleware from '../middleware/advancedAuth.js';
import notFoundErrorHandler from '../middleware/NotFoundErrorHandler.js';

const router = express.Router();

router.get('/', (req, res) => {
    const { genre, available } = req.query;
    const books = getBooks(genre, available);
    res.status(200).json(books);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const book = getBookById(id);
    res.status(200).json(book);
}, notFoundErrorHandler);

router.post("/", authMiddleware, (req, res) => {
    const { title, author, isbn, pages, available, genre } = req.body;
    const newBook = createBook(title, author, isbn, pages, available, genre);
    res.status(201).json(newBook);
});

router.put("/:id", authMiddleware, (req, res) => {
    const { id } = req.params;
    const { title, author, isbn, pages, available, genre } = req.body;
    const book = updateBookById(id, title, author, isbn, pages, available, genre);
    res.status(200).json(book);
}, notFoundErrorHandler);

router.delete("/:id", authMiddleware, (req, res) => {
    const { id } = req.params;
    const deletedBookId = deleteBookById(id);
    res.status(200).json({
        message: `Book with id ${deletedBookId} was deleted!`,
    });
}, notFoundErrorHandler);

export default router;