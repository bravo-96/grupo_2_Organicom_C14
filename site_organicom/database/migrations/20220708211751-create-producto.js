'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      descuento: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Categorias'
          },
          key : 'id'
        }
      },
      beneficios: {
        type: Sequelize.STRING
      },
      preparacion: {
        type: Sequelize.STRING
      },
      marcaId : {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Marcas'
          },
          key : 'id'
        }
      },
      origenId : {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Origenes'
          },
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Productos');
  }
};