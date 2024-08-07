import getRecordById from "../records/getRecordById.js";

const updateRecordById = (id, title, artist, year, available, genre) => {
    let record = getRecordById(id);

    record.title = title ?? record.title;
    record.artist = artist ?? record.artist;
    record.year = year ?? record.year;
    record.available = available ?? record.available;
    record.genre = genre ?? record.genre;

    return record;
};

export default updateRecordById;