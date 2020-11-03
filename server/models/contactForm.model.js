const db = require("../sequelizers");
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;
const ContactForms = db.contactForms;

const model = {
  // Get contact forms collection
  getContactForms: async (response) => {
    try {
      const contactForms = await ContactForms.findAll();
      response(null, contactForms);
    } catch (err) {
      response(err, null);
    }
	},
	//Update contact form by ID
	updateContactForm: async(data, resolve) => {
		const id = data.params.id;
		const state = data.body.state;
		try{
			await ContactForms.update(
				{state},
				{returning: true, where: {id: id}}
			)
			resolve(null, 'Contact form updated successfully')
		}catch(err){
			resolve(err, null);
		}
	},
	//delete contact form
	deleteContactForm: async(idToDelete, resolve) => {
		try{
			await ContactForms.destroy(
				{ where: { id: idToDelete }}
			)
			resolve(null, 'Contact form deleted successfully')
		}catch(err){
			resolve(err, null);
		}
	}
};
module.exports = model;
