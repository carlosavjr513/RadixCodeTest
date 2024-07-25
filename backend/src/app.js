const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const equipmentRoute = require("./routes/equipmentRoute");
const uploadRoute = require("./routes/uploadRoute");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.json());
app.use("/api", equipmentRoute);
app.use("/api/upload", uploadRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
