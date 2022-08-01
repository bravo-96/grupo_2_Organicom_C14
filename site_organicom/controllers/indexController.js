const carousel =  require('../controllers/data/cards');
const db = require('../database/models');



module.exports = {
   index: (req, res, next) => {
      db.Producto.findAll({
         include : ["categoria", "imagenes"]
      })
      .then((producto) =>{
         /* res.send(productos) */
         res.render('index', {
            title: 'Organicom',
            producto,
            session : req.session
         });
      })
      .catch(errors => console.log(errors))
      /* return res.render('index',
      { title: 'Organicom', 
      productos, 
      session : req.session }); */
   }
}

