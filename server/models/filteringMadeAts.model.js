const db = require("../sequelizers");
const madeAt = db.madeAt;
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;

const model = {
	// Find projects by madeAts
getProjectsByMadeAtId: async (madeAtsIds, response) => {
		try{
			const projects = await Sequelize.query(
				`SELECT p.id, p.title, p.customer, GROUP_CONCAT(pma.madeatId) as madeats
				FROM projects p
				LEFT JOIN project_madeats as pma ON p.id = pma.projectId LEFT JOIN madeats ma ON ma.id=pma.madeatId AND ma.id IN (${madeAtsIds})
				WHERE p.show = TRUE
				GROUP BY p.id,p.title
				HAVING COUNT(pma.madeatId) >= COUNT(ma.id) AND COUNT(ma.id) = ${madeAtsIds.length}`,
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
	//Get a list with all available madeAts
	getAllAvailableMadeAts: async (response) => {
		try{
			const madeAts = await madeAt.findAll({attributes: ['id', 'short_name']})
			response(null, madeAts)
		}catch(err){
			response(err, null)
		}
	},
	getAllAvailableMadeAtsAndProjects: async (response) => {
		try{
			const projects = await Sequelize.query(
				`SELECT
				madeats.short_name,
				madeats.full_name,
				madeats.id,
				GROUP_CONCAT(projects.title) AS projects
		FROM
				madeats
		LEFT JOIN project_madeats ON madeats.id = project_madeats.madeatId
		LEFT JOIN projects ON project_madeats.projectId = projects.id
		GROUP BY
		short_name`,
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
	deleteMadeAtbyId: async (idToDelete, resolve) =>{
		try{
			await madeAt.destroy({ where: { id: idToDelete }});
			resolve(null, 'MadeAt deleted successfully')
		}catch(err){
			resolve(err, null)
		}
	},
	// INFO CREATE
	createMadeAt: async ({shortName, fullName}, resolve) =>{
		try{
			await madeAt.create({full_name: fullName, short_name: shortName});
			resolve(null, 'MadeAt created successfully')
		}catch(err){
			resolve(err, null)
		}
	},
}
module.exports = model;