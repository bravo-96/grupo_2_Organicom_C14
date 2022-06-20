const express = require('express');
const router = express.Router();
const multer = require("multer")
let uploadFiles = require("../middleware/uploadFiles")
let loginValidator = require("../validations/loginValidator")
const {login, processLogin, processRegister, register, logout } = require('../controllers/userController');
const {inSession, offSession} = require("../middleware/sessionCheck")


//RUTAS DONE
//register
router.get("/register", inSession, register);
router.post("/register2",/* loginValidator, */ processRegister)

//login
router.get("/login", inSession, login)
router.post("/login2", loginValidator, processLogin)

//logout
router.get("/logout", logout)

module.exports = router;

//RUTAS DONE
