const ctx = module.exports = {};
const config = ctx.config = require("config");
const app = require("./app");
ctx.db = require("./services/db")(ctx);
ctx.models = ctx.db.models;
