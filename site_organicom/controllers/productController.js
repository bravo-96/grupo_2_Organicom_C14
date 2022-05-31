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

   // Categoria
   categoria: (req, res, next) => {
      const productoCategoria = productos.filter((producto) => {
         return producto.categoria === req.params.categoria;
      });
      return res.render('categorias', { productoCategoria });
   },

   // catFideosCereales: (req, res, next) => {
   //    const productosFinales = productos.filter((producto) => {
   //       return producto.categoria === 'fideos-cereales';
   //    });
   //    return res.render('categorias/fideos-cereales', { productosFinales });
   // },
   // catFrutosSecos: (req, res, next) => {
   //    const productosFinales = productos.filter((producto) => {
   //       return producto.categoria === 'frutos-secos';
   //    });
   //    return res.render('categorias/frutos-secos', { productosFinales });
   // },
   // catInfusiones: (req, res, next) => {
   //    const productosFinales = productos.filter((producto) => {
   //       return producto.categoria === 'infusiones';
   //    });
   //    return res.render('categorias/infusiones', { productosFinales });
   // },
   // catJugosBebidas: (req, res, next) => {
   //    const productosFinales = productos.filter((producto) => {
   //       return producto.categoria === 'jugos-bebidas';
   //    });
   //    return res.render('categorias/jugos-bebidas', { productosFinales });
   // },
};
