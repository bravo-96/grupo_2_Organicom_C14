const productos = require('../controllers/data/productos.json');

module.exports = {
   detalleProducto: (req, res, next) => {
      const producto = productos.find((prod) => {
         return prod.id === +req.params.id;
      });

      return res.render('detalleProducto', {
         producto,
         session : req.session
      });
   },

   carrito: (req, res, next) => {
      return res.render('carrito');
   },

   // Categoria
   categoria: (req, res, next) => {
      const productoCategoria = productos.filter((producto) => {
         return producto.categoria === req.params.categoria;
      });
      return res.render('categorias', {
         productoCategoria,
         categoria: req.params.categoria,
      });
   },
};
