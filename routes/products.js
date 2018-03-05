const ProductsController = require('../controllers/products')

const productsController = new ProductsController()

module.exports = (app) => {
  app.post('/products', productsController.createProduct)
}
