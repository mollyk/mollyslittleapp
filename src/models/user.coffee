ASSOCIATE = Symbol.for "SQLZ_ASSOC"

module.exports = (sqlz, DataTypes) ->

	User = sqlz.define "User",
		id:
			type: DataTypes.INTEGER
			primaryKey: true
			autoIncrement: true
			allowNull: no

		username:
			type: DataTypes.STRING(40)


	User[ASSOCIATE] = (models) ->
			User.belongsTo(models.Role)

	User
