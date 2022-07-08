module.exports= (sequelize, dataTypes)=>{
    let alias = "categoria";
    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            primaryKey : true,
            allowNull : false
        },
        categoria : {
            type : dataTypes.STRING(45),
            allowNull : false
        }

    }
    let config ={
        tableName : "categorias",
        timestamps : false,
    }
    const categoria = sequelize.define(alias, cols, config);

    categoria.associate = models =>{

        categoria.hasMany(models.producto, {
            as : "productos",
            foreignKey : "categoriaId"
        })

    }

    return categoria

}