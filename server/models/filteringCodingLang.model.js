const db = require("../sequelizers");
const CodingLangs = db.codingLangs;
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;

const model = {
// Find projects by CodingLangs
	getProjectsByCodingLangsId: async (codingLangsIds, response) => {
		try{
			const projects = await Sequelize.query(
				`SELECT p.id, p.title, p.customer, GROUP_CONCAT(pcl.codinglangId) as codinglangs
				FROM projects p
				LEFT JOIN project_codingLangs as pcl ON p.id = pcl.projectId LEFT JOIN codinglangs cl ON cl.id=pcl.codinglangId AND cl.id IN (${codingLangsIds})
				WHERE p.show = TRUE
				GROUP BY p.id,p.title
				HAVING COUNT(pcl.codinglangId) >= COUNT(cl.id) AND COUNT(cl.id) = ${codingLangsIds.length}`,
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
	//Get a list with all available codingLangs
	getAllAvailableCodingLangs: async (response) => {
		try{
			const codingLnags = await CodingLangs.findAll({attributes: ['id', 'name']},{order: [['orderby', 'ASC']]})
			response(null, codingLnags)
		}catch(err){
			response(err, null)
		}
	},
	getAllAvailableCodingLangsAndProjects : async (response) => {
		try{
			const projects = await Sequelize.query(
				`SELECT
				codinglangs.name,
				codinglangs.id,
				codinglangs.orderby,
				GROUP_CONCAT(projects.title) AS projects
		FROM
				codinglangs
		LEFT JOIN project_codinglangs ON codinglangs.id = project_codinglangs.codinglangId
		LEFT JOIN projects ON project_codinglangs.projectId = projects.id
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
		deleteCodingLangbyId: async (idToDelete, resolve) =>{
		try{
			await CodingLangs.destroy({ where: { id: idToDelete }});
			resolve(null, 'CodingLang deleted successfully')
		}catch(err){
			resolve(err, null)
		}
	},
	// INFO CREATE
		createCodingLang: async ({name, priority}, resolve) =>{
		try{
			await CodingLangs.create({name, orderby:priority});
			resolve(null, 'CodingLang created successfully')
		}catch(err){
			resolve(err, null)
		}
	},
}
module.exports = model;