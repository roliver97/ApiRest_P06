const mongoose = require("mongoose");

 const connectDB = async () => {
    try {
      await mongoose.connect(process.env.DB_URL)
      console.log("Se ha realizado con éxito la conexión con la BBDD⚡")
    } catch (error) {
      console.log("Error conectando con la BBDD🪫")
    }
 }

 module.exports = { connectDB };
