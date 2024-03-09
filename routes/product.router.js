const express = require("express");
const productController = require("../controllers/product.controller");
const {
  addProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getByCategory,
} = productController;

const router = express.Router();

router.post("/add", addProduct);

router.get("/getall", getProduct);

router.get("/getbyid/:id", getProductById);

router.put("/update/:id", updateProduct);

router.delete("/delete/:id", deleteProduct);

router.get("/filterbycategory/:category", getByCategory);

module.exports = router;
