const express = require("express");
const productController = require("../controllers/product.controller");
const { addProduct } = productController;

const router = express.Router();

router.post("/add", addProduct);

module.exports = router;
