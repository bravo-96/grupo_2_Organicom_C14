const express = require('express');
const router = express.Router();
const multer = require("multer")
let uploadFiles = require("../middleware/uploadFiles")
let loginValidator = require("../validations/loginValidator")
const {login, processLogin, processRegister, register, logout, profile } = require('../controllers/userController');
const {inSession} = require("../middleware/sessionCheck");
const { userCreate, userEdit,userLogin } = require('../controllers/userController');







//RUTAS DONE
//register
router.get("/register", register);
router.post('/create', userCreate);


//EDITAR 
router.get("/profile", userEdit);
 router.post('/:id', userEdit);

//login
router.get("/login", inSession, login)
router.post("/userLogin", loginValidator, userLogin)

//logout
router.get("/logout", logout)

router.get('/profile',profile)


module.exports = router;

//RUTAS DONE
