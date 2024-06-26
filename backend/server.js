const express = require("express");
const cors = require("cors");
const app = express();
const gymRoutes = require("./routes/gym_routes");
const userRoutes = require("./routes/user_routes");
const connectDb = require("./db/connect");

app.use(cors());
require("dotenv").config();
app.use(express.json());

const startConnection = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startConnection();

app.use("/api/workouts", gymRoutes);
app.use("/api/users", userRoutes);
