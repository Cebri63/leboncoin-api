const express = require("express");
const mongoose = require("mongoose");
const formidable = require("express-formidable");
const cors = require("cors");

// Permet l'accès aux variables d'environnement
require("dotenv").config();

const app = express();
app.use(formidable());
app.use(cors());

// Import des routes
const userRoutes = require("./routes/user");
const offerRoutes = require("./routes/offer");
app.use(userRoutes);
app.use(offerRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(process.env.PORT, () => {
  console.log("Server Started on port " + process.env.PORT);
});
