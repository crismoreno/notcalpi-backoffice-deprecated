import {
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
	FETCH_PROJECT_FAILURE,
	SET_PROJECT_RELATEDBYKIND,
} from '../../actions/actionTypes';

const initialState = {
  project: {
    details: {
			related_by: null,
		},
    madeAt: {},
    codingLangs: [],
		tags: [],
  },
  loading: false,
  error: null,
};

const project = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        // project: action.payload.project,
        project: {
          details: action.payload.project[0].data[0],
          madeAt: action.payload.project[3].data[0]
            ? action.payload.project[3].data[0].madeat
            : null,
          codingLangs: action.payload.project[2].data
            ? [action.payload.project[2].data]
            : null,
          tags: action.payload.project[1].data
            ? [action.payload.project[1].data]
            : null,
        },
      };
    case FETCH_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        project: {},
			};
		case SET_PROJECT_RELATEDBYKIND:
			return {
				...state,
        project: {
					...state.project,
					details:{
						...state.project.details,
						related_by: action.payload.kind
					}
				}
			};
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default project;
