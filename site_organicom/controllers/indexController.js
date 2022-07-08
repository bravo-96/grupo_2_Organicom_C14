const productos = require('../controllers/data/productos.json');
const {producto} = require("../database/models")
module.exports = {
   index: (req, res, next) => {
      /* producto.findAll()
      .then(productos =>{ */
         res.render('index', {
            productos,
            session : req.session
           
         });
      //})
      /* return res.render('index',
      { title: 'Organicom', 
      productos, 
      session : req.session }); */
   }
};
