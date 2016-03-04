const ctx = require("../context");


module.exports = function ViewRoutes (router) {

	router.get("/", function *(next) {
		yield this.render('index', {title: 'Molly Did it!'});
	});
};
