module.exports= (sequelize, dataTypes)=>{
    let alias = "producto";
    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            primaryKey : true,
            autoIncrement : true,
        },
        nombre : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        descuento : {
            type : dataTypes.STRING(45),
        }, 
        precio : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        categoriaId : {
            type : dataTypes.INTEGER(11),
            allowNull : false
        },
        descripcion : {
            type : dataTypes.TEXT,
            allowNull : true
        }
    }
    let config ={
        tableName : "productos",
        timestamps : false,
    }
    const producto = sequelize.define(alias, cols, config);

    /* return producto */

    producto.associate = models =>{

        producto.belongsTo(models.categoria, {
            as : "categoria",
            foreignKey : "categoriaId"
        })
        producto.hasMany(models.imagen, {
            as : "imagenes",
            foreignKey : "productoId"
        })
        
    }
    return producto
}