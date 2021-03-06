const usersModel = require("../models/users.model")
const bcrypt = require('bcrypt');

//AUTH STUFF COMES HERE
const jwt = require('jsonwebtoken');
// // import passport and passport-jwt modules
const passport = require("passport");
const passportJWT = require("passport-jwt");
// // ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;
// // JwtStrategy which is the strategy for the authentication
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";



// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log("payload received", jwt_payload);
  let user = usersModel.getUser({ id: jwt_payload.id });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
// use the strategy
passport.use(strategy);
//AUTH STUFF FINISHES HERE

const controller = {
	createUser: async (req, res) => {
		const { username, password, email } = req.body;
		let userExists = await usersModel.getUser({ email });
		if (userExists) {
			res.status(401).json({ msg: "This user is already in the system" });
		}else{
			usersModel.createUser({username, password, email}).then(() =>
				res.json({ msg: "account created successfully" })
			)
		}
	},
	loginUser: async (req, res, next) =>{
		const { password, email } = req.body;
		if (email && password) {
			let user = await usersModel.getUser({ email });
			if (!user) {
				res.status(401).json({ msg: "No such user found", user });
			}
			const match = await bcrypt.compare(password, user.password);
			if (match) {
				let payload = { id: user.id };
				let token = jwt.sign(payload, jwtOptions.secretOrKey);
				res.json({ msg: "Log in was successful", token: token, username: user.username });
			} else {
				res.status(401).json({ msg: "Password is incorrect" });
			}
		}
	},
	getAllUsers: (req, res) => {
		usersModel.getAllUsers().then(user => res.json(user));
	},
	deleteUserbyId: (req, res) => {
		const idToDelete = req.params.id;
		usersModel.deleteUserbyId(idToDelete, (err, resolve) => {
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	}
}

module.exports = controller;