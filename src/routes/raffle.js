const { Router } = require("express");

const findRaffle = require("../controllers/raffle");
const { notFoundRouter, internalError } = require("./error");
const routeUser = require("./user");

const router = Router();

router.get("/", findRaffle);
router.use("/user", routeUser);

router.use(notFoundRouter);
router.use(internalError);

module.exports = router;
