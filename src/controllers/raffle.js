
const Raffle = require("../models/raffle");

const findRaffle = async (_, res) => {
    try {
        res.render("pages/raffle", { data: await Raffle.find(), title: "Rifas" });
    } catch (error) { console.log(error) }
}

module.exports = findRaffle;
