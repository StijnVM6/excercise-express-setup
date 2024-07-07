import getBooks from "./getBooks.js";

const deleteBook = (id) => {
    const index = getBooks().findIndex(book => book.id === id);

    if (index === -1) {
        return null;
    } else {
        getBooks().splice(index, 1);
        return id;
    }
};

export default deleteBook;