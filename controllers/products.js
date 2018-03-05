const Product = require('../models').Product

class ProductsController {
  async createProduct (req, res) {
    const product = await Product.create(req.body)
    res.status(201).send(product)
  }
}

module.exports = ProductsController
