const productos = require('./data/productos.json');
const path = require('path');

let { guardarProductos } = require('./data/dataFS');
let uploadFiles = require ("../middleware/uploadFiles")

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
      const { nombre, precio, descripcion, descuento, categoria } = req.body;
      const nuevoProducto = {
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
   /* ----------------------no hice esto solo deje armado las cosas----------------- */
   editarProducto: (req, res) => {
      const producto = productos.find(
         (producto) => producto.id === +req.params.id
      );
      res.render('admin/editarProductos', {
         producto,
      });
   },
   update: (req, res) => {},
   /*----------------------- no hice esto solo deje armado las cosas---------------- */
};
