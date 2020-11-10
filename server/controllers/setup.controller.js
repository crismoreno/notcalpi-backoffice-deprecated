const setupModel = require("../models/setup.model");

const controller = {
  getSetup: (req, res) => {
    setupModel.getSetup((err, setup) => {
      if (err) {
        res.send(err);
      } else {
        res.send(setup);
      }
    });
	},
	// updateSetup: (req, res) => {
	// 	setupModel.updateSetup(req, (err, resolve) => {
	// 		if(err){
	// 			res.send(err)
	// 		}else{
	// 			res.send(resolve)
	// 		}
	// 	})
	// }
};
module.exports = controller;