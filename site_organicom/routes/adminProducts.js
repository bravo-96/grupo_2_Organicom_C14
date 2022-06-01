const express = require('express');
const router = express.Router();
const path = require('path');


//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3
const multer = require("multer")
let uploadFiles = require("../middleware/uploadFiles")

let {
   adminProducts,
   agregarProducto,
   create,
   editarProducto,
   update,
   borrar
} = require('../controllers/adminController');

//POR FALLAS, MIRAR EN CONTROLLERS

router.get('/', adminProducts);

/* GET muestra el formulario */
router.get('/agregar', agregarProducto);

/* POST carga los datos al formulario */
// uso de multer en el formulario
router.post(
   '/agregarProducto',
   uploadFiles.single('imgPrincipalProducto'),
   create
);

router.get('/editar/:id', editarProducto);
/* PUT actualiza los datos */

router.put(
    '/editarProducto/:id',
    uploadFiles.single('imgPrincipalProducto'),
    update);

router.delete("/delete/:id", borrar)

module.exports = router;
