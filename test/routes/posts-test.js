const ctx = require("../context");
const POSTS = require("../../data/posts.json");
const assert = ctx.assert;


describe("GET /posts", () => {
	before(() => {
		return ctx.models.Post.bulkCreate(POSTS,
			{ ignoreDuplicates: true }
		)
	});

	it("Brings back last 4 posts", () => {
		return ctx.agent.get("/posts")
		.then ( res => {
			assert.equal(res.status, 200)
			assert.ok(Array.isArray(res.body.posts), "posts is an array")
			assert.ok((res.body.posts.length < 5), "Last 4 posts shown");
		});
	});
});
