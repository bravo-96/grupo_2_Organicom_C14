'use strict';
const usuarios_db = require('../../controllers/data/users.json');
const usuarios = usuarios_db.map(usuario => {
  return {
    nombre : usuario.nombre,
    email : usuario.email,
    rol : usuario.rol,
    telefono : usuario.number,
    password : usuario.password,
    avatar : usuario.avatar,
    createdAt : new Date()
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Usuarios', usuarios, {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Usuarios', null, {});
       }
};
