
const { Router } = require("express");
const { postLogin, getLogin } = require("../controllers/login");

const loginRouter = Router();

loginRouter.get("/", getLogin);
loginRouter.post("/", postLogin);

module.exports = loginRouter;
