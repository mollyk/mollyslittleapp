ASSOCIATE = Symbol.for "SQLZ_ASSOC"

module.exports = (sqlz, DataTypes) ->

	Post = sqlz.define "Post",
		id:
			type: DataTypes.STRING(40)
			primaryKey: true
		title:
			type: DataTypes.STRING(50)
			allowNull: no
		content:
			type: DataTypes.TEXT
			allowNull: no

	Post[ASSOCIATE] = (models) ->
			Post.belongsTo(models.User)

	Post
