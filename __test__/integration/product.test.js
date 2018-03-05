const request = require('supertest')
const app = require('../../app')
const Product = require('../../models').Product

describe('Product', () => {
  afterAll(async () => {
    await Product.destroy({where: {}})
  })

  describe('Product creation route', () => {
    it('should return a 201 status and a fulfiled object', async () => {
      const payload = {
        name: 'Heineken',
        price: 4.5,
        description: 'Tasty'
      }

      const response = await request(app).post('/products').send(payload)
      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('id')
      expect(response.body).toHaveProperty('name', payload.name)
      expect(response.body).toHaveProperty('price')
      expect(response.body.price).toBe('4.5')
      expect(response.body).toHaveProperty('description', payload.description)
    })
  })
})
