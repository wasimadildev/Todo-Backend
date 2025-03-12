const express = require("express");
const connectDB = require("./config/database.js");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.eventNames.PORT || 3000;

connectDB();

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
