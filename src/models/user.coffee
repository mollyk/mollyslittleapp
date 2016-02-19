module.exports = (sqlz, DataTypes) ->

	User = sqlz.define "User",
		id:
			type: DataTypes
			primaryKey: true

		name: DataTypes.STRING
		User
