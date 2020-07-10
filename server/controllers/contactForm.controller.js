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
};
module.exports = controller;
