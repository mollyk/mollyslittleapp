supertest = require "supertest-as-promised"
ctx = module.exports = Object.assign({}, require "../lib/context")
config = require "config"
app = require "../lib/app"
ctx.agent = (require "supertest-as-promised") app.callback()
ctx.uuid = require "uuid"
assert = ctx.assert = require "assert"
ctx.db = (require "../lib/services/db")(config.get("db"), ctx)
ctx.models = ctx.db.models
