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

const getAllEquipments = (callback) => {
  const query = "SELECT DISTINCT equipmentId FROM equipment";
  db.query(query, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

const getFilteredValues = (equipmentId, period, callback) => {
  let periodCondition = "";

  switch (period) {
    case "24h":
      periodCondition = "timestamp >= NOW() - INTERVAL 1 DAY";
      break;
    case "48h":
      periodCondition = "timestamp >= NOW() - INTERVAL 2 DAY";
      break;
    case "1sem":
      periodCondition = "timestamp >= NOW() - INTERVAL 1 WEEK";
      break;
    case "1mes":
      periodCondition = "timestamp >= NOW() - INTERVAL 1 MONTH";
      break;
    default:
      periodCondition = "1=1";
  }

  const query = `SELECT value FROM equipment WHERE equipmentId = ? AND ${periodCondition}`;
  db.query(query, [equipmentId], (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

module.exports = { addEquipment, getAllEquipments, getFilteredValues };
