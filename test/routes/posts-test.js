const ctx = require("../context");
const config = require("config");
ctx.db = require("../../lib/services/db")(config.get("db"), ctx);
ctx.models = ctx.db.models;
// const POSTS = require("../../data/posts.json");
const assert = ctx.assert;


describe("GET /posts", () => {
	before(() => {
		return ctx.models.Post.bulkCreate(
			{ ignoreDuplicates: true }
		)
	});

	it("Brings back last 4 posts", () => {
		return ctx.agent.get("/posts")
		.then ( (res) => {
			assert.equal(res.status, 200)
			assert.ok(Array.isArray(res.body.posts), "posts is an array")
			assert.ok((res.body.posts.length < 5), "Last 4 posts shown");
		});
	});
});
