'use strict';
const productos_db = require('../../controllers/data/productos.json');
const productos = productos_db.map(producto => {
  return {
    nombre : producto.nombre,
    descuento : producto.descuento,
    precio : +producto.precio,
    categoriaId : producto.categoriaId,
    descripcion : producto.descripcion,
    beneficios: producto.beneficios,
    preparacion: producto.preparacion,
    marcaId: producto.marcaId,
    origenId: producto.origenId,
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
