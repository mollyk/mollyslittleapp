// const POSTS = require("../../data/posts");
const ctx = require("../context");
const co = require("co");
const config = require("config");
ctx.db = require("../services/db")(config.get("db"), ctx);
ctx.models = ctx.db.models;

module.exports = function PostsRoutes (router) {

	router.get("/posts", function *(next) {
		const post = ctx.models.Post;
		const last_posts = yield post.find({
			order: ['created_At', 'DESC']
		});

		this.response.body = {posts: last_posts};
		yield next;
	})

	// router.post()
}
