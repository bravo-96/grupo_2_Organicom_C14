const { validationResult } = require("express-validator");

const db = require("../database/models");
const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res, ) => {
    return res.render("users/register", { session: req.session });
  },
  userCreate:(req, res)=>{

    let errors = validationResult(req);

    if(errors.isEmpty()){
      const {nombre, email, telefono, password, } = req.body;

      db.User.create({
       nombre : nombre.trim(),
       email : email.trim(),
       telefono,
       password : bcrypt.hashSync(password,10),
       rol: 'user',
       avatar : 'default.png'
        })    
      .then(function(){        
          return res.redirect('/')
      })
    .catch(errors => console.log(errors))
    }else{
      return res.render("users/register", { 
        session: req.session,
        errors : errors.mapped(),
        old : req.body
      });

    }
   
},
login: (req, res, ) => {  
  return res.render("/users/login-lateral");
},
  userLogin : (req, res) => {
    let errors = validationResult(req)
    if (errors.isEmpty()){
      db.User.findOne({
            where : { email : req.body.email }
        })
        .then(user => {
            req.session.user = {
                id : user.id,
                nombre : user.nombre,          
                avatar : user.avatar,
                rol : user.rol
            }
            if(req.body.recuerdame){
              res.cookie('organicom',req.session.user,{maxAge:1000*60*2})
            }
            res.locals.user = req.session.user;
            res.redirect('/')
        })
        .catch(errors => console.log(errors))
    }else{
        res.render('users/login', {
            errors : errors.mapped(),
            old : req.body,
            session : req.session
        })
        .catch((errors) => console.log(errors));
    }
  },

  userDelete: (req, res) => {
    db.User.findAll().then(function (users) {});
  },

 
  
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
    //Logica del logout consultas a Alex <3
  },

  userEdit: (req, res) => {
    let id = req.session.id;
    db.User.findOne({
      where : {
        id : req.session.user.id
      }
    }).then(user => {
      return res.render("users/profile", {
        user,
        session: req.session,
      });
    })
  },
  userUpdate : (req,res) => {
    db.User.update(
      {
        nombre : req.body.nombre,
        telefono : req.body.telefono
      },
      {
        where : {
          id : req.session.user.id
        }
      }
    )
      .then(() => {
        req.session.user.nombre = req.body.nombre;
        return res.redirect('/users/userEdit')
      })
      .catch(error => console.log(error))
  }
};
