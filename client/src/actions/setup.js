import {
  FETCH_SETUP_REQUEST,
  FETCH_SETUP_SUCCESS,
  FETCH_SETUP_FAILURE,
} from './actionTypes';
//FETCH PROJECTS
export const fetchSetupBegin = () => ({
  type: FETCH_SETUP_REQUEST,
});
export const fetchSetupSuccess = (setup) => ({
  type: FETCH_SETUP_SUCCESS,
  payload: { setup },
});

export const fetchSetupFailure = (error) => ({
  type: FETCH_SETUP_FAILURE,
  payload: { error },
});
