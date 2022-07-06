const {check, body} = require("express-validator")
const {} = require("../controllers/data/dataFS")
const usuarios = require("../controllers/data/users.json")
const bcrypt = require("bcryptjs")
const req = require("express/lib/request")

module.exports=[
    check ("nombre")
        .notEmpty()
        .withMessage("debes ingresar tu nombre de usuario"),

    check ("email")
        .notEmpty()
        .isEmail()
        .withMessage("debes ingresar un email"),
    
    check ("password")
        .notEmpty()
        .withMessage("debes ingresar una contraseña"),

    body ("email")
    /* .if(email==="undefined"){

    } */
    .notEmpty()
    .isEmail()
    
]
