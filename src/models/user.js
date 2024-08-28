const { Schema, model } = require("mongoose");

const user = new Schema({
    name: {
        type: String,
    },
    number: {
        type: String,
    }
});

const User = model("User", user);

module.exports = User;

