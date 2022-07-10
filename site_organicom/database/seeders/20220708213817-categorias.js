'use strict';
const categorias_db = require('../../controllers/data/categorias_db.json');
const categorias = categorias_db.map(categoria => {
  return {
    nombre : categoria,
    createdAt : new Date()
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Categorias', categorias, {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Categorias', null, {});
       }
};
