const express = require("express");
const { postEquipment, fetchAllEquipments, fetchFilteredValues } = require("../controllers/equipmentController");

const router = express.Router();

router.post("/equipment", postEquipment);
router.get("/equipments", fetchAllEquipments);
router.get("/equipment/values", fetchFilteredValues);

module.exports = router;
