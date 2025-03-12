const express = require("express");
const connectDB = require("./config/database.js");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes.js");
const errorHandler = require("./utils/errorHandler.js");
const app = express();
dotenv.config();

const PORT = process.eventNames.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cookieParser());


app.use("/api/users" , userRoutes);


app.use(errorHandler)



app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
