const db = require("../models");

const Product = db.products;

const addProduct = async (req, res) => {
  try {
    const { name, type, price, stock, image } = req.body;
    const data = {
      name,
      type,
      price,
      stock,
      image,
    };

    const product = await Product.create(data);
    return res.status(201).send(product);
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id: id },
    });

    if (product) {
      return res.status(200).send(product);
    }
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Product.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedProduct = await Product.findOne({ where: { id: id } });
      return res.status(201).json(updatedProduct);
    }
  } catch (error) {
    console.log(error);
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({ where: { id: id } });
    if (deleted) {
      return res.status(200).send(`product with id:${id} has been deleted`);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
