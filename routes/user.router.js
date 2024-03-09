//importing modules
const express = require("express");
const userController = require("../controllers/user.controller");
const { signup, login, allUser, deleteUser, updateUser } = userController;
const userAuth = require("../middleware/user.auth");

const router = express.Router();

//signup endpoint
//passing the middleware function to the signup
router.post("/signup", userAuth.saveUser, signup);

//login route
router.post("/login", login);

//getAll route
router.get("/user", allUser);

//update user
router.put("/update/:id", updateUser);

//delete user
router.delete("/delete/:id", deleteUser);

module.exports = router;
