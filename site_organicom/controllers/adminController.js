let {getProductos} = require ("./data/dataFS");

//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3


//POR FALLAS, revisar el JSON

module.exports={
    adminProducts : (req,res)=>{
        res.render("admin/adminProducts",{
            productos : getProductos
        })
    },
    agregarProducto : (req,res)=>{
        let producto = getProductos.find(producto => producto.id == req.params.id)
        res.render("admin/productos",{
            producto
        })
    }
}