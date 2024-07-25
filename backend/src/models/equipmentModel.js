const db = require("../config/dbConfig");

const addEquipment = (equipment, callback) => {
  const query =
    "INSERT INTO equipment (equipmentId, timestamp, value) VALUES (?, ?, ?)";
  db.query(
    query,
    [equipment.equipmentId, equipment.timestamp, equipment.value],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    }
  );
};

module.exports = { addEquipment };
