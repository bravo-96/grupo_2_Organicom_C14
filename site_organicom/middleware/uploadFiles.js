let multer = require ("multer");
let path = require ("path")

let storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"./public/assets/img")
    },
    filename : (req,file,cb)=>{
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const uploadFile = multer({storage})

module.exports = uploadFile