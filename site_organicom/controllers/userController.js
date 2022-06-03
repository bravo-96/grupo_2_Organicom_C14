const fs = require('fs');
const usuarios = require("./data/users.json")
let {guardarUser}= require("./data/dataFS")

//armado de logica register Alex <3
module.exports = {
   register: (req, res, next) => {
      return res.render('users/register');
   },
   processRegister : (req, res, next)=>{

      let lastId = 0;
      usuarios.forEach(user => {
          if (user.id > lastId) {
             lastId = user.id
          }
      });
      
      let {nombre, email, number, password} = req.body

      let newUser = {
         id : lastId + 1,
         nombre,
         email,
         number,
         password,
         rol : "user",
         avatar : "default.png"
      };
      usuarios.push(newUser);
      guardarUser(usuarios)

      res.redirect("/")
   //SI HAY DUDAS, REVISAR EL ADMINCONTROLLER PARA ENTENDER COMO FUNCIONA, PARA TENER UNA REFERENCIA <3
   //FALTAN COSAS POR AGREGAR PERO LAS SUBO DE A POCO
   //armado de logica register Alex <3
   },
   login : (req, res, next)=>{
      return res.render("users/login-lateral")
   },
   processLogin : (req, res, next)=>{

   }
   
};
