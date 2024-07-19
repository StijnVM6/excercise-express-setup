import getRecords from "./getRecords.js";
import NotFoundError from "../../errors/NotFoundError.js";

const deleteRecordById = (id) => {
    const index = getRecords().findIndex((record) => record.id === id);

    if (index === -1) {
        throw new NotFoundError("Record", id);
    }

    getRecords().splice(index, 1);
    return getRecords()[index];
};

export default deleteRecordById;