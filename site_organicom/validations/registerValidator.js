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

    body ("nombre", "email", "password")
        .custom((value,{req})=>{
            if (req.body.email && req.body.name && req.body.password !== "undefined") {
                next()
            }else{
                return false
            }
        })
        .withMessage("debes ingresar los datos correspondientes")
]

