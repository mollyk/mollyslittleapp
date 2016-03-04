const koa = require("koa");
const app = module.exports = koa();
const http = require("http");
const config = require("config");
const port = config.get("app.port");
const bodyParser = require("koa-bodyparser");
const hbs = require('koa-hbs');
const serve = require('koa-static');

// Initialize app context
Object.assign(app.context, require("./context"));

// Set view engine
app.use(hbs.middleware({
  viewPath: __dirname + '/views'
}));

app.use(bodyParser());

app.use(serve(__dirname + '/public'));

// Mount routes
const router = require("./routes");
app.use(router.routes());
app.use(router.allowedMethods());
app.on("error", (err) => console.error(err));

app.listen(port);
console.log(`${config.get("app.name")} listening on ${port}`);
