//express is used to start the server
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

//process .env is used to get secure code from .env
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());

//middleware
app.use((req, res, next) => {
  console.log("path" + req.path + "method" + req.method);
  next();
});

//port is running on 5000
/* app.listen(PORT, () => {
  console.log(`server is run server ${PORT}`);
}) */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`DB connected successfully to ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/tasks", taskRoutes);
