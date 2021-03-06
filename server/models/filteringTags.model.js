const db = require("../sequelizers");
const Projects = db.projects;
const ProjectTags = db.projectTags;
const Tags = db.tags;
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;

const model = {
// Find projects by tags
	getProjectsByTagsId: async (tagIds, response) => {
		try{
			const projects = await Sequelize.query(
				`SELECT p.id, p.title, p.customer, GROUP_CONCAT(pt.tagId) as tags
				FROM projects p
				LEFT JOIN project_tags as pt ON p.id = pt.projectId LEFT JOIN tags t ON t.id=pt.tagId AND t.id IN (${tagIds})
				WHERE p.show = TRUE
				GROUP BY p.id,p.title
				HAVING COUNT(pt.tagId) >= COUNT(t.id) AND COUNT(t.id) = ${tagIds.length}`,
				{
					type: QueryTypes.SELECT,
					raw: true,
					plain: false,
					logging: console.log,
					nest: true,
				}
			)
			response(null, projects)
		}catch(err){
			response(err, null)
		}
	},
	//Get a list with all available tags
	getAllAvailableTags: async (response) => {
		try{
			const tags = await Tags.findAll({attributes: ['id', 'name']})
			response(null, tags)
		}catch(err){
			response(err, null)
		}
	}, 
	getAllAvailableTagsAndProjects : async (response) => {
		try{
			const projects = await Sequelize.query(
				`SELECT
				tags.name,
				tags.id,
				GROUP_CONCAT(projects.title) AS projects
		FROM
				tags
		LEFT JOIN project_tags ON tags.id = project_tags.tagId
		LEFT JOIN projects ON project_tags.projectId = projects.id
		GROUP BY
				name`,
				{
					type: QueryTypes.SELECT,
					raw: true,
					plain: false,
					logging: console.log,
					nest: true,
				}
			)
			response(null, projects)
		}catch(err){
			response(err, null)
		}
	},
	// INFO DELETE
	deleteTagbyId: async (idToDelete, resolve) =>{
		try{
			await Tags.destroy({ where: { id: idToDelete }});
			resolve(null, 'Tag deleted successfully')
		}catch(err){
			resolve(err, null)
		}
	},
	// INFO CREATE
	createTag: async (name, resolve) =>{
		try{
			await Tags.create({name});
			resolve(null, 'Tag created successfully')
		}catch(err){
			resolve(err, null)
		}
	},
	// INFO UPDATE
	updateTag: ({name, idToUpdate}, resolve) =>{
		Tags.update(
			{name: name},
			{ returning: true, where: { id: idToUpdate } },
			)
		.then(function(data) {
			resolve(null, data)
		})
		.catch((err) => {resolve(err, null)})
	}
}
module.exports = model;