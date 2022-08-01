const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');
let uploadFiles = require('../middleware/uploadFiles');
const {offSession, soloAdmin} = require("../middleware/sessionCheck")

let {
   adminProducts,
   agregarProducto,
   create,
   editarProducto,
   update,
   borrar,
} = require('../controllers/adminController');
const { busqueda } = require('../controllers/productController');

router
   .get('/', offSession, soloAdmin, adminProducts)

   /* GET muestra el formulario */
   .get('/agregar', offSession, soloAdmin, agregarProducto)

   /* POST carga los datos al formulario */
   .post('/agregarProducto', uploadFiles.single('imagenes'), create)

   .get('/editar/:id', offSession, soloAdmin, editarProducto)

   /* PUT actualiza los datos */
   .put(
      '/editarProducto/:id',
      uploadFiles.single('imagenes'),
      update
   )

   .delete('/delete/:id', borrar)

   .get('/resultadoBusqueda', busqueda)

module.exports = router;
