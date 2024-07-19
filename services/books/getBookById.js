import getBooks from "./getBooks.js";
import NotFoundError from "../../errors/NotFoundError.js";

const getBookById = (id) => {
    const book = getBooks().find(book => book.id === id);

    if (!book) {
        throw new NotFoundError("Book", id);
    }

    return book;
};

export default getBookById;