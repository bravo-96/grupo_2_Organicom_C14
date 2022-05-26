const fs = require('fs');

module.exports = {
// ORSERVACION: Al hacer un require de un archivo JSON, automaticamente te los parsea a codigo Javascript

   guardarProductos: (dataBase) => {
      fs.writeFileSync(
         './controllers/data/productos.json',
         JSON.stringify(dataBase, null, 3)
      );
   },
   guardarUser: (codeBase) =>{
      fs.writeFileSync("./controllers/data/users.json", JSON.stringify(codeBase, null, 3));
   }
};

