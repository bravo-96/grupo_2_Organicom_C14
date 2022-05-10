var express = require('express');
var router = express.Router();

const {detail, cart} = require('../controllers/productController')

/* /products */
router.get('/productCart',cart);
router.get('/productDetail',detail);
module.exports = router;


