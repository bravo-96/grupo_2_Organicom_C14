const productos = require('../controllers/data/productos.json');

module.exports = {
   index: (req, res, next) => {
      return res.render('index', { title: 'Organicom', productos });
   },
};
