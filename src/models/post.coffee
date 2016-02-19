module.exports = (sqlz, DataTypes) ->

	Post = sqlz.define "Post",
		id:
			type: DataTypes.STRING(40)
			primaryKey: true
		content:
			type: DataTypes.TEXT

	Post
