'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Origen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Origen.hasMany(models.Producto, {
        as : "productos",
        foreignKey : "origenId"
      })
    }
  }
  Origen.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Origen',
    tableName : "Origenes"
  });
  Origen.associate = models =>{
    Origen.hasMany(models.Producto, {
      as : "productos",
      foreignKey : "origenId"
    })
  }
  return Origen;
};