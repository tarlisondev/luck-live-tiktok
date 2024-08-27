
const { Router } = require("express");
const { findUsers, findByUsername, numberLuck } = require("../controllers/user");

const userRouter = Router();

userRouter.get("/", findUsers);
userRouter.get("/:username", findByUsername); // Rota para pegar um usuario
userRouter.get("/luck/:number", numberLuck); // Rota para pegar numero

module.exports = userRouter;