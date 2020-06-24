import projects from './projects/projects';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  projects,
});

export default reducers;

export const getProjects = (state) => state.projects.projects;
// console.log(state.projects.projects, 'projects');
