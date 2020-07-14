import {
  fetchTagsSuccess,
  fetchCodingLangsSuccess,
  fetchMadeAtsSuccess,
} from '../actions/categories';

import { authHeader } from './authHeader';

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
    return fetch(`${url}/codinglangslist`, requestOptions).then((response) => {
      response.json().then((data) => {
        dispatch(fetchCodingLangsSuccess(data));
        return data;
      });
    });
  };
}

function fetchMadeAts() {
  return (dispatch) => {
    return fetch(`${url}/madeatslist`, requestOptions).then((response) => {
      response.json().then((data) => {
        dispatch(fetchMadeAtsSuccess(data));
        return data;
      });
    });
  };
}

export { fetchTags, fetchCodingLangs, fetchMadeAts };
