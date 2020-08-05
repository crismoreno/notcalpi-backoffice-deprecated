import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAILURE,
} from './actionTypes';
//FETCH PROJECTS
export const fetchProjectsBegin = () => ({
  type: FETCH_PROJECTS_REQUEST,
});
export const fetchProjectsSuccess = (projects) => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: { projects },
});

export const fetchProjectsFailure = (error) => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: { error },
});

//FETCH PROJECT
export const fetchProjectRequest = () => ({
  type: FETCH_PROJECT_REQUEST,
});
export const fetchProjectSuccess = (project) => ({
  type: FETCH_PROJECT_SUCCESS,
  payload: { project },
});

export const fetchProjectFailure = (error) => ({
  type: FETCH_PROJECT_FAILURE,
  payload: { error },
});
