const express = require('express');
const router = express.Router();

//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3

let {adminProducts, agregarProducto} = require ("../controllers/adminController")

//POR FALLAS, MIRAR EN CONTROLLERS

router.get("/",adminProducts);
router.get("/:id",agregarProducto);

module.exports = router