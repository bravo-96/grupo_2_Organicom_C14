const {check, body} = require("express-validator");
const {} = require("../controllers/data/dataFS");
const bcrypt = require("bcryptjs");
const db = require("../database/models");


module.exports=[
    check ("nombre")
        .notEmpty()
        .withMessage("Debes ingresar tu nombre de usuario"),

    check ("email")
        .notEmpty().withMessage('Debes ingresar tu email').bail()
        .isEmail().withMessage('Email no es valido').bail()
        .custom((value) =>{
            return db.User.findOne({
                where : {
                    email : value
                }
            }).then(user =>{
            if(user){
                return Promise.reject()
            }
        }).catch( () => Promise.reject("El email ya esta registrado"))
        }),
    check ("password")
        .notEmpty()
        .withMessage("debes ingresar una contraseña"),


    
]
