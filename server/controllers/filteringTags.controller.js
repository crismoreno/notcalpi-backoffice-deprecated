const db = require("../sequelizers");
const Projects = db.projects;
const Tags = db.tags;
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;
const projectsModel = require("../models/projects.model")

const filteringTagsModel = require("../models/filteringTags.model");


const controller = {
	// Find projects by tags
	getProjectsByTagsId : (req, res) => {
		let tagIds;
		if (req.query.tags) {
			tagIds = req.query.tags;
    	tagIds = tagIds.split(",");
			filteringTagsModel.getProjectsByTagsId(tagIds, (err, projects) =>{
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
	getAllAvailableTags: (req, res) => {
		filteringTagsModel.getAllAvailableTags((err, tags) =>{
			if(err){
				res.send(err)
			}else{
				res.send(tags)
			}
		})
	},
	//Get a list with all available tags with related projects
	getAllAvailableTagsAndProjects: (req, res) => {
		filteringTagsModel.getAllAvailableTagsAndProjects((err, tags) =>{
			if(err){
				res.send(err)
			}else{
				res.send(tags)
			}
		})
	},
	// INFO DELETE
	//Delete a tag by id
	deleteTagbyId: (req, res) => {
		const idToDelete = req.params.id;
		filteringTagsModel.deleteTagbyId(idToDelete, (err, resolve) =>{
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	},
}
module.exports = controller;
