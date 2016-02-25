supertest = require "supertest-as-promised"
ctx = module.exports = Object.assign({}, require "../src/context")
config = require "config"
app = require "../src/app"
ctx.agent = (require "supertest-as-promised") app.callback()
ctx.uuid = require "uuid"
assert = ctx.assert = require "assert"
ctx.db = (require "../src/services/db")(config.get("db"), ctx)
ctx.models = ctx.db.models
