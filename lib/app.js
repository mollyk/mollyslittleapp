const koa = require("koa");
const app = module.exports = koa();
const http = require("http");
const config = require("config");
const port = config.get("app.port");

// Initialize app context
Object.assign(app.context, require("./context"));

// Mount routes
const router = require("./routes");
app.use(router.routes());
app.use(router.allowedMethods());
app.on("error", (err) => console.error(err));

app.listen(port);
console.log(`${config.get("app.name")} listening on ${port}`);
