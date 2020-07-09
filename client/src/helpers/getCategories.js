import {
  fetchTagsSuccess,
  fetchCodingLangsSuccess,
  fetchMadeAtsSuccess,
} from '../actions/categories';

const url = '/api';

function fetchTags() {
  return (dispatch) => {
    return fetch(`${url}/tagslist`).then((response) => {
      response.json().then((data) => {
        dispatch(fetchTagsSuccess(data));
        return data;
      });
    });
  };
}

function fetchCodingLangs() {
  return (dispatch) => {
    return fetch(`${url}/codinglangslist`).then((response) => {
      response.json().then((data) => {
        dispatch(fetchCodingLangsSuccess(data));
        return data;
      });
    });
  };
}

function fetchMadeAts() {
  return (dispatch) => {
    return fetch(`${url}/madeatslist`).then((response) => {
      response.json().then((data) => {
        dispatch(fetchMadeAtsSuccess(data));
        return data;
      });
    });
  };
}

export { fetchTags, fetchCodingLangs, fetchMadeAts };
