'use strict';
const productos_db = require('../../controllers/data/productos_db.json');
const productos = productos_db.map(producto => {
  return {
    nombre : producto.nombre,
    descuento : producto.descuento,
    precio : producto.precio,
    categoriaId : producto.categoria,
    descripcion : producto.descripcion,
    createdAt : new Date()
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Productos', productos, {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Productos', null, {});
       }
};
