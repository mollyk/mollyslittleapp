module.exports = (sqlz, DataTypes) ->

	Role = sqlz.define "Role",
		id:
			type: DataTypes.STRING(40)
			primaryKey: true

		description:
			type: DataTypes.TEXT

		title:
			type: DataTypes.TEXT
			allowNull: no


	Role
