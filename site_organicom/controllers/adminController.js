const fs = require('fs');
const path = require('path');

//const productos = require('./data/productos.json');

let { guardarProductos } = require('./data/dataFS');

const {producto} = require("../database/models");
const { Console } = require('console');
//REVISAR CONTROLLERS/DATA/DATAFS PARA ENTENDER

//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3

//POR FALLAS, revisar el JSON

module.exports = {
   /* trae los productos */
   adminProducts: (req, res) => {
      producto.findAll()
      .then(productos =>{
         res.render('admin/adminProducts', {
            productos,
            session : req.session
           
         });
      })
      .catch(errors => console.log(errors))
   },
   agregarProducto: (req, res) => {
      res.render('admin/agregarProducto', {session : req.session});
   },
   /*------------------ logica del subir un producto ------------------*/
   create: (req, res) => {
     
      //reutilice el codigo anterior alex <3
      //let { id, nombre, precio, descripcion, descuento, categoria } = req.body;
      
      producto.create({
         ...req.body,
         imagen : req.file ? req.file.filename : "default.png"
      })
      .then(()=>{
         res.redirect('/adminProducts',{
            session : req.session
         });
      })
      .catch(errors => console.log(errors))
      
      /*------------------ logica del subir un producto ------------------*/
   },
   /* ----------------------consultas a Alex <3----------------- */
   editarProducto: (req, res) => {
      producto.findByPk(req.params.id)
         .then(producto =>{
            res.render('admin/editarProductos', {
               producto,
               session : req.session
            });
         })
      /* let producto = productos.find(
         (producto) => producto.id === +req.params.id
      );
      res.render('admin/editarProductos', {
         producto,
         session : req.session
      }); */
   },
   update: (req, res) => {
      let { nombre, descuento, precio, categoria, descripcion } = req.body;
      productos.forEach((producto) => {
         if (producto.id === +req.params.id) {
            (producto.id = producto.id),
               (producto.nombre = nombre),
               (producto.descuento = descuento),
               (producto.precio = precio),
               (producto.categoria = categoria),
               (producto.descripcion = descripcion),
               (producto.imgPrincipalProducto = req.file
                  ? req.file.filename
                  : producto.imgPrincipalProducto);
         }
      });

      guardarProductos(productos);

      res.redirect('/adminProducts');
   },
   borrar: (req, res) => {
      productos.forEach((producto) => {
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
      guardarProductos(productos);

      res.redirect('/adminProducts');
   },
   /*-----------------------consultas a Alex <3---------------- */
};
