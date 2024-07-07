import getRecords from "./getRecords.js";

const getRecordsById = (id) => {
    return getRecords().find((record) => record.id === id);
};

export default getRecordsById;