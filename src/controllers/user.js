
const User = require("../models/user");

const findUsers = async (req, res) => {
    try {
        res.render("pages/user", { data: await User.find(), title: "Todas as cotas" })
    } catch (error) { console.log("Error no findUsers: ", error) }
}

const findName = async (req, res) => {

    const { name } = req.params;

    if (!name) {
        return res.status(400).render("pages/error", { error: "Username é obrigatório" })
    }

    try {
        const quotas = await User.find({name: name});

        if(quotas.length === 0){
            return res.render("pages/error", {error: "Usuario não encontrado."})
        }
        res.render("pages/user", { data: quotas, title: "Cotas do usuario: @" + name });
    } catch (error) {console.log("Error no findName: ", error) }
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
    } catch (error) { console.log("Error no findNumber: ", error) }
}

module.exports = {
    findUsers,
    findName,
    findNumber
}