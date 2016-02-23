ASSOCIATE = Symbol.for "SQLZ_ASSOC"

module.exports = (sqlz) ->

	sqlz.import "./#{m}" for m in [
		"user"
		"role"
		"post"
	]

	for m in sqlz.models when "function" is typeof m[associate]
		m[associate] sqlz.models
