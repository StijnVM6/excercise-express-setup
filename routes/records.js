import express from "express";
import getRecords from "../services/records/getRecords.js";
import deleteRecordById from "../services/records/deleteRecordById.js";
import getRecordsById from "../services/records/getRecordById.js";
import createRecord from "../services/records/createRecord.js";
import updateRecordById from "../services/records/updateRecordById.js";

const router = express.Router();

router.get("/", (req, res) => {
    try {
        const { genre, available } = req.params;
        const records = getRecords(genre, available);
        res.status(200).json(records);
    } catch (error) {
        console.error(error);
        res.status(500).send("Could not list the records ! ");
    }

});

router.get("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const record = getRecordsById(id);
        res.status(200).json(record);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Could not find the records with ID: ${id} ! `);
    }
});

router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const record = deleteRecordById(id);
        res.status(200).json(record);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Could not delete the record with ID: ${id} ! `);
    }
});

router.post("/", (req, res) => {
    try {
        const { title, artist, year, available, genre } = req.body;
        const newRecord = createRecord(title, artist, year, available, genre);
        res.status(201).json(newRecord);
    } catch (error) {
        console.error(error);
        res.status(500).send("Could not add the new record !");
    }
});

router.put("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const { title, artist, year, available, genre } = req.body;
        const updatedRecord = updateRecordById(id, title, artist, year, available, genre);
        res.status(200).json(updatedRecord);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Could not update record with ID: ${id} !`);
    }
});


export default router;