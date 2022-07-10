const carousel =  require('../controllers/data/cards');




module.exports = {
   index : (req,res) => 
   res.render('index',{
       title: 'Organicom',
       carousel,
           
   }
)
}
