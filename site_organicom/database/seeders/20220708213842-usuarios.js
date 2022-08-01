'use strict';
const usuarios_db = require('../../controllers/data/users.json');
const users = usuarios_db.map(User => {
  return {
    nombre : User.nombre,
    email : User.email,
    rol : User.rol,
    telefono : User.number,
    password : User.password,
    avatar : User.avatar,
    createdAt : new Date()
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Usuarios', users, {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Usuarios', null, {});
       }
};
