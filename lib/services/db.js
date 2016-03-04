const Sequelize = require("sequelize");
const config = require("config");
const debuglog = require("util").debuglog;
const DB_URL = config.get("db");

module.exports = function (ctx) {
	var sqlz = new Sequelize(DB_URL, {
		logging: debuglog("sql"),
		define: {
			timestamps: true,
			underscored: true,
			underscoredAll: true
		}
	});
	require(`${__dirname}/../models/index`)(sqlz);
	return sqlz;
}
