const associate = Symbol.for("SQLZ_ASSOC");

module.exports = (sqlz, DataTypes) => {

	const User = sqlz.define("User", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		username: DataTypes.STRING(40),
		role_id: DataTypes.UUID
	});
	User[associate] = (models) => {
		User.belongsTo(models.Role);
		User.hasMany(models.Post);
	}
	return User;
}
