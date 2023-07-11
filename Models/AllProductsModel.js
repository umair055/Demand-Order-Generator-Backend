const mongoose = require("mongoose");

const AllProductsSchema = mongoose.Schema({
  Name: String,
  Category: String,
  Size: String,
  Type: String,
});

const AllProductsModel = mongoose.model("all products", AllProductsSchema);
module.exports = AllProductsModel;
