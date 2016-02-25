const Sequelize = require("sequelize");
const config = require("config");
const debuglog = require("util").debuglog;
const DB_URL = config.get("db");

module.exports = function (options, ctx) {
	var sqlz = new Sequelize(DB_URL, {
		logging: debuglog("sql"),
		define: {
			timestamps: true,
			underscored: true,
			underscoredAll: true
		}
	});
	require("../models")(sqlz);
	return sqlz;
}
