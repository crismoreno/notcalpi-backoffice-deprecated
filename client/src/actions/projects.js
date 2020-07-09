import {
  FETCH_PROJECTS_BEGIN,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from './actionTypes';
//FETCH PROJECTS
export const fetchProjectsBegin = () => ({
  type: FETCH_PROJECTS_BEGIN,
});
export const fetchProjectsSuccess = (projects) => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: { projects },
});

export const fetchProjectsFailure = (error) => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: { error },
});
