const express = require('express');
const router = express.Router();

// MULTER
const multer = require('multer');
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, '../public/imgs/products_images');
   },
   filename: function (req, file, cb) {
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
   },
});
const uploadFile = multer({ storage });
//--------------------------------------

//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3

let {
   adminProducts,
   agregarProducto,
   create,
   editarProducto,
   update,
} = require('../controllers/adminController');

//POR FALLAS, MIRAR EN CONTROLLERS

router.get('/', adminProducts);

/* GET muestra el formulario */
router.get('/agregar', agregarProducto);

/* POST carga los datos al formulario */
// uso de multer en el formulario
router.post('/agregarProducto', uploadFile.single("idDelInputDeSubida") ,create);

router.get('/editar/:id', editarProducto);
/* PUT actualiza los datos */
router.put('/editarProducto/:id', update);

module.exports = router;
