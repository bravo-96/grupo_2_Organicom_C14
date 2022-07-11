const carousel =  require('../controllers/data/cards');




module.exports = {
   index: (req, res, next) => {
      db.Producto.findAll({
         include : ["categoria", "imagenes"]
      })
      .then((productos) =>{
         /* res.send(productos) */
         res.render('index', {
            title: 'Organicom',
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
}

