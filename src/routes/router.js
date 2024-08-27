const { Router } = require("express");
const { home } = require("../controllers/raffle");

const raffleRouter = require("./raffle");
const userRouter = require("./user");
const loginRouter = require("./login");

const router = Router();

router.get("/", home) // Rota home

router.use("/raffle", raffleRouter); // Rota da Rifa
router.use("/user", userRouter); // Rota do User
router.use("/login", loginRouter); // Rota login

module.exports = router;
