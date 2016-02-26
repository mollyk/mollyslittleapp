const associate = Symbol.for("SQLZ_ASSOC");


const models = [
	"post",
	"role",
	"user"
];

module.exports = function (sqlz) {

	for (m of models) {
		sqlz.import(`./${m}`);
	}

	var name = null;
	var model = null;
	for (name in sqlz.models) {
		model = sqlz.import(name;
		if ("function" === typeof model[associate]) {
			model[associate](sqlz.models)
		}
	}

}
