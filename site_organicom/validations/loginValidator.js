const {check, body} = require("express-validator")
const {} = require("../controllers/data/dataFS")
const usuarios = require("../controllers/data/users.json")
const bcrypt = require("bcryptjs")
const db = require("../database/models");


module.exports= [

check('email')
.notEmpty().withMessage('Debes ingresar tu email').bail()
.isEmail().withMessage('Email no válido').bail()
.custom((value, {req}) => {
    return db.User.findOne({
      where : {
        email : value
      }
    }).then(user => {
      if(!user || !bcrypt.compareSync(req.body.password, user.password)){
        return Promise.reject()
      }
    }).catch(() => Promise.reject('Credenciales inválidas'))
}),

check ("password")
    .notEmpty()
    .withMessage("debes ingresar una contraseña"),
        
]