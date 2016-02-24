config = require "config"
ctx = module.exports = {}
koa = require "koa"
app = module.exports = koa()
APP_NAME = config.get "app.name"
ctx.agent = (require "supertest-as-promised")(app.callback())
ctx.db = (require "./services/db")(config.get("db"), ctx)
ctx.models = ctx.db.models
