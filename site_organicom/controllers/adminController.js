const productos = require('./data/productos.json');

let { guardarProductos } = require('./data/dataFS');

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
