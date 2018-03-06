'use strict'

const {Model, DataTypes} = require('sequelize')
const {Options, Attributes} = require('sequelize-decorators')

module.exports = (sequelize) => {
  @Options({
    sequelize,
    tableName: 'Products'
  })

  @Attributes({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    amount_in_stock: DataTypes.INTEGER,
    photo: DataTypes.TEXT,
  })

  class Product extends Model {

    getResponseObject() {
      const productObject = {
        id: this.id,
        name: this.name,
        description: this.description,
        price: this.price,
        amount_in_stock: this.amount_in_stock,
        photo: this.photo
      }

      return this.objectWithoutNonFilledAttributes(productObject)
    }
    

    isAttributeUndefined (attribute) {
      return typeof attribute === 'undefined'
    }
    
    objectWithoutNonFilledAttributes (object) {
      let objectKeys = Object.keys(object)
      let keysToBeRemoved = []
    
      for (let key in objectKeys) {
        let objectKey = objectKeys[key]


        if (this.isAttributeUndefined(object[objectKey])) {
          keysToBeRemoved.push(objectKey)
        }

        if (object[objectKey] === null) {
          keysToBeRemoved.push(objectKey)
        }
      }
    
      keysToBeRemoved.forEach(element => {
        delete object[element]
      })
    
      return object
    }

  }

  // const Product = sequelize.define('Product', {
  //   name: DataTypes.STRING,
  //   price: DataTypes.DECIMAL,
  //   description: DataTypes.TEXT
  // }, {})
  Product.associate = models => {
    
  }

  return Product
}
