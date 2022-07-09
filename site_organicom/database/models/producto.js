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
    descripcion: DataTypes.TEXT,
    beneficios: DataTypes.TEXT,
    preparacion: DataTypes.TEXT,
    categoriaId: DataTypes.INTEGER,
    origenId : DataTypes.INTEGER,
    marcaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  Producto.associate = models =>{
    Producto.belongsTo(models.Categorias, {
      as : "categoria",
      foreignKey : "categoriaId"
    })
    Producto.hasMany(models.Imagenes, {
      as : "imagenes",
      foreignKey : "productoId"
    })
    Producto.belongsTo(models.Marcas, {
      as : "marca",
      foreignKey : "marcaId"
    })
    Producto.hasMany(models.Origenes, {
      as : "origenes",
      foreignKey : "origenId"
    })
  }
  return Producto;
};