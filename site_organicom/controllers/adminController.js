const fs = require('fs');
const path = require('path');

//const productos = require('./data/productos.json');

//let { guardarProductos } = require('./data/dataFS');

const db = require("../database/models");
const { Console } = require('console');
//REVISAR CONTROLLERS/DATA/DATAFS PARA ENTENDER

//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3

//POR FALLAS, revisar el JSON

module.exports = {
   /* trae los productos */
   adminProducts: (req, res) => {
      db.Producto.findAll({
         include : ["categoria", "imagenes"]
      })
      .then(productos =>{
         res.render('admin/adminProducts', {
            productos,
            session : req.session
           
         });
      })
      .catch(errors => console.log(errors))
   },
   agregarProducto: (req, res) => {
      let categorias = db.Categoria.findAll();
      let origenes = db.Origen.findAll();
      let marcas = db.Marca.findAll();
      /* let imagenes = db.Imagen.findAll(); */

      Promise.all([categorias, origenes, marcas])
         .then(([categorias,origenes,marcas]) => {
            return res.render('admin/agregarProducto', {
               session : req.session,
               categorias,
               marcas,
               origenes
            });
         })
         .catch(error => console.log(error))
   },
   /*------------------ logica del subir un producto ------------------*/
   create: (req, res) => { 
   
      db.Producto.create({
         ...req.body,
      })
      .then(producto=>{
         db.Imagen.create({
            nombre: req.file ? req.file.filename : "default.png",
            productoId: producto.id
         }).then( () => {
            return res.redirect('/adminProducts');
         })
      }).catch(errors => console.log(errors))
   },
   /* ----------------------consultas a Alex <3----------------- */
   editarProducto: (req, res) => {
      let producto = db.Producto.findByPk(req.params.id,{
         include : ['categoria','imagenes','marca','origen']
      });
      let categorias = db.Categoria.findAll();
      let origenes = db.Origen.findAll();
      let marcas = db.Marca.findAll();

      Promise.all([producto,categorias, origenes, marcas])
         .then(([producto,categorias,origenes,marcas]) =>{
            res.render('admin/editarProductos', {
               producto,
               categorias,
               origenes,
               marcas,
               session : req.session
            });
         })
         .catch(errors => console.log(errors))
   },
   update: (req, res) => {
      
      db.Producto.findByPk(req.params.id, {
         include : ['imagenes']
      })
         .then(producto => {
            db.Producto.update({
               ...req.body,
            },{
               where : {id : req.params.id}
            })
            .then(()=>{

               db.Imagen.update(
                  {
                     nombre : req.file ? req.file.filename : producto.imagenes[0].nombre
                  },
                  {
                     where : {productoId : req.params.id}
                  }
               ).then( () => {
                  return res.redirect("/adminProducts");
               })
              
            })
         }).catch(errors => console.log(errors))
   },
   borrar: (req, res) => {
      
      db.Imagen.destroy({
         where : {
            productoId : req.params.id
         }
      }).then( () => {
         db.Producto.destroy({
            where : {id : req.params.id}
         })
         .then(() =>{
            res.redirect('/adminProducts');
         })
      }).catch(errors => console.log(errors))
   },
   /*-----------------------consultas a Alex <3---------------- */
};
