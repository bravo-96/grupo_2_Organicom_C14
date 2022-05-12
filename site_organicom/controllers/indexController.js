const carousel =  require('../data/cards');


module.exports = {
    index : (req,res) => 
    res.render('index',{
        title: 'Home',
        carousel,
        
    
    })
}