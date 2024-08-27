const { connect } = require("mongoose");
const config = require("../config/config");

const connection = connect(config.url);

module.exports = connection;
