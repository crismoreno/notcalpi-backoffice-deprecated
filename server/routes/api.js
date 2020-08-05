const express = require("express");
const passport = require("passport");
const projectsController = require("../controllers/projects.controller.js");
const projectController = require("../controllers/project.controller.js");

const filteringTags = require("../controllers/filteringTags.controller.js");
const filteringMadeAts = require("../controllers/filteringMadeAts.controller.js");
const filteringCodingLang = require("../controllers/filteringCodingLang.controller.js");

const contactFormController = require("../controllers/contactForm.controller.js");
const usersController = require("../controllers/users.controller.js");

const router = express.Router();

//Retreiving all projects
router.get("/", passport.authenticate('jwt', { session: false }), projectsController.getAllProjects);

// Find all featured projects
// router.get("/featured", passport.authenticate('jwt', { session: false }), projectsController.getAllFeaturedProjects);

// Find a single project by ID
router.get("/project/:id", passport.authenticate('jwt', { session: false }), projectController.getProjectById);

// Get all tags related to single Project
router.get("/projecttags/:id", passport.authenticate('jwt', { session: false }),projectController.getTagsByProjectId);
// Get all codingLangs related to single Project
router.get(
	"/projectcodinglangs/:id",
	passport.authenticate('jwt', { session: false }),
  projectController.getCodingLangsByProjectId
);
// Get all madeAts related to single Project
router.get("/projectmadeat/:id", passport.authenticate('jwt', { session: false }), projectController.getMadeAtByProjectId);

// Find projects by tags
//http://localhost:5000/api/tags?tags=1,2
// router.get("/tags", passport.authenticate('jwt', { session: false }), filteringTags.getProjectsByTagsId);

//Get a list with all available tags
// router.get("/tagslist", passport.authenticate('jwt', { session: false }), filteringTags.getAllAvailableTags);

//Get a list with all available tags with related projects
router.get("/tagslist-projects", passport.authenticate('jwt', { session: false }), filteringTags.getAllAvailableTagsAndProjects);

// Find projects by codingLangs
//http://localhost:5000/api/codinglangs?codinglangs=1,2
// router.get("/codinglangs", passport.authenticate('jwt', { session: false }), filteringCodingLang.getProjectsByCodingLangsId);

//Get a list with all available codingLangs
// router.get("/codinglangslist", passport.authenticate('jwt', { session: false }), filteringCodingLang.getAllAvailableCodingLangs);

//Get a list with all available codingLangs with related projects
router.get("/codinglangslist-projects", passport.authenticate('jwt', { session: false }), filteringCodingLang.getAllAvailableCodingLangsAndProjects);

// Find projects by madeAts
//http://localhost:5000/api/madeat?madeat=1,2
// router.get("/madeat", passport.authenticate('jwt', { session: false }), filteringMadeAts.getProjectsByMadeAtId);

//Get a list with all available madeAts
// router.get("/madeatslist", passport.authenticate('jwt', { session: false }), filteringMadeAts.getAllAvailableMadeAts);

//Get a list with all available madeats with related projects
router.get("/madeatslist-projects", passport.authenticate('jwt', { session: false }), filteringMadeAts.getAllAvailableMadeAtsAndProjects);

//Get a list with all the cats assigned to a project
// router.get("/getAllCats/:id", passport.authenticate('jwt', { session: false }), projectController.getAllCatsById);
//Get a list with all the contact forms received
router.get("/getForms", passport.authenticate('jwt', { session: false }), contactFormController.getContactForms);

//INFO AUTH

//User registration
router.post("/register", usersController.createUser);

//User login
router.post("/login", usersController.loginUser);

//Get all users
router.get("/users", passport.authenticate('jwt', { session: false }), usersController.getAllUsers);

//INFO DELETES

//delete project by project id
router.delete("/deleteproject/:id", passport.authenticate('jwt', { session: false }), projectController.deleteProjectbyId)

//delete tag by tag id
router.delete("/deletetag/:id", passport.authenticate('jwt', { session: false }), filteringTags.deleteTagbyId)

//delete codinglang by tag id
router.delete("/deletecodinglang/:id", passport.authenticate('jwt', { session: false }), filteringCodingLang.deleteCodingLangbyId)

//delete madeat by tag id
router.delete("/deletemadeat/:id", passport.authenticate('jwt', { session: false }), filteringMadeAts.deleteMadeAtbyId)

//INFO CREATES
//create project
router.post("/createproject", passport.authenticate('jwt', { session: false }), projectController.createProject)

//create tag
router.post("/createtag", passport.authenticate('jwt', { session: false }), filteringTags.createTag)

//create codinglang
router.post("/createcodinglang", passport.authenticate('jwt', { session: false }), filteringCodingLang.createCodingLang)

//create madeat
router.post("/createmadeat", passport.authenticate('jwt', { session: false }), filteringMadeAts.createMadeAt)


//INFO UPDATES
//update project by id
router.put("/updateproject/:id", passport.authenticate('jwt', { session: false }), projectController.updateProject)

//update tag by id
router.put("/updatetag/:id", passport.authenticate('jwt', { session: false }), filteringTags.updateTag)

//update codinglang by id
router.put("/updatecodinglang/:id", passport.authenticate('jwt', { session: false }), filteringCodingLang.updateCodingLang)

//update madeat by id
router.put("/updatemadeat/:id", passport.authenticate('jwt', { session: false }), filteringMadeAts.updateMadeAt)


module.exports = router;
