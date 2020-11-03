import {
  CLEAR_TAGS_BY_PROJECT,
  FETCH_TAGS_BY_PROJECT_REQUEST,
  FETCH_TAGS_BY_PROJECT_SUCCESS,
  FETCH_TAGS_BY_PROJECT_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  tags: [],
  loading: false,
  error: null,
};

const tagsByProject = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_TAGS_BY_PROJECT:
      return {
        ...state,
        loading: false,
        tags: [],
      };
    case FETCH_TAGS_BY_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TAGS_BY_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.payload.tags,
      };
    case FETCH_TAGS_BY_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        tags: [],
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default tagsByProject;
