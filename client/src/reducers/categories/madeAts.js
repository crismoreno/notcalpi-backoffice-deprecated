import {
  CLEAR_MADEATS,
  FETCH_MADEATS_BEGIN,
  FETCH_MADEATS_SUCCESS,
  FETCH_MADEATS_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  madeAts: [],
  loading: false,
  error: null,
};

const madeAts = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_MADEATS:
      return {
        ...state,
        loading: false,
        madeAts: [],
      };
    case FETCH_MADEATS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MADEATS_SUCCESS:
      return {
        ...state,
        loading: false,
        madeAts: action.payload.madeAts,
      };
    case FETCH_MADEATS_FAILURE:
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

export default madeAts;
