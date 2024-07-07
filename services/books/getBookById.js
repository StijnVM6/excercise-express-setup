import getBooks from "./getBooks.js";

const getBookById = (id) => {
    return getBooks().find(book => book.id === id);
};

export default getBookById;