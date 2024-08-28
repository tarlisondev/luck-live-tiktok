
const { Router } = require("express");
const { findUsers, findName, findNumber } = require("../controllers/user");

const userRouter = Router();

userRouter.get("/", findUsers);
userRouter.get("/:name", findName);
userRouter.get("/luck/:number", findNumber);

module.exports = userRouter;