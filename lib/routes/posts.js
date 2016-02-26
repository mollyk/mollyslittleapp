const POSTS = require("../../data/posts");

module.exports = function PostsRoutes (router) {

	router.get("/posts", function *(next) {
		var last_4_posts = POSTS.slice(0,4);
		this.response.body = {posts: last_4_posts};
		yield next;
	})
}
