const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(express.json());

app.post("/qr-code", (req, res) => {
  const { link, color } = req.body.data;
});

app.listen(3001, () => {
  console.log("Express server running on port 3001");
});
