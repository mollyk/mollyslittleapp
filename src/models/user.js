const associate = Symbol.for("SQLZ_ASSOC");

module.exports = (sqlz, DataTypes) => {

	const User = sqlz.define("User", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING(40)
		}
	});
	User[associate] = (models) => {
		User.belongsTo(models.Role);
	}
	return User;
}
