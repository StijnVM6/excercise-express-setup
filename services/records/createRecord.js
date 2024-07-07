import getRecordsById from "./getRecordById.js";
import getRecords from "./getRecords.js";
import { v4 as uuid } from "uuid";

const createRecord = (title, artist, year, available, genre) => {
    const id = uuid();
    const newRecord = {
        id: id,
        title,
        artist,
        year,
        available,
        genre
    };
    getRecords().push(newRecord);
    return getRecordsById(id);
};

export default createRecord;