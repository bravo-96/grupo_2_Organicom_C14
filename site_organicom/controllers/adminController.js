let {getProductos} = require ("./data/dataFS");

//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3


//POR FALLAS, revisar el JSON

module.exports={
    agregarProducto : (req,res)=>{
        res.render("agregarProducto",{
            productos : getProductos
        })
    },
    agregar : (req,res)=>{
        let producto = getProductos.find(producto => producto.id == req.params.id)
        res.render("productos",{
            producto
        })
    }
}