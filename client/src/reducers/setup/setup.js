import {
  FETCH_SETUP_REQUEST,
  FETCH_SETUP_SUCCESS,
  FETCH_SETUP_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  setup: [],
  loading: false,
  error: null,
};

const setup = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SETUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SETUP_SUCCESS:
      return {
        ...state,
        loading: false,
        setup: action.payload,
      };
    case FETCH_SETUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        setup: [],
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default setup;
