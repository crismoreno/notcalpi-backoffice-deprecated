const db = require("../sequelize-models");
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;
const ContactForms = db.contactForms;
var nodemailer = require("nodemailer");

const model = {
  // Post COntact Form to DB and Send Email
  getContactForms: async (response) => {
    try {
      const contactForms = await ContactForms.findAll();
      response(null, contactForms);
    } catch (err) {
      response(err, null);
    }
  },
};
module.exports = model;
