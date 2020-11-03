import {
  CLEAR_MADEATS_BY_PROJECT,
  FETCH_MADEATS_BY_PROJECT_REQUEST,
  FETCH_MADEATS_BY_PROJECT_SUCCESS,
  FETCH_MADEATS_BY_PROJECT_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  madeAts: [],
  loading: false,
  error: null,
};

const madeAtsByProject = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_MADEATS_BY_PROJECT:
      return {
        ...state,
        loading: false,
        madeAts: [],
      };
    case FETCH_MADEATS_BY_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MADEATS_BY_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        madeAts: action.payload.madeAts,
      };
    case FETCH_MADEATS_BY_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        madeAts: [],
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default madeAtsByProject;
