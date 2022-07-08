'use strict';
const users_db = require('../../controllers/data/users.json');
const users = users_db.map(usuario => {
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
  
      await queryInterface.bulkInsert('Users', users, {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Users', null, {});
       }
};
