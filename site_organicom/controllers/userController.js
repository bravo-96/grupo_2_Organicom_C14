 const usuarios = require("./data/users.json")
const db = require("../database/models");
const bcrypt = require('bcryptjs');
const fs = require('fs');

  
module.exports = {
  register: async (req, res, ) => {
     db.User.findAll()
    await res.render("users/register", { session: req.session });
  },
  userCreate:(req, res)=>{ 
    db.User.create({
     ...req.body,
     pass : bcrypt.hashSync(pass, 10),
     rol: usuarios.rol = 'user',
     avatar : usuarios.avatar = 'default.png'
      })    
    .then(function(){        
       return res.redirect('/')
    })
  .catch(errors => console.log(errors))
},
login: async(req, res, ) => {
  db.User.findAll()
  return res.render("users/login-lateral");
},

  userLogin : (req, res) => {
    db.User.findByPk(req.params.id,{
      where : { email : req.body.email }
  })
  .then(user => {
     res.local.user = req.session.user;

     return res.redirect('/')
      
    })
    .catch(err => {console.log(err)});
     
},

  userEdit:(req, res)=>{
     db.User.findByPk(req.params.id)
    db.User.update({
       ...req.body,
      
    },{
       where : {id : req.params.id}
    })
    .then(user=>{
       res.redirect("/",{
          user       
       });
    })
    .catch(errors => console.log(errors))

    
 },
  userDelete:(req, res)=>{
    db.User.findAll()
    .then(function(users){

    })
  },




 
  // processRegister: (req, res, next) => {
  //   let lastId = 0;
  //   usuarios.forEach((user) => {
  //     if (user.id > lastId) {
  //       lastId = user.id;
  //     }
  //   });

  //   if (
  //     req.body.email &&
  //     req.body.nombre &&
  //     req.body.password !== "undefined"
  //   ) {
  //     let { nombre, email, number, password } = req.body;

  //     let newUser = {
  //       id: lastId + 1,
  //       nombre,
  //       email,
  //       number,
  //       password: bcrypt.hashSync(password, 10),
  //       rol: "user",
  //       avatar: "default.png",
  //       terminos: true,
  //     };

  //     usuarios.push(newUser);
  //     guardarUser(usuarios);

  //     res.redirect("/");
  //   } else {
  //     res.redirect("/users/register");
  //   }
  //   next();

  //   //SI HAY DUDAS, REVISAR EL ADMINCONTROLLER PARA ENTENDER COMO FUNCIONA, PARA TENER UNA REFERENCIA <3
  //   //FALTAN COSAS POR AGREGAR PERO LAS SUBO DE A POCO
  //   //armado de logica register Alex <3
  // },
  login: (req, res, next) => {
    return res.render("users/login-lateral");
  },
  processLogin: (req, res, next) => {
    /* let errors = validationResult(req); */
   /*  if (errors.isEmpty()) { */
      let { id, nombre, email, password, avatar, rol } = usuarios.find(
        (user) => user.email === req.body.email
      );
      
      req.session.user = {
        id,
        nombre,
        email,
        password,
        avatar,
        rol,
      };
      

      res.locals.user = req.session.user;
      res.redirect("/");
      
    /* } else { */
      /* res.send(errors); */
    /* } */
    
    /* next(); */
    
    //el next esta de mas
    //Logica del login consultas a Alex <3
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
    //Logica del logout consultas a Alex <3
  },

  profile: (req, res) => {
    let id = req.session.id;
    const users = JSON.parse(
      fs.readFileSync("./controllers/data/users.json", "utf-8")
    );
    const user = users.find((user) => user.id === id);

    return res.render("users/profile", {
      user,
      session: req.session,
    });
  },
};
