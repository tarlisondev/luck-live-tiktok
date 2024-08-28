const { Schema, model } = require("mongoose");

const raffle = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    winner: {
        type: String,
        default: "",
    },
    amount: {
        type: Number,
    },
    numbers: [String],
});

const Raffle = model("Raffle", raffle);

module.exports = Raffle;

