import recordsData from "../../data/records.json" assert { type: "json" };

const getRecords = (genre, available) => {
    let records = recordsData.records;

    if (genre) {
        records = records.filter((record) => record.genre === genre);
    }

    if (available !== undefined) {
        records = records.filter((record) => record.available === JSON.parse(available));
    }

    return records;
};

export default getRecords;