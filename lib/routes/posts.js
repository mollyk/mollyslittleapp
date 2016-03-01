// const POSTS = require("../../data/posts");
const ctx = require("../context");
const co = require("co");
const config = require("config");
const tasks = require("../../tasks/sync-db");
ctx.db = require("../services/db")(config.get("db"), ctx);
ctx.models = ctx.db.models;

module.exports = function PostsRoutes (router) {

	router.get("/posts", function *(next) {
		const post = tasks.Post;
		const last_posts = yield post.findAll({
			order: ['created_at', 'DESC']
		});

		this.response.body = {posts: last_posts};
		yield next;
	})

	// router.post()
}
