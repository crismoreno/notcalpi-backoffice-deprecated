import { fetchProjectsSuccess } from '../actions/projects';

const url = '/api';

function fetchProjects() {
  return (dispatch) => {
    return fetch(url).then((response) => {
      response.json().then((data) => {
        dispatch(fetchProjectsSuccess(data));
        return data;
      });
    });
  };
}

export default fetchProjects;
