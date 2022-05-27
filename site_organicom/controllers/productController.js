const productos = require('../controllers/data/productos.json');

module.exports = {
   detalleProducto: (req, res, next) => {
      const producto = productos.find((prod) => {
         return prod.id === +req.params.id;
      });

      return res.render('detalleProducto', {
         producto,
      });
      // return res.send(req.params);
   },
   carrito: (req, res, next) => {
      return res.render('carrito');
   },
};
