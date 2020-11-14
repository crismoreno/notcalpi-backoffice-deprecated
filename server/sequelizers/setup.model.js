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
			allowNull: false,
		},
		limit_related: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		currently_doing: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
		cv_share_link: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
		linkedin_link: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
		medium_link: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
		github_link: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
		instagram_link: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
		calendly_uri: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
		phone_num: {
			type: Sequelize.INTEGER,
      allowNull: false,
		},
		email: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
		heroku_frontOffice: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
		heroku_Backoffice: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
		github_backOffice: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
		github_frontOffice: {
			type: Sequelize.TEXT,
      allowNull: false,
		},
	}, {freezeTableName: true});
	return Setup;
};