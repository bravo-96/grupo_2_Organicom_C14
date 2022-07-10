const req = require('express/lib/request');
//const productos = require('../controllers/data/productos.json');
const db = require("../database/models");
//const categorias = require('../database/models/categorias');

module.exports = {
   detalleProducto: (req, res, next) => {
      db.Producto.findByPk(req.params.id)
      .then(productos => {
         return res.render('detalleProducto',{
            productos, 
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
      .then(productos => {
         return res.render('carrito', { session: req.session });
      })
      .catch(errors => console.log(errors))
      //return res.render('carrito', { session: req.session });
   },

   // Busqueda
   busqueda: (req, res) => {
      let searchy = req.query.search.toLowerCase()
      db.Producto.findAll({
         where : {
            nombre : searchy
         }
      })
      .then(producto =>{
         res.render("resultadoBusqueda",{
            producto,
            keyword,
            session : req.session
         })
      })
      .catch(errors => console.log(errors))
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

     let busqueda = req.query.categorie
     db.producto.findAll({
         where : {
            categoria : busqueda
         }
      })
      .then(producto =>{
         res.render("categorias",{
            producto,
            busqueda,
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
      db.Imagenes.findAll()
      .then(imagen =>{
         res.send(imagen) 
         /* res.render('productos', {
            productos,
            session : req.session     
         }); */
      })
      .catch(errors => console.log(errors))
   }
};
