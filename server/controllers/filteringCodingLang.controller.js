const projectsModel = require("../models/projects.model")
const filteringCodingLangModel = require("../models/filteringCodingLang.model");


const controller = {
	// Find projects by tags
	getProjectsByCodingLangsId : (req, res) => {
		let codingLangsIds;
		if (req.query.codinglangs) {
			codingLangsIds = req.query.codinglangs;
    	codingLangsIds = codingLangsIds.split(",");
			filteringCodingLangModel.getProjectsByCodingLangsId(codingLangsIds, (err, projects) =>{
				if(err){
					res.send(err)
				}else{
					res.send(projects)
				}
			})
		}else{
			projectsModel.getAllShowableProjects((err, projects) =>{
				if(err){
					res.send(err)
				}else{
					res.send(projects)
				}
			})
		}
	},
	//Get a list with all available tags
	getAllAvailableCodingLangs: (req, res) => {
		filteringCodingLangModel.getAllAvailableCodingLangs((err, codingLangs) =>{
			if(err){
				res.send(err)
			}else{
				res.send(codingLangs)
			}
		})
	},
		//Get a list with all available codinglangs with related projects
	getAllAvailableCodingLangsAndProjects: (req, res) => {
		filteringCodingLangModel.getAllAvailableCodingLangsAndProjects((err, codingLangs) =>{
			if(err){
				res.send(err)
			}else{
				res.send(codingLangs)
			}
		})
	},
	//Delete a codinglang by id
	deleteCodingLangbyId: (req, res) => {
		filteringCodingLangModel.deleteCodingLangbyId((err, tags) =>{
			if(err){
				res.send(err)
			}else{
				res.send(tags)
			}
		})
	},
}
module.exports = controller;