const express = require('express');
const router = express.Router();
const multer = require("multer")
let uploadFiles = require("../middleware/uploadFiles")
let loginValidator = require("../validations/loginValidator")
const {login, processLogin, processRegister, register, logout } = require('../controllers/userController');

/* GET users listing. */
//RUTA DE REGISTRO DONE
router.get('/register', register);
router.post("/register2", processRegister)
//RUTA DE REGISTRO DONE

router.get("/login", login)
router.post("/login2", loginValidator, processLogin)

router.get("/logout", logout)
module.exports = router;
