import {
  CLEAR_TAGS,
  CLEAR_CODINGLANGS,
  CLEAR_MADEATS,
  FETCH_TAGS_REQUEST,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  FETCH_CODINGLANGS_REQUEST,
  FETCH_CODINGLANGS_SUCCESS,
  FETCH_CODINGLANGS_FAILURE,
  FETCH_MADEATS_REQUEST,
  FETCH_MADEATS_SUCCESS,
  FETCH_MADEATS_FAILURE,
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

//FETCH CODINGLANGS
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
