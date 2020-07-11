const usersModel = require("../models/users.model")

const controller = {
	createUser: (req, res) => {
		const { name, password } = req.body;
		usersModel.createUser({name, password}).then(() =>
			res.json({ msg: "account created successfully" })
		)
	},
	getAllUsers: (req, res) => {
		usersModel.getAllUsers().then(user => res.json(user)); 
	},
	getUser: (req, res) => {
		usersModel.getUser();
	},
}

module.exports = controller;