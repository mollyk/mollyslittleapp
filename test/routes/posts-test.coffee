ctx = require "../context"
uuid = require "uuid"
assert = require "assert"
config = require "config"
ctx.db = (require "../../lib/services/db")(config.get("db"), ctx)
ctx.models = ctx.db.models
POSTS = require "../../data/posts.json"

describe "GET /posts", ->
	before ->
		ctx.models.Post.bulkCreate POSTS,
			ignoreDuplicates: yes

	it "Brings back last 4 posts", ->
		ctx.agent.get "/posts"
		.then (res) ->
			assert.equal(res.status, 200)
			assert.ok(Array.isArray(res.body.posts), "posts is an array")
			assert.ok(res.body.posts.length < 5, "Last 4 posts shown")
