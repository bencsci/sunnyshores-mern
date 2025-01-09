import productModel from "../models/productModel.js";

// Adding products
const addProduct = async (req, res) => {
  try {
    const { name, price, description, category, subCategory } = req.body;

    // To be fixed, using thunder client for testing. Image is undefined
    const image = req.files.image && req.files.image[0];

    // Upload image to cloudinary?

    // Todo: Add image: image.path to productData
    const productData = {
      name,
      price,
      description,
      category,
      subCategory,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// List all products
const listProducts = async (req, res) => {};

// Remove product
const removedProduct = async (req, res) => {};

// Single Product info
const singleProduct = async (req, res) => {};

export { addProduct, listProducts, removedProduct, singleProduct };
