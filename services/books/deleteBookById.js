import getBooks from "./getBooks.js";
import NotFoundError from "../../errors/NotFoundError.js";

const deleteBook = (id) => {
    const index = getBooks().findIndex(book => book.id === id);

    if (index === -1) {
        throw new NotFoundError("Book", id);
    }

    getBooks().splice(index, 1);
    return id;
};

export default deleteBook;