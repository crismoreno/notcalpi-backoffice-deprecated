import projects from './projects/projects';
import tags from './categories/tags';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  projects,
  tags,
});

export default reducers;

export const getProjects = (state) => state.projects.projects;
export const getTags = (state) => state.tags.tags;
