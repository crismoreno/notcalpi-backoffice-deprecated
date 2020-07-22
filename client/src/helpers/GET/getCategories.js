import {
  clearMadeAtsByProject,
  fetchTagsSuccess,
  fetchCodingLangsSuccess,
  fetchMadeAtsSuccess,
  fetchMadeAtsByProjectSuccess,
  fetchCodingLangsByProjectSuccess,
  fetchTagsByProjectSuccess,
  clearMadeAts,
} from '../../actions/categories';

import { authHeader } from '../authHeader';

const url = '/api';
const requestOptions = {
  method: 'GET',
  headers: authHeader(),
};

function fetchTags() {
  return (dispatch) => {
    return fetch(`${url}/tagslist-projects`, requestOptions).then(
      (response) => {
        response.json().then((data) => {
          dispatch(fetchTagsSuccess(data));
          return data;
        });
      }
    );
  };
}

function fetchCodingLangs() {
  return (dispatch) => {
    return fetch(`${url}/codinglangslist-projects`, requestOptions).then(
      (response) => {
        response.json().then((data) => {
          dispatch(fetchCodingLangsSuccess(data));
          return data;
        });
      }
    );
  };
}

function fetchMadeAts() {
  return (dispatch) => {
    return fetch(`${url}/madeatslist-projects`, requestOptions).then(
      (response) => {
        response.json().then((data) => {
          dispatch(clearMadeAts());
          dispatch(fetchMadeAtsSuccess(data));
          return data;
        });
      }
    );
  };
}

function fetchTagsByProjectId(projectId) {
  return (dispatch) => {
    return fetch(`${url}/projecttags/${projectId}`, requestOptions).then(
      (response) => {
        response.json().then((data) => {
          dispatch(fetchTagsByProjectSuccess(data));
          return data;
        });
      }
    );
  };
}

function fetchCodingLangsByProjectId(projectId) {
  return (dispatch) => {
    return fetch(`${url}/projectcodinglangs/${projectId}`, requestOptions).then(
      (response) => {
        response.json().then((data) => {
          dispatch(fetchCodingLangsByProjectSuccess(data));
          return data;
        });
      }
    );
  };
}

function fetchMadeAtsByProjectId(projectId) {
  return (dispatch) => {
    return fetch(`${url}/projectmadeat/${projectId}`, requestOptions).then(
      (response) => {
        response.json().then((data) => {
          dispatch(clearMadeAtsByProject());
          dispatch(fetchMadeAtsByProjectSuccess(data));
          return data;
        });
      }
    );
  };
}

export { fetchTags, fetchCodingLangs, fetchMadeAts, fetchMadeAtsByProjectId };
