ASSOCIATE = Symbol.for("SQLZ_ASSOC");


#const models = [
#	"post",
#	"role",
#	"user"
#];*/

module.exports = (sqlz) ->



	sqlz.import "./#{m}" for m in [
		"user"
		"role"
		"post"
	]

	for name, model of sqlz.models when "function" is typeof model[ASSOCIATE]
		model[ASSOCIATE] sqlz.models
