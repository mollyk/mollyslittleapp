koa = require "koa"
app = module.exports = koa()
http = require "http"
config = require "config"
port = config.get "app.port"


# Initialize app context
Object.assign app.context, require "./context"


# Mount routes
router = require "./routes"
app.use router.routes()
app.use router.allowedMethods()

# Set view engine
#app.set "views", __dirname + "/views"
#app.set "view engine", "jade"

# Check if running as main and listen for connections
#if require.main is module

app.listen port
console.log "#{config.get "app.name"} listening on #{port}"
