const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const config = require("./config/config");
const router = require("./routes/raffle");
const connection = require("./models/conn");

const server = express();

server.use(express.json());
server.use(cors({ origin: config.origin }));
server.use(express.urlencoded({ extended: false }));
server.use("/public", express.static(path.join(__dirname, "../public")));
server.use(helmet());

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(router);

connection
    .then(() => {
        server.listen(config.port || 4000);
    })
    .catch((error) => {
        console.log("Error in Connection Db", error)
    })
