import NotFoundError from "../../errors/NotFoundError.js";
import getRecords from "./getRecords.js";

const getRecordsById = (id) => {
    const record = getRecords().find((record) => record.id === id);

    if (!record) {
        throw new NotFoundError("Record", id);
    }

    return record;
};

export default getRecordsById;