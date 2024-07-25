const express = require("express");
const { postEquipment } = require("../controllers/equipmentController");

const router = express.Router();

router.post("/equipment", postEquipment);

module.exports = router;
