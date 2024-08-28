
const Raffle = require("../models/raffle");

const findRaffle = async (_, res) => {
    try {
        const raffle = await Raffle.findOne();

        if(!raffle){
            return  res.render("pages/error", {error: "Nâo há rifa para ser exibido."})
        }

        const percentage = ((raffle.numbers.length / raffle.amount) * 100).toFixed(2);

        res.render("pages/raffle", { title: raffle.title, description: raffle.description, image: raffle.image, percentage });
    } catch (error) { console.log("Error no controller raffle: ", error) }
}

module.exports = findRaffle;
