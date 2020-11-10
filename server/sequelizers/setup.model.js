module.exports = (sequelize, Sequelize) => {
	// create config model
	const Setup = sequelize.define("setup", {
		id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
		limit_featured: {
			type: Sequelize.INTEGER,
		},
		limit_related: {
			type: Sequelize.INTEGER,
		}
	}, {freezeTableName: true, timestamps: false});
	return Setup;
};