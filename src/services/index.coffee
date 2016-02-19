config = require "config"

module.exports = services =
	config: config
	db: (require "./db") config.get "sqlz"
	
