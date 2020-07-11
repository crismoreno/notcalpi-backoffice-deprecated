
module.exports = (sequelize, Sequelize) => {
	// create user model
	const User = sequelize.define("user", {
		name: {
			type: Sequelize.STRING,
		},
		password: {
			type: Sequelize.STRING,
		},
	});
	return User;
};