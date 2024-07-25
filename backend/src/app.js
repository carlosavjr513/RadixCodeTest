const express = require("express");
const bodyParser = require("body-parser");
const equipmentRoutes = require("./routes/equipmentRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api", equipmentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
