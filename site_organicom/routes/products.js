const express = require('express');
const router = express.Router();
const {offSession} = require("../middleware/sessionCheck")

const {
   listar,
   detalleProducto,
   carrito,
   categorie,
   busqueda,
} = require('../controllers/productController');

router
   .get('/detalleProducto/:id', detalleProducto)
   .get('/carrito',offSession, carrito)
   .get('/categorias/:categoria', categorie)
   .get('/resultadoBusqueda', busqueda)
   .get("/listar", listar)

module.exports = router;
