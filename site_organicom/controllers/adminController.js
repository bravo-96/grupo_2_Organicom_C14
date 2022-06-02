/////////////////////////////////////////////
// ORSERVACION: Al hacer un require("") de un archivo JSON,
//              automaticamente te lo parsea a codigo Javascript
const productos = require('./data/productos.json');
// la constante <producto> ya es un array javascript con objetos

let { guardarProductos } = require('./data/dataFS');
//REVISAR CONTROLLERS/DATA/DATAFS PARA ENTENDER

//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3

//POR FALLAS, revisar el JSON

// function adminProducts(req,res){
//    return res.render("admin/adminProducts",{productos})
// }

module.exports = {
   /* trae los productos */
   adminProducts: (req, res) => {
      res.render('admin/adminProducts', {
         productos,
      });
   },
   agregarProducto: (req, res) => {
      res.render('admin/agregarProducto');
   },
   /*------------------ logica del subir un producto ------------------*/
   create: (req, res) => {
      //    let lastId = 0;
      //    getProductos.forEach(producto => {
      //        if (producto.id > lastId) {
      //            lastId = producto.id
      //        }
      //    });

      // CAMBIO: Cambié el <lastId> por ( productos.length + 1 )

      let { nombre, precio, descripcion, descuento, categoria} = req.body;

      let nuevoProducto = {
         id: productos.length + 1,
         nombre,
         descuento,
         precio,
         categoria,
         descripcion,
         imgPrincipalProducto : req.file ? req.file.filename : "default.png",
      };

      productos.push(nuevoProducto);
      guardarProductos(productos);

      res.redirect('/adminProducts');
      /*------------------ logica del subir un producto ------------------*/
   },
   /* ----------------------consultas a Alex <3----------------- */
   editarProducto: (req, res) => {
      let producto = productos.find(
         (producto) => producto.id === +req.params.id
      );
      res.render('admin/editarProductos', {
         producto,
      });
   },
   update: (req, res) => {
      let {nombre, descuento, precio, categoria, descripcion} = req.body
      productos.forEach(producto =>{
         if(producto.id === +req.params.id){
            producto.id = producto.id,
            producto.nombre = nombre,
            producto.descuento = descuento,
            producto.precio = precio,
            producto.categoria = categoria,
            producto.descripcion = descripcion,
            producto.imgPrincipalProducto = req.file ? req.file.filename : producto.imgPrincipalProducto;
         }
      });
      
      guardarProductos(productos);

      res.redirect('/adminProducts');
   },
   borrar : (req, res)=>{
      productos.forEach(producto =>{
         if(producto.id === +req.params.id){
            let productoBorrar = productos.indexOf(producto);
            /* let borrarImage = productos.indexOf(producto.imgPrincipalProducto) */
            productos.splice(productoBorrar, 1)
               
         }
      });
      guardarProductos(productos);

      res.redirect('/adminProducts');
   }
   /*-----------------------consultas a Alex <3---------------- */
};
