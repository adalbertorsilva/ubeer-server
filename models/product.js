'use strict'

const {Model, DataTypes} = require('sequelize')
const {Options, Attributes} = require('sequelize-decorators')

module.exports = (sequelize) => {
  @Options({
    sequelize: sequelize,
    tableName: 'Products'
  })

  @Attributes({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
      description: DataTypes.TEXT
  })

  class Product extends Model {}
  return Product
}
