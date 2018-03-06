'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'photo', Sequelize.TEXT)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Products', 'photo')
  }
}
