const {check, body} = require("express-validator")
const {} = require("../controllers/data/dataFS")
const usuarios = require("../controllers/data/users.json")
const bcrypt = require("bcryptjs")
const req = require("express/lib/request")
const db = require('../database/models')

module.exports=[
    check ("nombre")
        .notEmpty()
        .withMessage("Debes ingresar tu nombre de usuario"),

    check('email')
    .notEmpty().withMessage('Debes ingresar tu email').bail()
    .isEmail().withMessage('Email no válido').bail()
    .custom(value => {
        return db.User.findOne({
          where : {
            email : value
          }
        }).then(user => {
          if(user){
            return Promise.reject()
          }
        }).catch(() => Promise.reject('Este email ya se encuentra registrado!'))
    }),
    
    check ("password")
        .notEmpty()
        .withMessage("debes ingresar una contraseña"),
    
]
