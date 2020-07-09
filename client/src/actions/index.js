export const FETCH_PROJECTS_BEGIN = 'FETCH_PROJECTS_BEGIN';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';
export const FETCH_TAGS_BEGIN = 'FETCH_TAGS_BEGIN';
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const FETCH_TAGS_FAILURE = 'FETCH_TAGS_FAILURE';

//FETCH PROJECTS
export const fetchProjectsBegin = () => ({
  type: FETCH_PROJECTS_BEGIN,
});
export const fetchProjectsSuccess = (projects) => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: { projects },
});

export const fetchProjectsFailure = (error) => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: { error },
});

//FETCH TAGS
export const fetchTagsBegin = () => ({
  type: FETCH_TAGS_BEGIN,
});
export const fetchTagsSuccess = (tags) => ({
  type: FETCH_TAGS_SUCCESS,
  payload: { tags },
});

export const fetchTagsFailure = (error) => ({
  type: FETCH_TAGS_FAILURE,
  payload: { error },
});
