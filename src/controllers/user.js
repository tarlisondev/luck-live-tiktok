
const User = require("../models/user");

const findUsers = async (req, res) => {
    try {
        res.render("pages/user", { data: await User.find(), title: "Todas as cotas" })
    } catch (error) { console.log(error) }
}

const findName = async (req, res) => {

    const { name } = req.params;

    if (!name) {
        return res.status(400).render("pages/error", { error: "Username é obrigatório" })
    }

    try {
        res.render("pages/user", { data: await User.find({ name: name }), title: "Cotas do usuario: @" + name });
    } catch (error) { }
}

const findNumber = async (req, res) => {

    const { number } = req.params;

    if (!number || number !== 6) {
        return res.status(400).render("pages/error", { error: "Um numero é obrigatório" });
    }

    try {
        res.render("pages/user", { data: await User.find({ number: number }), title: "Cota vencedora" })
    } catch (error) { }
}

module.exports = {
    findUsers,
    findName,
    findNumber
}