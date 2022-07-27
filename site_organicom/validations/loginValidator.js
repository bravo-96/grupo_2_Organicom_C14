const {check, body} = require("express-validator")
const {} = require("../controllers/data/dataFS")
const usuarios = require("../controllers/data/users.json")
const bcrypt = require("bcryptjs")
const db = require("../database/models")

module.exports= [
    check("email")
        .isEmail()
        .withMessage("debes ingresar un email valido"),
    
    check("password")
        .notEmpty()
        .withMessage("debes ingresar una contraseña"),

    /* body("password")
        .custom((value, {req})=>{
            db.Usuario.findOnde({
                where : req.body.email
            })
            if (user) {
                return bcrypt.compareSync(value, user.password)
            }else{
                return false
            }
        })
        .withMessage("credenciales invalidas")
         */
]