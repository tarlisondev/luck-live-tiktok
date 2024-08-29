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
    quotas: {
        type: Number,
    },
});

const Raffle = model("Raffle", raffle);

module.exports = Raffle;

