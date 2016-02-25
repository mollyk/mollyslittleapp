const ctx = module.exports = {};
const config = ctx.config = require("config");

ctx.db = require("./services/db")(config.get("db"), ctx);
ctx.models = ctx.db.models;
