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

//Retreiving all showable projects
router.get("/", passport.authenticate('jwt', { session: false }), projectsController.getAllShowableProjects);
// router.get("/", projectsController.getAllShowableProjects);
// Find all featured projects
router.get("/featured", passport.authenticate('jwt', { session: false }), projectsController.getAllFeaturedProjects);
// Find a single project by ID
router.get("/project/:id", passport.authenticate('jwt', { session: false }), projectController.getProjectById);
// Get all tags related to single Project
router.get("/projecttags/:id", passport.authenticate('jwt', { session: false }),projectController.getTagsByProjectId);
router.get(
	"/projectcodinglangs/:id",
	passport.authenticate('jwt', { session: false }),
  projectController.getCodingLangsByProjectId
);
router.get("/projectmadeat/:id", passport.authenticate('jwt', { session: false }), projectController.getMadeAtByProjectId);

// Find projects by tags
//http://localhost:5000/api/tags?tags=1,2
router.get("/tags", passport.authenticate('jwt', { session: false }), filteringTags.getProjectsByTagsId);
//Get a list with all available tags
router.get("/tagslist", passport.authenticate('jwt', { session: false }), filteringTags.getAllAvailableTags);

// Find projects by codingLangs
//http://localhost:5000/api/codinglangs?codinglangs=1,2
router.get("/codinglangs", passport.authenticate('jwt', { session: false }), filteringCodingLang.getProjectsByCodingLangsId);
//Get a list with all available codingLangs
router.get("/codinglangslist", passport.authenticate('jwt', { session: false }), filteringCodingLang.getAllAvailableCodingLangs);

// Find projects by madeAts
//http://localhost:5000/api/madeat?madeat=1,2
router.get("/madeat", passport.authenticate('jwt', { session: false }), filteringMadeAts.getProjectsByMadeAtId);
//Get a list with all available madeAts
router.get("/madeatslist", passport.authenticate('jwt', { session: false }), filteringMadeAts.getAllAvailableMadeAts);
//Get a list with all the contact forms received
router.get("/getForms", passport.authenticate('jwt', { session: false }), contactFormController.getContactForms);
//User registration
router.post("/register", usersController.createUser);
//User login
router.post("/login", usersController.loginUser);
//Get all users
router.get("/users", passport.authenticate('jwt', { session: false }), usersController.getAllUsers);

module.exports = router;
