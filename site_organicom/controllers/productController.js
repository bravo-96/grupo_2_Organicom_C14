module.exports = {
   detalleProducto: (req, res, next) => {

      return res.render('detalleProducto');
      // return res.send(req.params);
   },
   carrito: (req, res, next) => {
      return res.render('carrito');
   },
};
