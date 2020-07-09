import {
  FETCH_PROJECTS_BEGIN,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

const projects = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload.projects,
      };
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        projects: [],
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default projects;
