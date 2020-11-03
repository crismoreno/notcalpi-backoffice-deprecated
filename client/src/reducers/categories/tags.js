import {
  CLEAR_TAGS,
  FETCH_TAGS_REQUEST,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  tags: [],
  loading: false,
  error: null,
};

const tags = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_TAGS:
      return {
        ...state,
        loading: false,
        tags: [],
      };
    case FETCH_TAGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.payload.tags,
      };
    case FETCH_TAGS_FAILURE:
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

export default tags;
