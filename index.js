const express = require("express");
require("dotenv").config()

const app = express();
const { connectDB } = require("./src/config/db");
const platformsRouter = require("./src/api/routes/platforms");
const showsRouter = require("./src/api/routes/shows");

connectDB();
app.use(express.json());

app.use("/api/v1/platforms", platformsRouter);
app.use("/api/v1/shows", showsRouter);

app.use("/", (req,res,next) => {
  return res.status(404).json("Route not found")
})

app.listen(3000, () => {
  console.log("Servidor levantado: http://localhost:3000")
})