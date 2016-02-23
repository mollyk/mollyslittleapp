Sequelize = require "sequelize"
config = require "config"
{debuglog} = require "util"
DB_URL = config.get "db"

module.exports = (options, ctx) ->
	sqlz = new Sequelize DB_URL, {
		logging: debuglog "sql"
		define:
			timestamps: yes
			underscored: yes
			underscoredAll: yes

	}
	require("../models") sqlz
	sqlz
