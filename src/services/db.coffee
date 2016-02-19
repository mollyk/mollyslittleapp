Sequelize = require "sequelize"
config = require "config"
debuglog = require "util".debuglog
DB_URL = config.get "db"

module exports = (options, ctx) => {
	sqlz = new Sequelize DB_URL, {
		logging: debuglog "sql"
		define: {
			timestamps: true
			underscored: true
			underscoredAll: true
		}
	}
	sqlz.import "#{_dirname}/../models/index"
	sqlz
}
