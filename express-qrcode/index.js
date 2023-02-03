const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.post("/qr-code", (req, res) => {
  const data = req.body;

  res.json({ success: true });
});

app.listen(3001, () => {
  console.log("Express server running on port 3001");
});
