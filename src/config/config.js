require('dotenv/config');

const config = {
    port: process.env.PORT,
    url: process.env.URL,
    origin: process.env.ORIGIN,
}

module.exports = config;