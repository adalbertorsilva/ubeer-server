const Product = require('../../models').Product

describe('Product unit tests', () => {
  describe('Product response object', () => {
    it('should return a 201 status and a fulfiled object', async () => {
      const product = new Product()
      product.name = 'Heineken'
      product.price = 4.5
      product.description = 'Tasty'
      product.amount_in_stock = 100
      product.photo = 'some photo on 64 base string'

      const responseObject = product.getResponseObject()

      expect(responseObject).toHaveProperty('name', product.name)
      expect(responseObject).toHaveProperty('price', 4.5)
      expect(responseObject).toHaveProperty('description', product.description)
      expect(responseObject).toHaveProperty('amount_in_stock', product.amount_in_stock)
      expect(responseObject).toHaveProperty('photo', product.photo)
    })

    it('should not return a null attribute', async () => {
      const product = new Product()
      product.name = 'Heineken'
      product.price = 4.5
      product.description = 'Tasty'
      product.amount_in_stock = 100
      product.photo = null

      const responseObject = product.getResponseObject()

      expect(responseObject).toHaveProperty('name', product.name)
      expect(responseObject).toHaveProperty('price', 4.5)
      expect(responseObject).toHaveProperty('description', product.description)
      expect(responseObject).toHaveProperty('amount_in_stock', product.amount_in_stock)
      expect(responseObject).not.toHaveProperty('photo')
    })

    it('should not return an undefined attribute', async () => {
      const product = new Product()
      product.name = 'Heineken'
      product.price = 4.5
      product.description = 'Tasty'
      product.amount_in_stock = 100

      const responseObject = product.getResponseObject()

      expect(responseObject).toHaveProperty('name', product.name)
      expect(responseObject).toHaveProperty('price', 4.5)
      expect(responseObject).toHaveProperty('description', product.description)
      expect(responseObject).toHaveProperty('amount_in_stock', product.amount_in_stock)
      expect(responseObject).not.toHaveProperty('photo')
    })
  })
})
