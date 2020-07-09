import {
  FETCH_TAGS_BEGIN,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
} from '../../actions';

const initialState = {
  tags: [],
  loading: false,
  error: null,
};

const tags = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAGS_BEGIN:
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
