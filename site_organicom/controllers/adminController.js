let {getProductos, guardarProductos} = require ("./data/dataFS");
//REVISAR CONTROLLERS/DATA/DATAFS PARA ENTENDER

//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3


//POR FALLAS, revisar el JSON

module.exports={
    /* trae los productos */
    adminProducts : (req,res)=>{
        res.render("admin/adminProducts",{
            productos : getProductos
        })
    },
    agregarProducto: (req,res)=>{
        res.render("admin/agregarProducto")
    },
    /*------------------ logica del subir un producto ------------------*/
    create : (req,res)=>{
       let lastId = 0;
       getProductos.forEach(producto => {
           if (producto.id > lastId) {
               lastId = producto.id
           }
       });
       let {nombre, precio, descripcion} = req.body

       let nuevoProducto = {
           id : lastId +1,
            nombre,
            precio,
            descripcion,
            imagen : "default.png"
       }

       getProductos.push(nuevoProducto);
       guardarProductos(getProductos);
       res.redirect("/adminProducts")
       /*------------------ logica del subir un producto ------------------*/

    },
    /* ----------------------no hice esto solo deje armado las cosas----------------- */
    editarProducto : (req,res)=>{
        let producto = getProductos.find(producto => producto.id == req.params.id)
        res.render("admin/editarProductos",{
            producto
        })
    },
    update : (req,res)=>{
        
    }
    /*----------------------- no hice esto solo deje armado las cosas---------------- */
    
}