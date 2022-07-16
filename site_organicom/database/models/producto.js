"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.belongsTo(models.Categoria, {
        as : "categoria",
        foreignKey : "categoriaId"
      })
      Producto.hasMany(models.Imagen, {
        as : "imagenes",
        foreignKey : "productoId"
      })
      Producto.belongsTo(models.Marca, {
        as : "marca",
        foreignKey : "marcaId"
      })
      Producto.belongsTo(models.Origen, {
        as : "origen",
        foreignKey : "origenId"
      })
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    descuento: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    beneficios: DataTypes.TEXT,
    preparacion: DataTypes.TEXT,
    categoriaId: DataTypes.INTEGER,
    origenId : DataTypes.INTEGER,
    marcaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
    tableName : "Productos"
  });
  
  return Producto;
};
