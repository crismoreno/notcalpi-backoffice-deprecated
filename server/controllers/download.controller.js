require("dotenv").config();
const moment = require('moment')
const fs = require('fs')
const exec = require('child_process').exec;

const controller = {
  downloadDb: (req, res) => {
		const fileName = `${process.env.DBNAME}_${moment().format('YYYY_MM_DD_h_mm_ss')}.sql`
		exec(`mysqldump -u${process.env.DBUSR} -p${process.env.DBPWD} ${process.env.DBNAME} > ~/Downloads/${fileName}`);
	}
};
module.exports = controller;
