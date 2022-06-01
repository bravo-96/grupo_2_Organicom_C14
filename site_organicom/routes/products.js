const express = require('express');
const router = express.Router();

const {
   detalleProducto,
   carrito,
   categoria,
} = require('../controllers/productController');

router.get('/detalleProducto/:id', detalleProducto);

router.get('/carrito', carrito);

router.get('/categorias/:categoria', categoria);

module.exports = router;
