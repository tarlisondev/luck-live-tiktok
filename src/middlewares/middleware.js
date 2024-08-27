

const authorization = (req, res, next) => {

    if(req.session.login){
        next();
    }else{
        res.status(401).render("pages/error", {error: "Você não tem permissão para acessar."});
    }
}

module.exports = authorization;