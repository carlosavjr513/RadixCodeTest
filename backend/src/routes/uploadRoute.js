const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const db = require("../config/dbConfig");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/csv", upload.single("file"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  const results = [];

  fs.createReadStream(file.path)
    .pipe(csv({ separator: ";" }))
    .on("data", (data) => results.push(data))
    .on("end", () => {
      const query = "INSERT INTO equipment (equipmentId, timestamp, value) VALUES ?";
      const values = results.map(row => [row.equipmentId, row.timestamp, row.value]);

      db.query(query, [values], (error, results) => {
        if (error) {
          return res.status(500).send(error);
        }
        res.status(200).send("Data inserted successfully");
      });

      fs.unlinkSync(file.path);
    });
});

module.exports = router;
