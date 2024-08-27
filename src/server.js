const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const session = require("express-session")
const config = require("./config/config");
require("./controllers/tiktok");


const router = require("./routes/router");
const connection = require("./models/connection");
const { notFoundRouter, internalError } = require("./routes/error");

const server = express();

server.use(express.json());
server.use(cors({ origin: config.origin }));
server.use(express.urlencoded({ extended: false }));
server.use("/public", express.static(path.join(__dirname, "../public")));
server.use(helmet());

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(session({
    secret: "gato de bota",
    saveUninitialized: false,
    resave: false,
}))

server.use(router);

router.use(notFoundRouter); // error de rota
router.use(internalError); // error interno server

connection
    .then(() => {
        server.listen(config.port || 4000);
    })
    .catch((error) => {
        console.log("Error in Connection Db", error)
    })
