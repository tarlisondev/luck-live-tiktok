
const notFoundRouter = (req, res) => {
    res.status(404).render("pages/error", {error: "Pagina não encontrada."});
}

const internalError = (err, req, res, next) => {
    res.status(500).render("pages/error", {error: "Erro desconhecido, tente novamente mais tarde"});
}

module.exports = {notFoundRouter, internalError}