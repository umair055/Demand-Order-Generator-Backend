const express = require("express");
const AllProductsControllerFunctions = require("../Controller/ProductsControllers");
const AllProductsRouter = express.Router();

AllProductsRouter.get(
  "/all-products",
  AllProductsControllerFunctions.GetAllProducts
);

module.exports = AllProductsRouter;
