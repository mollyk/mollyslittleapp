const router = module.exports = require("koa-router")();
const ctx = require("../context");
const config = require("config");

const routes = [
	"posts"
]

routes.forEach( r => require(`./${r}`).call(ctx, router) );
