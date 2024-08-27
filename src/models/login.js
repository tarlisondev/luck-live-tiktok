const { Schema, model } = require("mongoose");

const login = new Schema({
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    },
    token: {
        type: String,
        unique: true,
    }
})

const Login = model("Login", login);

module.exports = Login;