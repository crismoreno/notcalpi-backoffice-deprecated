import {
  FETCH_CONTACTFORMS_BEGIN,
  FETCH_CONTACTFORMS_SUCCESS,
  FETCH_CONTACTFORMS_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  contactForms: [],
  loading: false,
  error: null,
};

const contactForms = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTFORMS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONTACTFORMS_SUCCESS:
      return {
        ...state,
        loading: false,
        contactForms: action.payload.contactForms,
      };
    case FETCH_CONTACTFORMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        contactForms: [],
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default contactForms;
