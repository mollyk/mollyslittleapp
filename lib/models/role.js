module.exports = (sqlz, DataTypes) => {

	const Role = sqlz.define("Role", {
		id: {
			type: DataTypes.STRING(40),
			primaryKey: true
		},
		description: {
			type: DataTypes.TEXT
		},
		title: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	});
	return Role;
}
