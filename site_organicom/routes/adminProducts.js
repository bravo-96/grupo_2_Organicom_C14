const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');
let uploadFiles = require('../middleware/uploadFiles');
const {offSession} = require("../middleware/sessionCheck")

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
   .get('/',offSession, adminProducts)

   /* GET muestra el formulario */
   .get('/agregar',offSession, agregarProducto)

   /* POST carga los datos al formulario */
   .post('/agregarProducto', uploadFiles.single('imgPrincipalProducto'), create)

   .get('/editar/:id',offSession, editarProducto)

   /* PUT actualiza los datos */
   .put(
      '/editarProducto/:id',
      uploadFiles.single('imgPrincipalProducto'),
      update
   )

   .delete('/delete/:id', borrar)

   .get('/resultadoBusqueda', busqueda)

module.exports = router;
