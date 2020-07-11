import { fetchProjectsSuccess } from '../actions/projects';
import { authHeader } from './authHeader';

const url = '/api';

function fetchProjects() {
  return (dispatch) => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    };
    return fetch(url, requestOptions).then((response) => {
      response.json().then((data) => {
        dispatch(fetchProjectsSuccess(data));
        return data;
      });
    });
  };
}

export default fetchProjects;
