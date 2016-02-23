config = require "config"
APP_NAME = config.get "app.name"
ctx = module.exports = {}

ctx.db = (require "./services/db")(config.get("db"), ctx)
ctx.models = ctx.db.models
