const contactFormModel = require("../models/contactForm.model");

const controller = {
  getContactForms: (req, res) => {
    contactFormModel.getContactForms((err, contactForms) => {
      if (err) {
        res.send(err);
      } else {
        res.send(contactForms);
      }
    });
	},
	updateContactForm: (req, res) => {
		contactFormModel.updateContactForm(req, (err, resolve) => {
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	},
	deleteContactForm: (req, res) => {
		const idToDelete = req.params.id
		contactFormModel.deleteContactForm(idToDelete, (err, resolve) => {
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	}
};
module.exports = controller;
