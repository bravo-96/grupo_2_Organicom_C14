const req = require('express/lib/request');
//const productos = require('../controllers/data/productos.json');
const db = require("../database/models");
//const categorias = require('../database/models/categorias');

module.exports = {
   detalleProducto: (req, res, next) => {
      db.Producto.findByPk(req.params.id,{
         include : ["categoria", "imagenes"]
      })
      .then(producto => {
         /* res.send(producto) */
         return res.render('detalleProducto',{
            producto, 
            session: req.session 
         });
      })
      .catch(errors => console.log(errors))
      /* const producto = productos.find((prod) => {
         return prod.id === +req.params.id;
      });

      return res.render('detalleProducto', {
         producto,
         session: req.session,
      }); */
   },

   carrito: (req, res, next) => {
      db.Producto.findByPk()
      .then(producto => {
         return res.render('carrito', { session: req.session });
      })
      .catch(errors => console.log(errors))
      //return res.render('carrito', { session: req.session });
   },

   // Busqueda
   busqueda: (req, res) => {
      let { keyword } = req.query/* .toLowerCase() */;
      /* let noSpaceKeyword = keyword.join('');
      const result = (()=>productos.nombre.toLowerCase().include(noSpaceKeyword)); */
      db.Producto.findAll({
         where : {
            nombre : keyword
         }
      })
      .then(productos=>{
         /* res.send(req.query) */
         res.render("resultadoBusqueda",{
           /*  result, */
            productos,
            session : req.session
         })
      })
      /* let { keyword } = req.query;
      let noSpaceKeyword = keyword.join('');
      const result = productos.filter((producto) =>
         producto.nombre.toLowerCase().includes(noSpaceKeyword)
      ); */

      // let namesCategories = categories.map((category) => {
      //    return {
      //       id: category.id,
      //       name: category.name,
      //    };
      // });

      /* return res.render('resultadoBusqueda', {
         productos: result,
         noSpaceKeyword,
         // namesCategories,
         session: req.session,
      }); */
   },

   // Categoria
   categorie: (req, res, next) => {
      
     db.Categoria.findAll({
      include : [
        {
           association : "productos",
           include : ['imagenes',"origen","marca"]
        }
     
     ],
      where : {
        id : req.query.categoria
      }
    })
      .then(categoria =>{
         /* return res.send(categoria) */
         res.render("categorias",{
            categoria,
            session : req.session
         })
      })
      .catch(errors => console.log(errors))
      
     /*  const productoCategoria = productos.filter((producto) => {
         return producto.categoria === req.params.categoria;
      });
      return res.render('categorias', {
         productoCategoria,
         categoria: req.params.categoria,
         session: req.session,
      }); */
   },
   listar : (req, res) => {
      db.Producto.findAll( {
          include : ["categoria","imagenes"]
      } )
      .then(producto =>{
         /* res.send(producto)  */
         res.render('productos', {
            producto,
            session : req.session     
         });
      })
      .catch(errors => console.log(errors))
   }
};
