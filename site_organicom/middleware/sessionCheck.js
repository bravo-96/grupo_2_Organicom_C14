

module.exports = {
    inSession : (req, res, next)=>{
        if (req.session.user) {
            res.redirect("/")
        }else{
            next()
        }
    },
    offSession : (req,res,next)=>{
        if (typeof req.session.user === "undefined") {
            res.redirect("/")
        }else{
            next()
        }
    },
    soloAdmin : (req,res,next)=>{
        if (req.session.user.rol !== "admin") {
            res.redirect("/")
        }else{
            next()
        }
    }
}

//exporte la logica para llamarla cuando quiera
//para no tener tanto codigo en un solo lugar, puede confundir, solo por eso