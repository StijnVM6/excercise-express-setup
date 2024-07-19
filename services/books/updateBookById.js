// import NotFoundError from "../../errors/notFoundError.js";
import getBookById from "./getBookById.js";

const updateBook = (id, title, author, isbn, pages, available, genre) => {
    const book = getBookById(id);

    book.title = title ?? book.title;
    book.author = author ?? book.author;
    book.isbn = isbn ?? book.isbn;
    book.pages = pages ?? book.pages;
    book.available = available ?? book.available;
    book.genre = genre ?? book.genre;

    return book;
};

export default updateBook;