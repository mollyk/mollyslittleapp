module.exports = (sqlz, DataTypes) ->

	User = sqlz.define "User",
		id:
			type: DataTypes.STRING(40)
			primaryKey: true
			autoIncrement: true
		name:
			type: DataTypes.STRING(40)


		User [Symbol.for "SQLZ_ASSOC"] = (models) ->
			User.belongTo(models.Role)
			User.belongsTo(models.Post)
	User
