'use strict';
const marcas_db = require('../../controllers/data/marca_db.json');
const marcas = marcas_db.map(marca => {
  return {
    nombre : marca,
    createdAt : new Date()
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Marcas', marcas, {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Marcas', null, {});
       }
};
