const express = require("express");
const sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const db = require("./models");
const userRoute = require("./routes/user.router");
const productRoute = require("./routes/product.router");

const PORT = process.env.PORT || 5000;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

db.sequelize.sync({ force: true }).then(() => {
  console.log("db has been re sync");
});

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
