ctx = module.exports = {}
config = ctx.config = require "config"
koa = require "koa"
app = module.exports = koa()
APP_NAME = config.get "app.name"
ctx.db = (require "./services/db")(config.get("db"), ctx)
ctx.models = ctx.db.models
