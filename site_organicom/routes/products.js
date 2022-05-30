const express = require('express');
const router = express.Router();

const {
   detalleProducto,
   carrito,
   catFideosCereales,
   catFrutosSecos,
   catInfusiones,
   catJugosBebidas,
} = require('../controllers/productController');

router.get('/detalleProducto/:id', detalleProducto);
// router.get('/detalleProducto/:id', detalleProducto);
router.get('/carrito', carrito);

router.get('/categorias/fideos_cereales', catFideosCereales);
router.get('/categorias/frutos_secos', catFrutosSecos);
router.get('/categorias/infusiones', catInfusiones);
router.get('/categorias/jugos_bebidas', catJugosBebidas);

module.exports = router;
