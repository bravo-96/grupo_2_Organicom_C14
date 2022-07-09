const productos = require('../controllers/data/productos.json');
const db = require("../database/models")
//const {categoria} = require("../database/models");

module.exports = {
   index: (req, res, next) => {
      db.Producto.findAll({
         include : ["categoria"]
      })
      .then(productos =>{
         /* res.send(productos) */
         res.render('index', {
            productos,
            session : req.session
         });
      })
      .catch(errors => console.log(errors))
      /* return res.render('index',
      { title: 'Organicom', 
      productos, 
      session : req.session }); */
   }
};
