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

      let { nombre, precio, descripcion, descuento, categoria } = req.body;

      let nuevoProducto = {
         id: productos.length + 1,
         nombre,
         descuento,
         precioInicial: descuento ? Math.trunc(precio) : null,
         precioFinal: Math.trunc(
            descuento ? precio - (precio * +descuento) / 100 : precio
         ).toLocaleString(),
         categoria,
         descripcion,
         imagen: 'default.png',
      };

      productos.push(nuevoProducto);
      guardarProductos(productos);

      res.redirect('/adminProducts');
      /*------------------ logica del subir un producto ------------------*/
   },
   /* ----------------------no hice esto solo deje armado las cosas----------------- */
   editarProducto: (req, res) => {
      let producto = productos.find(
         (producto) => producto.id === +req.params.id
      );
      res.render('admin/editarProductos', {
         producto,
      });
   },
   update: (req, res) => {},
   /*----------------------- no hice esto solo deje armado las cosas---------------- */
};
