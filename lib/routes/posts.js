// const POSTS = require("../../data/posts");
const ctx = require("../context");
const co = require("co");
const config = require("config");
const uuid = require("uuid");
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
	});

	router.get("/posts/:id", function *(next) {
		var id = this.params.id;
		var spec_post = yield ctx.models.Post.find({
				id: id
		});
		this.response.body = {post: spec_post};
		yield next;
	});

	router.post("/posts", function *(next) {
		var new_title = this.request.body.title;
		var new_content = this.request.body.content;
		const new_post = yield ctx.models.Post.create({
			title: new_title,
			content: new_content
		});
		this.status = 201;
		this.response.body = new_post;
		yield next;
	});

	router.put("/posts/:id", function *(next) {
		var id = this.params.id;
		var post_exists = yield ctx.models.Post.findById(id);
		if (post_exists === null) {
			this.status = 404;
		} else {
			var edit_title = this.request.body.title;
			var edit_content = this.request.body.content;
			var edit_post = yield ctx.models.Post.update({
				title: edit_title,
				content: edit_content
			},
				{where: { id: id }}
			);
			this.status = 204;
		}
		yield next;
	});
}
