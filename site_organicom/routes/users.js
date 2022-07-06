const express = require('express');
const router = express.Router();
const multer = require("multer")
let uploadFiles = require("../middleware/uploadFiles")
let loginValidator = require("../validations/loginValidator")
const {login, processLogin, processRegister, register, logout, profile } = require('../controllers/userController');
const {inSession} = require("../middleware/sessionCheck")



//RUTAS DONE
//register
router.get("/register", inSession, register);
router.post("/register2",/* loginValidator, */ processRegister)

//login
router.get("/login", inSession, login)
router.post("/login2", loginValidator, processLogin)

//logout
router.get("/logout", logout)

router.get('/profile',profile)


module.exports = router;

//RUTAS DONE
