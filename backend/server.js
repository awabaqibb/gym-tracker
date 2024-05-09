const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gym Activities" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
