const express = require('express');
const router = express.Router();
const multer = require("multer")
let uploadFiles = require("../middleware/uploadFiles")

const { login, processLogin, processRegister, register } = require('../controllers/userController');

/* GET users listing. */
//RUTA DE REGISTRO DONE
router.get('/register', register);
router.post("/register2", processRegister)
//RUTA DE REGISTRO DONE

router.get("/login", login)
router.post("/login2", processLogin)

module.exports = router;
