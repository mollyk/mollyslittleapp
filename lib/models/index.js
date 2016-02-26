const associate = Symbol.for("SQLZ_ASSOC");


const models = [
	"post",
	"role",
	"user"
];

module.exports = function (sqlz) {
	// Define all models, filter and associate
	models.map ( m => sqlz.import(`./${m}`) )
		.filter( m => "function" == typeof m[associate] )
		.map ( m => m[associate](sqlz.models));

}
