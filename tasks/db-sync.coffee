ctx = require "../src/context"

	*() ->
		yield ctx.db.sync
