
const Login = require("../models/login");
const bcrypt = require("bcrypt");

const postLogin = async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).render("pages/error", { error: "Email e senha são obrigatório" });
    }

    const login = await Login.findOne({ email: email });

    if (!login) {
        return res.status(422).render("pages/error", { error: "Email ou senha invalidos" })
    }

    const comparePassword = bcrypt.compare(password, login.password);

    if (!comparePassword) {
        return res.status(422).render("pages/error", { error: "Email ou senha invalidos" });
    }

    req.session.login = email;

    res.redirect("/")
}

const getLogin = async (req, res) => {
    res.render("pages/login",{title: "Iniciar sessão", btn: "Logar"});
}


module.exports = {
    getLogin, postLogin,
}
