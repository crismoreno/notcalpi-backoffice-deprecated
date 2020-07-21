const db = require("../sequelizers");
const projectModel = require("../models/project.model")
const ProjectMadeAt = db.projectMadeAt;
const controller = {
	// INFO GET
		// Find a single project by ID
	getProjectById : (req, res) => {
		const idToFetch = req.params.id;
		projectModel.getProjectById(idToFetch, (err, project) =>{
			if(err){
				res.send(err)
			}else{
				res.send(project)
			}
		})
	},
	// Get all tags related to single Project
	getTagsByProjectId: (req, res) => {
		const idToFetch = req.params.id;
		projectModel.getTagsByProjectId(idToFetch, (err, tags) =>{
			if(err){
				res.send(err)
			}else{
				res.send(tags)
			}
		})
	},
	// Get all codinglangs related to single Project
	getCodingLangsByProjectId: (req, res) => {
		const idToFetch = req.params.id;
		projectModel.getCodingLangsByProjectId(idToFetch, (err, codingLangs) =>{
			if(err){
				res.send(err)
			}else{
				res.send(codingLangs)
			}
		})
	},
	// Get all madeats related to single Project
	getMadeAtByProjectId: (req, res) => {
		const idToFetch = req.params.id;
		projectModel.getMadeAtByProjectId(idToFetch, (err, madeAts) =>{
			if(err){
				res.send(err)
			}else{
				res.send(madeAts)
			}
		})
	},

	// Get all cats related to single Project
	getAllCatsById: (req, res) => {
		const idToFetch = req.params.id;
		projectModel.getAllCatsById(idToFetch, (err, cats) =>{
			if(err){
				res.send(err)
			}else{
				res.send(cats)
			}
		})
	},

	// INFO DELETE
	// Delete project by projectId
	deleteProjectbyId: (req, res) => {
		const idToDelete = req.params.id;
		projectModel.deleteProjectbyId(idToDelete, (err, resolve) =>{
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	},
	//INFO CREATE
	//Create Project
	createProject: (req, res) =>{
		projectModel.createProject( req.body, (err, resolve) =>{
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	},
	updateProject: (req, res) => {
		projectModel.updateProject( req, (err, resolve) =>{
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	}
}
module.exports = controller;