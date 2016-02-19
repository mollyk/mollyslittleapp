module.exports = (sqlz, DataTypes) ->

	Post = sqlz.define "Post",
		id:
			type: DataTypes.STRING(40)
			primaryKey: true
		title:
			type: DataTypes.STRING(50)
		content:
			type: DataTypes.TEXT

	Post [Symbol.for "SQLZ_ASSOC"] = (models) ->
			Post.belongTo(models.User)

	Post
