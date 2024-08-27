const Raffle = require("../models/raffle");
const { randomNumber } = require("../services/service");

// Pega rifas
const findRaffle = async (_, res) => {
    try {
        res.render("pages/raffle", { data: await Raffle.find(), title: "Todas as rifas" });
    } catch (error) { console.log(error) }
}

const createRaffle = async (req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const amount = req.body.amount;
    const image = req.file.filename;

    if (!title || !description || !amount || !image) {
        return res.status(400).render("pages/error", { error: "Todos os campos são obrigatórios" });
    }

    try {
        await Raffle.create({
            title, description, amount, image, numbers: randomNumber(amount),
        })

        res.redirect("/");
    } catch (error) { }
}

// Renderizar formario
const create = (_, res) => res.render("pages/create", {title: "Raffle"});
const home = (_, res) => res.render("pages/home", { title: "Home" });

module.exports = {
    findRaffle,
    createRaffle,
    create,
    home,
}