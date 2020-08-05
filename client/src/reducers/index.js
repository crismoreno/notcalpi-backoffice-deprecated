import projects from './projects/projects';
import project from './project/project';
import categories from './categories';
import contactForms from './contactForms/contactForms';
import users from './users';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  projects,
  project,
  categories,
  contactForms,
  users,
});

export default reducers;

export const getProjects = (state) => state.projects.projects;
export const getTags = (state) => state.categories.tags.tags;
export const getCodingLangs = (state) =>
  state.categories.codingLangs.codingLangs;
export const getMadeAts = (state) => state.categories.madeAts.madeAts;
export const getContactForms = (state) => state.contactForms.contactForms;
export const getUsers = (state) => state.users.users.users;
export const getAuth = (state) => state.users.login;
export const getProjectLoading = (state) => state.project.loading;
export const getProjectData = (state) => state.project.project.details;
export const getProjectTags = (state) => state.project.project.tags[0];
export const getProjectCodingLangs = (state) =>
  state.project.project.codingLangs[0];
export const getProjectMadeAt = (state) => state.project.project.madeAt;
