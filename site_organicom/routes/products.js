const express = require('express');
const router = express.Router();

const {detalleProducto,carrito} = require('../controllers/productController');

router.get('/detalleProducto', detalleProducto);
// router.get('/detalleProducto/:id', detalleProducto);
router.get('/carrito', carrito);

module.exports = router;
