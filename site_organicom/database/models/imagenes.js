module.exports= (sequelize, dataTypes)=>{
    let alias = "imagen";
    let cols ={
        id : {
            type : dataTypes.INTEGER(11),
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        file : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        productoId : {
            type : dataTypes.INTEGER(11),
            allowNull : false
        }
    }
    let config ={
        tableName : "imagenes",
        timestamps : false,
    }
    const imagen = sequelize.define(alias, cols, config);

    imagen.associate = models =>{

        imagen.belongsTo(models.producto, {
            as : "producto",
            foreignKey : "productoId"
        })

    }

    return imagen
}