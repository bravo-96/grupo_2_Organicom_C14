const express = require('express');
const router = express.Router();
const {offSession} = require("../middleware/sessionCheck")

const {
   detalleProducto,
   carrito,
   categoria,
   busqueda,
} = require('../controllers/productController');

router
   .get('/detalleProducto/:id', detalleProducto)
   .get('/carrito',offSession, carrito)
   .get('/categorias/:categoria', categoria)
   .get('/resultadoBusqueda', busqueda);

module.exports = router;
