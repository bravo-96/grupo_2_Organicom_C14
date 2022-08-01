'use strict';
const productos_db = require('../../controllers/data/productos.json');
const images = productos_db.map(producto => {
  return {
    nombre : producto.imgPrincipalProducto,
    productoId: producto.id,
    createdAt : new Date()
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Imagenes', images, {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Imagenes', null, {});
       }
};
