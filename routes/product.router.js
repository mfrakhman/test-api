const express = require("express");
const productController = require("../controllers/product.controller");
const { addProduct, getProduct, getProductById, updateProduct, deleteProduct } =
  productController;

const router = express.Router();

router.post("/add", addProduct);

router.get("/getall", getProduct);

router.get("/getbyid/:id", getProductById);

router.put("/update/:id", updateProduct);

router.delete("/delete/:id", deleteProduct);
module.exports = router;
