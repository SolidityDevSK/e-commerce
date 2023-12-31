const Product = require("../models/productSchema.js");
const ProductFilter = require("../utils/productFilter.js");

const allProducts = async (req, res) => {
  const productFilter = new ProductFilter(Product.find(), req.query).search();
  const products = productFilter.query;

  res.status(200).json({
    products,
  });
};
const detailProducts = async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.status(200).json({
    product,
  });
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    product,
  });
};

const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  product.remove();

  res.status(200).json({
    message: "Product is deleted",
  });
};

const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    product,
  });
};

module.exports = {
  allProducts,
  detailProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
