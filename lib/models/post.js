const associate = Symbol.for("SQLZ_ASSOC");

module.exports = (sqlz, DataTypes) => {

	const Post = sqlz.define("Post", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		user_id: DataTypes.INTEGER
	});
	Post[associate] = (models) => {
		Post.belongsTo(models.User);
	};
	return Post;
}
