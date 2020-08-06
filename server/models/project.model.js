const db = require("../sequelizers");
const Projects = db.projects;
const ProjectTags = db.projectTags;
const ProjectCodingLangs = db.projectCodingLangs;
const ProjectMadeAt = db.projectMadeAt;
const Tags = db.tags;
const CodingLangs = db.codingLangs;
const madeAt = db.madeAt;
const model = {
		// INFO GET
	// Find a single project by ID
	getProjectById: async (idToFetch, response) => {
		try{
			const project = await Projects.findAll({ where: { id: idToFetch } });
			response(null, project)
		}catch(err){
			response(err, null)
		}
	},
	// Get all tags related to single Project
	getTagsByProjectId: async (idToFetch, response) => {
		try{
			const tags = await ProjectTags.findAll({
				where: { projectId: idToFetch },
				include: [{ model: Tags }],
			})
			response(null, tags)
		}catch(err){
			response(err, null)
		}
	},
	// Get all codinglangs related to single Project
	getCodingLangsByProjectId: async (idToFetch, response) => {
		try{
			const codingLangs = await ProjectCodingLangs.findAll({
				where: { projectId: idToFetch },
				include: [{ model: CodingLangs }],
			})
			response(null, codingLangs)
		}catch(err){
			response(err, null)
		}
	},
	// Get all madeats related to single Project
	getMadeAtByProjectId: async (idToFetch, response) => {
		try{
			const madeAts = await ProjectMadeAt.findAll({
				attributes: [],
				where: { projectId: idToFetch },
				include: [{ model: madeAt, attributes: ['id', 'short_name'] }],
			})
			response(null, madeAts)
		}catch(err){
			response(err, null)
		}
	},

	// Get all cats related to single Project
	getAllCatsById: async (idToFetch, response) => {
		try{
			const tags = await ProjectTags.findAll({
				where: { projectId: idToFetch },
				include: [{ model: Tags }],
			})
			const codingLangs = await ProjectCodingLangs.findAll({
				where: { projectId: idToFetch },
				include: [{ model: CodingLangs }],
			})
			const madeAts = await ProjectMadeAt.findAll({
				where: { projectId: idToFetch },
				include: [{ model: madeAt }],
			})
			response(null, {tags, codingLangs, madeAts})
		}catch(err){
			response(err, null)
		}
	},

	// INFO DELETE
	deleteProjectbyId: async (idToDelete, resolve) => {
		try{
			await Projects.destroy({ where: { id: idToDelete }});
			await ProjectTags.destroy({ where: { projectId: idToDelete }});
			await ProjectCodingLangs.destroy({ where: { projectId: idToDelete }});
			await ProjectMadeAt.destroy({ where: { projectId: idToDelete }});
			resolve(null, 'Project deleted successfully')
		}catch(err){
			resolve(err, null)
		}
	},
	createProject: async(data, resolve) =>{
		const {title, customer, collaborators, completion_date, orderby, link_to_prod, link_to_repo, link_to_download, link_to_post, video, tags, codinglangs, madeats, show, is_featured, description} = data;
		console.log(tags, codinglangs, madeats);
		try{
			await Projects.create({title, customer, collaborators, completion_date, orderby, link_to_prod, link_to_repo, link_to_post, link_to_download, video, show, is_featured, description});
			const createdProject = await Projects.max('id');
			const tagsArray = JSON.parse("[" + tags + "]");
			const codingLangsArray = JSON.parse("[" + codinglangs + "]");
			const madeAtsArray = JSON.parse("[" + madeats + "]");
			tagsArray.forEach(element => ProjectTags.create({projectId: createdProject, tagId: element}));
			codingLangsArray.forEach(element => ProjectCodingLangs.create({projectId: createdProject, codinglangId: element}));
			madeAtsArray.forEach(element => ProjectMadeAt.create({projectId: createdProject, madeatId: element}));
			resolve(null, 'Project created successfully')
		}catch(err){
			resolve(err, null)
		}
	},
	updateProject: async(data, resolve) => {
		const {params: {id}, body: {title, customer, collaborators, completion_date, orderby, link_to_prod, link_to_repo, link_to_download, link_to_post, video, tags, codinglangs, madeats, show, is_featured, description}} = data;
		try{
		await Projects.update(
			{title, customer, collaborators, completion_date, orderby, link_to_prod, link_to_repo, link_to_post, link_to_download, video, show, is_featured, description},
			{ returning: true, where: { id: id } }
		)
		const tagsArray = JSON.parse("[" + tags + "]");
		const codingLangsArray = JSON.parse("[" + codinglangs + "]");
		const madeAtsArray = JSON.parse("[" + madeats + "]");

		ProjectTags.destroy({where: { projectId: id } });
		ProjectCodingLangs.destroy({where: { projectId: id } });
		ProjectMadeAt.destroy({where: { projectId: id } });

		tagsArray.forEach(element => ProjectTags.create({projectId: id, tagId: element}));
		codingLangsArray.forEach(element => ProjectCodingLangs.create({projectId: id, codinglangId: element}));
		madeAtsArray.forEach(element => ProjectMadeAt.create({projectId: id, madeatId: element}));
		resolve(null, 'Project updated successfully')
	}catch(err){
			resolve(err, null)
		}
	}
}
module.exports = model;