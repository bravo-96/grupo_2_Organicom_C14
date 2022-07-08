'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    descuento: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    beneficios: DataTypes.STRING,
    preparacion: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER,
    origenId : DataTypes.INTEGER,
    marcaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};