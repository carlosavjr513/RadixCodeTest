const { addEquipment } = require("../models/equipmentModel");

const postEquipment = (req, res) => {
  const equipment = req.body;

  if (!equipment.equipmentId || !equipment.timestamp || !equipment.value) {
    return res.status(400).json({ error: "Invalid input" });
  }

  addEquipment(equipment, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "Equipment data saved successfully" });
  });
};

module.exports = { postEquipment };
