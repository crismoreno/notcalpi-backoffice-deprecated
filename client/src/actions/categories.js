import {
  CLEAR_TAGS,
  CLEAR_CODINGLANGS,
  CLEAR_MADEATS,
  CLEAR_TAGS_BY_PROJECT,
  CLEAR_CODINGLANGS_BY_PROJECT,
  CLEAR_MADEATS_BY_PROJECT,
  FETCH_TAGS_REQUEST,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  FETCH_CODINGLANGS_REQUEST,
  FETCH_CODINGLANGS_SUCCESS,
  FETCH_CODINGLANGS_FAILURE,
  FETCH_MADEATS_REQUEST,
  FETCH_MADEATS_SUCCESS,
  FETCH_MADEATS_FAILURE,
  FETCH_TAGS_BY_PROJECT_REQUEST,
  FETCH_TAGS_BY_PROJECT_SUCCESS,
  FETCH_TAGS_BY_PROJECT_FAILURE,
  FETCH_CODINGLANGS_BY_PROJECT_REQUEST,
  FETCH_CODINGLANGS_BY_PROJECT_SUCCESS,
  FETCH_CODINGLANGS_BY_PROJECT_FAILURE,
  FETCH_MADEATS_BY_PROJECT_REQUEST,
  FETCH_MADEATS_BY_PROJECT_SUCCESS,
  FETCH_MADEATS_BY_PROJECT_FAILURE,
} from './actionTypes';

//CLEARS
export const clearTags = () => ({
  type: CLEAR_TAGS,
});
export const clearCodingLangs = () => ({
  type: CLEAR_CODINGLANGS,
});
export const clearMadeAts = () => ({
  type: CLEAR_MADEATS,
});
export const clearTagsByProject = () => ({
  type: CLEAR_TAGS_BY_PROJECT,
});
export const clearCodingLangsByProject = () => ({
  type: CLEAR_CODINGLANGS_BY_PROJECT,
});
export const clearMadeAtsByProject = () => ({
  type: CLEAR_MADEATS_BY_PROJECT,
});

//FETCH TAGS
export const fetchTagsBegin = () => ({
  type: FETCH_TAGS_REQUEST,
});
export const fetchTagsSuccess = (tags) => ({
  type: FETCH_TAGS_SUCCESS,
  payload: { tags },
});

export const fetchTagsFailure = (error) => ({
  type: FETCH_TAGS_FAILURE,
  payload: { error },
});

//FETCH CODINGLANGS
export const fetchCodingLangsBegin = () => ({
  type: FETCH_CODINGLANGS_REQUEST,
});
export const fetchCodingLangsSuccess = (codingLangs) => ({
  type: FETCH_CODINGLANGS_SUCCESS,
  payload: { codingLangs },
});

export const fetchCodingLangsFailure = (error) => ({
  type: FETCH_CODINGLANGS_FAILURE,
  payload: { error },
});

//FETCH MadeAts
export const fetchMadeAtsBegin = () => ({
  type: FETCH_MADEATS_REQUEST,
});
export const fetchMadeAtsSuccess = (madeAts) => ({
  type: FETCH_MADEATS_SUCCESS,
  payload: { madeAts },
});
export const fetchMadeAtsFailure = (error) => ({
  type: FETCH_MADEATS_FAILURE,
  payload: { error },
});

//FETCH TAGS BY PROJECT
export const fetchTagsByProjectBegin = () => ({
  type: FETCH_TAGS_BY_PROJECT_REQUEST,
});
export const fetchTagsByProjectSuccess = (tags) => ({
  type: FETCH_TAGS_BY_PROJECT_SUCCESS,
  payload: { tags },
});

export const fetchTagsByProjectFailure = (error) => ({
  type: FETCH_TAGS_BY_PROJECT_FAILURE,
  payload: { error },
});

//FETCH CODINGLANGS
export const fetchCodingLangsByProjectBegin = () => ({
  type: FETCH_CODINGLANGS_BY_PROJECT_REQUEST,
});
export const fetchCodingLangsByProjectSuccess = (codingLangs) => ({
  type: FETCH_CODINGLANGS_BY_PROJECT_SUCCESS,
  payload: { codingLangs },
});

export const fetchCodingLangsByProjectFailure = (error) => ({
  type: FETCH_CODINGLANGS_BY_PROJECT_FAILURE,
  payload: { error },
});

//FETCH MadeAts
export const fetchMadeAtsByProjectBegin = () => ({
  type: FETCH_MADEATS_BY_PROJECT_REQUEST,
});
export const fetchMadeAtsByProjectSuccess = (madeAts) => ({
  type: FETCH_MADEATS_BY_PROJECT_SUCCESS,
  payload: { madeAts },
});
export const fetchMadeAtsByProjectFailure = (error) => ({
  type: FETCH_MADEATS_BY_PROJECT_FAILURE,
  payload: { error },
});
