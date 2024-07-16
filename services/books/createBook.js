import getBooks from "./getBooks.js";
import { v4 as uuid } from 'uuid';

const createBook = (title, author, isbn, pages, available, genre) => {
    // throw new Error('Not implemented!');
    const id = uuid();
    const newBook = {
        id: id,
        title,
        author,
        isbn,
        pages,
        available,
        genre
    };

    getBooks().push(newBook);
    return newBook;
};

export default createBook;