import projects from './projects/projects';
import categories from './categories';
import contactForms from './contactForms/contactForms';
import users from './users/users';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  projects,
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
export const getUsers = (state) => state.users.users;
