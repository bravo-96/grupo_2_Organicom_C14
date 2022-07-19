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
         imagenes : req.file ? req.file.filename : "default.png"
      })
      .then(productos=>{
         return res.send(req.body)
         /* res.redirect('/adminProducts',{
            productos,
            session : req.session
         }); */
      })
      .catch(errors => console.log(errors))
      /* let categorias = db.Categoria.findAll();
      let origenes = db.Origen.findAll();
      let marcas = db.Marca.findAll();

      Promise.all([categorias, origenes,marcas])
         .then(([categorias,origenes,marcas]) => {
            return res.render('admin/agregarProducto', {
               session : req.session,
               categorias,
               marcas,
               origenes
            });
         })
         .catch(error => console.log(error)) */

      
      /*------------------ logica del subir un producto ------------------*/
   },
   /* ----------------------consultas a Alex <3----------------- */
   editarProducto: (req, res) => {
      db.Producto.findByPk(req.params.id)
         .then(producto =>{
            res.render('admin/editarProductos', {
               producto,
               session : req.session
            });
         })
         .catch(errors => console.log(errors))
      /* let producto = productos.find(
         (producto) => producto.id === +req.params.id
      );
      res.render('admin/editarProductos', {
         producto,
         session : req.session
      }); */
   },
   update: (req, res) => {
  
      let producto = db.Producto.findByPk(req.params.id)
      db.Producto.update({
         ...req.body,
         imagen : req.file ? req.file.filename : producto.imagen
      },{
         where : {id : req.params.id}
      })
      .then(producto=>{
         /* res.send(req.params) */
         res.redirect("/adminProducts",{
            producto,
            session : req.session
         });
      })
      .catch(errors => console.log(errors))

      
   },
   borrar: (req, res) => {
      /* productos.forEach((producto) => {
         if (producto.id === +req.params.id) {
            try {
               fs.unlinkSync(
                  path.join(
                     __dirname,
                     `../public/imgs/products_images/${producto.imgPrincipalProducto}`
                  )
               );

               console.log('Imagen eliminada');
            } catch (err) {
               console.error('No se pudo borrar la imagen', err);
            }

            let productoBorrar = productos.indexOf(producto);
            productos.splice(productoBorrar, 1);
         }
      });
      guardarProductos(productos); */
      db.Producto.destroy({
         where : {id : req.params.id}
      })
      .then(producto =>{
         res.redirect('/',{
            producto,
            session : req.session
         });
      })
      .catch(errors => console.log(errors))
   },
   /*-----------------------consultas a Alex <3---------------- */
};
