ctx = require "../context"
uuid = require "uuid"
assert = require "assert"
config = require "config"
ctx.db = (require "../../src/services/db")(config.get("db"), ctx)
ctx.models = ctx.db.models
#posts= require "posts.json"


before =>
	id = uuid.v4()
	ctx.models.Post.bulkCreate [
		{"id": id, "title":"foobar", "content": "bazbarbazbarbazbar"}
		{"id": id, "title":"barbaz", "content": "foofoofoofoofoofoofoo"}
		{"id": id, "title":"bazfoo", "content": "barbarbarbarbarbarbar"}
		{"id": id, "title":"foobaz", "content": "bazfoobazfoobazfoobazfoo"}
		{"id": id, "title":"barfoo", "content": "bazbazbazbazbazbazbaz"}
	], ignoreDuplicates: yes

describe "GET /posts", ->
	it "Brings back last 4 posts", ->
		ctx.agent.get "/posts"
		.then (res) ->
			assert.equal(res.status, 200)
			assert.ok(Array.isArray(res.body.posts), "posts is an array")
			assert.ok(res.body.posts.length < 5, "Last 4 posts shown")
