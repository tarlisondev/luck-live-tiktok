const { connect } = require("mongoose");
const config = require("../config/config");

module.exports = connect(config.url);
