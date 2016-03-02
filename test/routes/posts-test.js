const ctx = require("../context");
const config = require("config");
ctx.db = require("../../lib/services/db")(config.get("db"), ctx);
ctx.models = ctx.db.models;
// const POSTS = require("../../data/posts.json");
const assert = ctx.assert;
const uuid = require("uuid");


describe("GET /posts", () => {

	it("Brings back last 4 posts", () => {
		return ctx.agent.get("/posts")
		.query({ page: '1' })
		.then ( (res) => {
			assert.equal(res.status, 200)
			assert.ok(Array.isArray(res.body.posts), "posts is an array")
			assert.ok((res.body.posts.length < 5), "Last 4 posts shown");
		});
	});
});

describe("GET /posts/:id", () => {

	it("Brings back a specific post", () => {
		var id = uuid.v4();
		return ctx.agent.get("/posts/${id}")
		.then ( (res) => {
			assert.equal(res.status, 200)
			assert.ok((typeof res.body.post === "object") && (res.body.post !== null), "Post is object")
			console.log(res.body.post);
			assert.ok(Object.keys(res.body.post).length < 7 ,"One post shown");
		});
	});
});
