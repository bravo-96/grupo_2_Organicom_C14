const {check, body} = require("express-validator")
const {} = require("../controllers/data/dataFS")
const usuarios = require("../controllers/data/users.json")
const bcrypt = require("bcryptjs")

module.exports= [
    check("email")
        .isEmail()
        .withMessage("debes ingresar un email valido"),
    
    check("password")
        .notEmpty()
        .withMessage("debes ingresar una contraseña"),

    body("password")
        .custom((value, {req})=>{
            let user = usuarios.find(user => user.email === req.body.email)
            if (user) {
                return bcrypt.compareSync(value, user.password)
            }else{
                return false
            }
        })
        .withMessage("credenciales invalidas")
        
]