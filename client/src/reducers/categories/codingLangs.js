import {
  CLEAR_CODINGLANGS,
  FETCH_CODINGLANGS_BEGIN,
  FETCH_CODINGLANGS_SUCCESS,
  FETCH_CODINGLANGS_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  codingLangs: [],
  loading: false,
  error: null,
};

const codingLangs = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CODINGLANGS:
      return {
        ...state,
        loading: false,
        codingLangs: [],
      };
    case FETCH_CODINGLANGS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CODINGLANGS_SUCCESS:
      return {
        ...state,
        loading: false,
        codingLangs: action.payload.codingLangs,
      };
    case FETCH_CODINGLANGS_FAILURE:
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

export default codingLangs;
