const db = require("../sequelizers");
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;
const Setup = db.setup;

const model = {
  // Get contact forms collection
  getSetup: async (response) => {
    try {
      const setup = await Setup.findAll({where:{id: 1}, attributes:['limit_featured', 'limit_related', 'currently_doing', 'cv_share_link', 'linkedin_link', 'medium_link', 'github_link', 'instagram_link', 'calendly_uri', 'phone_num', 'email', 'heroku_frontOffice', 'heroku_backOffice', 'github_backOffice', 'github_frontOffice']});
      response(null, setup);
    } catch (err) {
      response(err, null);
    }
	},
	//Update contact form by ID
	// updateSetup: async(data, resolve) => {
	// 	const id = data.params.id;
	// 	const state = data.body.state;
	// 	try{
	// 		await ContactForms.update(
	// 			{state},
	// 			{returning: true, where: {id: id}}
	// 		)
	// 		resolve(null, 'Contact form updated successfully')
	// 	}catch(err){
	// 		resolve(err, null);
	// 	}
	// }
};
module.exports = model;
