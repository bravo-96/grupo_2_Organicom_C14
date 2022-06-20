const express = require('express');
const router = express.Router();
const { index } = require('../controllers/indexController');
const { busqueda } = require('../controllers/productController');

/* GET home page. */

router.get('/', index);
router.get('/resultadoBusqueda', busqueda);

module.exports = router;
