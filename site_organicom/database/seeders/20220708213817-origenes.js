'use strict';
const origen_db = require('../../controllers/data/origen.json');
const origenes = origen_db.map(origen => {
  return {
    nombre : origen,
    createdAt : new Date()
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Origenes', origenes, {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Origenes', null, {});
       }
};
