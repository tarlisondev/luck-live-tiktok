
const Raffle = require("../models/raffle");
const User = require("../models/user");

const findRaffle = async (_, res) => {
    try {
        const raffle = await Raffle.findOne();
        const users = await User.find();

        if(!raffle){
            return  res.render("pages/error", {error: "Nâo há rifa para ser exibido."})
        }

        let subQuotas = Number(raffle.quotas - users.length);

        const percentage = ((subQuotas / (users.length + subQuotas)) * 100).toFixed(2);

        res.render("pages/raffle", { title: raffle.title, description: raffle.description, image: raffle.image, percentage });
    } catch (error) { console.log("Error no controller raffle: ") }
}

module.exports = findRaffle;
