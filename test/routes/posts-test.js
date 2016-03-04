const ctx = require("../context");
const config = require("config");
ctx.db = require("../../lib/services/db")(config.get("db"), ctx);
ctx.models = ctx.db.models;
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
			assert.ok((typeof res.body.post === "object") && (res.body.post !== null), "Post is object");
		});
	});
});

describe("POST /posts", () =>{
	it("Creates new post", () => {
		return ctx.agent.post("/posts")
		.send({ title: 'New Post Title 1',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' })
		.then ( (res) => {
			assert.ok(true, 'yeah')
			assert.equal(res.status, 201)
			assert.ok(res.body.new_post !== null, "The body is not null");
		});
	});
});

describe("PUT /posts/:id", () => {
	var id = "1e659b39-d76a-4bdf-bea4-f48af6e86c88";
	it("Edits existing post", () => {
		return ctx.agent.put("/posts/${id}")
		.send({ title: 'I changed my mind',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' })
		.then ( (res) => {
			assert.ok(res.status, 204)
		})
	});
});
