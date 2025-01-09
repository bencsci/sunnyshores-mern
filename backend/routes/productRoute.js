import express from "express";
import {
  addProduct,
  listProducts,
  removedProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([{ name: "image", maxCount: 1 }]),
  addProduct
);
productRouter.post("/remove", removedProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProducts);

export default productRouter;
