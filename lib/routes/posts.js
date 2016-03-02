// const POSTS = require("../../data/posts");
const ctx = require("../context");
const co = require("co");
const config = require("config");
ctx.db = require("../services/db")(config.get("db"), ctx);
ctx.models = ctx.db.models;

module.exports = function PostsRoutes (router) {

	router.get("/posts", function *(next) {
		var limit = this.query.limit || 4;
		var page = this.query.page || 1;
		var offset = (page - 1) * limit;
		const last_posts = yield ctx.models.Post.findAll({
			order: [['created_at', 'DESC']],
			limit: limit,
			offset: offset
		});
		this.response.body = {posts: last_posts};
		yield next;
	})

	router.get("/posts/:id", function *(next) {
		var id = this.params.id;
		var spec_post = yield ctx.models.Post.find({
				id: id
		});
		this.response.body = {post: spec_post};
		yield next;
	})

	// router.post()
}
