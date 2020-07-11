const db = require("../sequelizers");
const Users = db.user;
const bcrypt = require('bcrypt');
const saltRounds = 10;


const model = {
	createUser: async ({ name, password }) => {
		bcrypt.hash(password, 10, async function(err, hash){
			password = hash;
			return await Users.create({ name, password });
	});
	},
	getAllUsers: async () => {
		return await Users.findAll();
	},
	getUser: async obj => {
		return await Users.findOne({
		where: obj,
	})
	},
}
module.exports = model;