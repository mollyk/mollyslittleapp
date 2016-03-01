const associate = Symbol.for("SQLZ_ASSOC");

module.exports = (sqlz, DataTypes) => {

	const Role = sqlz.define("Role", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
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
	Role[associate] = (models) => {
		Role.hasMany(models.User);
	};
	return Role;
}
