const fs = require ("fs");

module.exports={
    getProductos  : JSON.parse(fs.readFileSync("./controllers/data/productos.json","utf-8")),
    guardarProductos : (dataBase)=> {fs.writeFileSync("./controllers/data/productos.json",JSON.stringify(dataBase))}

}