const { validationResult } = require("express-validator");

const db = require("../database/models");
const bcrypt = require("bcryptjs");

module.exports = {
  register: (req, res) => {
    return res.render("users/register", { session: req.session });
  },
  userCreate: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const { email, nombre,telefono, password } = req.body;

      db.User.create({
        nombre: nombre.trim(),
        email: email.trim(),
        telefono,
        password: bcrypt.hashSync(password, 10),
        rol: "user",
        avatar: "default.png",
      })
        .then(function () {
          return res.redirect("/");
        })
        .catch((errors) => console.log(errors));
    } else {
      res.render("/", {
        session: req.session,
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },

  login: (req, res) => {
    return res.render("/users/login-lateral");
  },

  userLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.User.findOne({
        where: { email: req.body.email },
      })
        .then((user) => {
          req.session.user = {
            id: user.id,
            nombre: user.nombre,
            avatar: user.avatar,
            rol: user.rol,
          };
          if (req.body.recuerdame) {
            res.cookie("organicom", req.session.user, { maxAge: 1000 * 60 * 2 });
          }
          res.locals.user = req.session.user;
          res.redirect("/");
        })
        .catch((errors) => console.log(errors));
    }else {
      res.render('',{
        errors: errors.mapped(),
        old : req.body
      })
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
