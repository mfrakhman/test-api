//importing modules
const express = require("express");
const userController = require("../controllers/user.controller");
const { signup, login } = userController;
const userAuth = require("../middleware/user.auth");

const router = express.Router();

//signup endpoint
//passing the middleware function to the signup
router.post("/signup", userAuth.saveUser, signup);

//login route
router.post("/login", login);

module.exports = router;
