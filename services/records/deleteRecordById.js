import getRecords from "./getRecords.js";

const deleteRecordById = (id) => {
    const index = getRecords().findIndex((record) => record.id === id);

    if (index !== -1) {
        getRecords().splice(index, 1);
        return getRecords()[index];
    }
};

export default deleteRecordById;