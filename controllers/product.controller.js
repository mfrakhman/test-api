const db = require("../models");

const Product = db.products;

const addProduct = async (req, res) => {
  try {
    const { productname, producttype, productprice } = req.body;
    const data = {
      productname,
      producttype,
      productprice,
    };

    const product = await Product.create(data);
    return res.status(201).send(product);
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res) => {};
const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {};

module.exports = {
  addProduct,
};
