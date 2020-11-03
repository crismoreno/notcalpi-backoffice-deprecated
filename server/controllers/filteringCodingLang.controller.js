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
		// INFO DELETE
	//Delete a codinglang by id
	deleteCodingLangbyId: (req, res) => {
		const idToDelete = req.params.id;
		filteringCodingLangModel.deleteCodingLangbyId(idToDelete, (err, resolve) => {
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	},
	// INFO CREATE
	//Create a coodinglang by id
	createCodingLang: (req, res) =>{
		const name = req.body.name;
		const priority = req.body.priority;
		filteringCodingLangModel.createCodingLang({name,priority}, (err, resolve) =>{
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	},
	// INFO UPDATE
	//Update a tag by id
	updateCodingLang: (req, res) =>{
		const name = req.body.name;
		const priority = req.body.priority;
		const idToUpdate = req.params.id;
		filteringCodingLangModel.updateCodingLang({name, priority, idToUpdate}, (err, resolve) =>{
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		});
	}
}
module.exports = controller;