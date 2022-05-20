const express = require('express');
const router = express.Router();

//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3

let {agregarProducto, agregar} = require ("../controllers/adminController")

//POR FALLAS, MIRAR EN CONTROLLERS

router.get("/agregarProducto",agregarProducto);
router.get("/:id",agregar);

module.exports = router