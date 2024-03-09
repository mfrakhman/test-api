const express = require("express");
const userController = require("../controllers/user.controller");
const { signup, login, allUser, deleteUser, updateUser } = userController;
const userAuth = require("../middleware/user.auth");

const router = express.Router();

router.post("/signup", userAuth.saveUser, signup);

router.post("/login", login);

router.get("/getall", allUser);

router.put("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

module.exports = router;
