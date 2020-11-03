const projectsModel = require("../models/projects.model")
const filteringMadeAtsModel = require("../models/filteringMadeAts.model");


const controller = {
	// Find projects by madeAts
	getProjectsByMadeAtId : (req, res) => {
		let madeAtsIds;
		if (req.query.madeat) {
			madeAtsIds = req.query.madeat;
    	madeAtsIds = madeAtsIds.split(",");
			filteringMadeAtsModel.getProjectsByMadeAtId(madeAtsIds, (err, projects) =>{
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
	//Get a list with all available madeAts
	getAllAvailableMadeAts: (req, res) => {
		filteringMadeAtsModel.getAllAvailableMadeAts((err, madeAts) =>{
			if(err){
				res.send(err)
			}else{
				res.send(madeAts)
			}
		})
	},
		//Get a list with all available madeats with related projects
	getAllAvailableMadeAtsAndProjects: (req, res) => {
		filteringMadeAtsModel.getAllAvailableMadeAtsAndProjects((err, madeAts) =>{
			if(err){
				res.send(err)
			}else{
				res.send(madeAts)
			}
		})
	},
	// INFO DELETE
	//Delete a madeat by id
	deleteMadeAtbyId: (req, res) => {
		const idToDelete = req.params.id;
		filteringMadeAtsModel.deleteMadeAtbyId(idToDelete, (err, resolve) =>{
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	},
	// INFO CREATE
	//Create a madeat by id
	createMadeAt: (req, res) =>{
		const shortName = req.body.short_name;
		const fullName = req.body.full_name;
		filteringMadeAtsModel.createMadeAt({shortName, fullName},(err, resolve) =>{
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	},
	// INFO UPDATE
	//Update a madeat by id
	updateMadeAt: (req, res) =>{
		const shortName = req.body.short_name;
		const fullName = req.body.full_name;
		const idToUpdate = req.params.id;
		filteringMadeAtsModel.updateMadeAt({shortName, fullName, idToUpdate}, (err, resolve) =>{
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		});
	}
}
module.exports = controller;