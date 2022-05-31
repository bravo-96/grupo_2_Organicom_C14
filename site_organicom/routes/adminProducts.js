const express = require('express');
const router = express.Router();

//Si quieren cambiar nombres haganlo pero AVISEN --Alex <3
const multer = require("multer")
let uploadFiles = require("../middleware/uploadFiles")

let {adminProducts, agregarProducto, create, editarProducto, update} = require ("../controllers/adminController")

//POR FALLAS, MIRAR EN CONTROLLERS

router.get("/",adminProducts);

/* GET muestra el formulario */
router.get("/agregar",agregarProducto)

/* POST carga los datos al formulario */
router.post("/agregarProducto",uploadFiles.single("imagen"),create)


router.get("/editar/:id", editarProducto )
/* PUT actualiza los datos */
router.put("/editarProducto/:id", update);



module.exports = router