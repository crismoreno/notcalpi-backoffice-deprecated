import {
  CLEAR_CODINGLANGS_BY_PROJECT,
  FETCH_CODINGLANGS_BY_PROJECT_REQUEST,
  FETCH_CODINGLANGS_BY_PROJECT_SUCCESS,
  FETCH_CODINGLANGS_BY_PROJECT_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  codingLangs: [],
  loading: false,
  error: null,
};

const codingLangsByProject = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CODINGLANGS_BY_PROJECT:
      return {
        ...state,
        loading: false,
        codingLangs: [],
      };
    case FETCH_CODINGLANGS_BY_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CODINGLANGS_BY_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        codingLangs: action.payload.codingLangs,
      };
    case FETCH_CODINGLANGS_BY_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        codingLangs: [],
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default codingLangsByProject;
