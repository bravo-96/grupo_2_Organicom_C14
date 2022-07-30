const express = require('express');
const router = express.Router();
const multer = require("multer")
let uploadFiles = require("../middleware/uploadFiles")
let loginValidator = require("../validations/loginValidator")
let registerValidator = require("../validations/registerValidator")
const {inSession} = require("../middleware/sessionCheck");
const { userCreate, userEdit,userLogin,register , login} = require('../controllers/userController');







//RUTAS DONE
//register
router.get("/register", register);
router.post('/create',registerValidator, userCreate);

//login
router.get("/login", inSession, login)
router.post("/userLogin", loginValidator, userLogin)

//logout



module.exports = router;

//RUTAS DONE
