const express = require('express');
const router = express.Router();

//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3

let {adminProducts, agregarProducto, create, editarProducto, update} = require ("../controllers/adminController")

//POR FALLAS, MIRAR EN CONTROLLERS

router.get("/",adminProducts);

/* GET muestra el formulario */
router.get("/agregar",agregarProducto)

/* POST carga los datos al formulario */
router.post("/agregarProducto",create)


router.get("/:id", update)
/* PUT actualiza los datos */
router.put("/:id",editarProducto);



module.exports = router