
const User = require("../models/user");

const findUsers = async (req, res) => {
    try {
        res.render("pages/user", { data: await User.find(), title: "Todas as cotas" })
    } catch (error) { console.log("Error no controller/findUsers: ") }
}

const findName = async (req, res) => {

    const { name } = req.params;

    if (!name) {
        return res.status(400).render("pages/error", { error: "Username é obrigatório" })
    }

    try {
        const quotas = await User.find({name: name.toLowerCase()});

        if(quotas.length === 0){
            return res.render("pages/error", {error: "Usuario não encontrado."})
        }
        res.render("pages/user", { data: quotas, title: "Cotas de : @" + name.toLowerCase() });
    } catch (error) {console.log("Error no controller/findName: ") }
}

const findNumber = async (req, res) => {

    const { number } = req.params;

    if (!number || number !== 6) {
        return res.status(400).render("pages/error", { error: "Um numero é obrigatório" });
    }

    try {
        const quotas = await User.find({number: number});
        console.log(quotas)

        if(quotas.length === 0){
            return res.render("pages/error", {error: "Numero não encontrado."})
        }
        res.render("pages/user", { data: quotas, title: "Cota vencedora" })
    } catch (error) { console.log("Error no controller/findNumber: ") }
}

module.exports = {
    findUsers,
    findName,
    findNumber
}