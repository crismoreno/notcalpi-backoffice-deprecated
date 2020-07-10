import {
  FETCH_CONTACTFORMS_BEGIN,
  FETCH_CONTACTFORMS_SUCCESS,
  FETCH_CONTACTFORMS_FAILURE,
} from './actionTypes';
//FETCH PROJECTS
export const fetchContactFormsBegin = () => ({
  type: FETCH_CONTACTFORMS_BEGIN,
});
export const fetchContactFormsSuccess = (contactForms) => ({
  type: FETCH_CONTACTFORMS_SUCCESS,
  payload: { contactForms },
});

export const fetchContactFormsFailure = (error) => ({
  type: FETCH_CONTACTFORMS_FAILURE,
  payload: { error },
});
