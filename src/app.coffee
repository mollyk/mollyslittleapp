app = module.exports = require "koa"()

Object.assign app.context, require "./context"

# Mount routes
 router = require "./routes"
 app.use router.routes()
 app.use allowedMethods()
 app.on "error", err -> console.error (err)

 # Check if running as main and listen for connections
 if require.main == module
	 config = require "config"
	 port = config.get "app.port"
	 app.listen port
	 console.log "#{config.get "app.name"} listening on #{port}"

	 
