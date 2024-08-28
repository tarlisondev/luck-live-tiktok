
const Raffle = require("../models/raffle");

const findRaffle = async (_, res) => {
    try {
        const raffle = await Raffle.findOne();
        let percentual = ((raffle.numbers.length / raffle.amount) * 100).toFixed(2);

        console.log(percentual+"%");

        res.render("pages/raffle", { data: raffle, percentual: percentual, title: "Rifas",  });
    } catch (error) { console.log(error) }
}

module.exports = findRaffle;
