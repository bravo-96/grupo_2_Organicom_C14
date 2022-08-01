const express = require('express');
const router = express.Router();
const multer = require("multer")
let uploadFiles = require("../middleware/uploadFiles")
let loginValidator = require("../validations/loginValidator")
let registerValidator = require("../validations/registerValidator")
const {inSession, offSession} = require("../middleware/sessionCheck");
const { userCreate, userEdit,userLogin,register ,userUpdate, login} = require('../controllers/userController');







//RUTAS DONE
//register
router.get("/register", register);
router.post('/create',registerValidator, userCreate);

//login
router.get("/login", inSession, login)
router.post("/userLogin", loginValidator, userLogin)

//edit
router.get('/userEdit',offSession, userEdit);
router.put('/userUpdate',userUpdate)

//logout



module.exports = router;

//RUTAS DONE
