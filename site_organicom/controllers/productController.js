const productos = require('../controllers/data/productos.json');

module.exports = {
   detalleProducto: (req, res, next) => {
      const producto = productos.find((prod) => {
         return prod.id === +req.params.id;
      });

      return res.render('detalleProducto', {
         producto,
         session: req.session,
      });
   },

   carrito: (req, res, next) => {
      return res.render('carrito', { session: req.session });
   },

   // Busqueda
   busqueda: (req, res) => {
      let { keyword } = req.query;
      let noSpaceKeyword = keyword.join('');
      const result = productos.filter((producto) =>
         producto.nombre.toLowerCase().includes(noSpaceKeyword)
      );

      // let namesCategories = categories.map((category) => {
      //    return {
      //       id: category.id,
      //       name: category.name,
      //    };
      // });

      return res.render('resultadoBusqueda', {
         productos: result,
         noSpaceKeyword,
         // namesCategories,
         session: req.session,
      });
   },

   // Categoria
   categoria: (req, res, next) => {
      const productoCategoria = productos.filter((producto) => {
         return producto.categoria === req.params.categoria;
      });
      return res.render('categorias', {
         productoCategoria,
         categoria: req.params.categoria,
         session: req.session,
      });
   },
};
