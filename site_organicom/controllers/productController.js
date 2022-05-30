const productos = require('../controllers/data/productos.json');

module.exports = {
   detalleProducto: (req, res, next) => {
      const producto = productos.find((prod) => {
         return prod.id === +req.params.id;
      });

      return res.render('detalleProducto', {
         producto,
      });
   },
   carrito: (req, res, next) => {
      return res.render('carrito');
   },
   catFideosCereales: (req, res, next) => {
      return res.render('categorias/fideos-cereales');
   },
   catFrutosSecos: (req, res, next) => {
      return res.render('categorias/frutos-secos');
   },
   catInfusiones: (req, res, next) => {
      return res.render('categorias/infusiones');
   },
   catJugosBebidas: (req, res, next) => {
      return res.render('categorias/jugos-bebidas');
   },
};
