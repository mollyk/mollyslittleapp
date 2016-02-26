co = require "co"
{exec} = require "child_process"

option "-f", "--force", "Force db update"

task "db-sync", "Sync database", (options) ->

	{db} = require "./lib/context"
	co ->
		yield db.sync force: options.force
		yield db.models.Role.bulkCreate [
				{id: "admin", description: "An administrator", title:"admin"}
				{id: "guest", description: "A guest", title:"guest"}
				{id: "editor", description: "An editor", title:"editor"}
			], ignoreDuplicates: yes

	.then ->
		console.log "Done syncing!"
		process.exit()
	.catch (err) ->
		console.log err
		process.exit 1
