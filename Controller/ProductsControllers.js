const AllProductsModel = require("../Models/AllProductsModel");

const AllProductsControllerFunctions = {
  GetAllProducts: async (req, res) => {
    const AllProds = await AllProductsModel.find();
    res.send(AllProds);
  },
};

module.exports = AllProductsControllerFunctions;
