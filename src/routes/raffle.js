
const { Router } = require("express");

const { findRaffle, createRaffle, create } = require("../controllers/raffle");
const upload = require("../multer/upload");
const authorization = require("../middlewares/middleware");

const raffleRouter = Router();

raffleRouter.get("/", authorization, findRaffle);
raffleRouter.get("/create", authorization, create);
raffleRouter.post("/", authorization, upload, createRaffle);

module.exports = raffleRouter;
