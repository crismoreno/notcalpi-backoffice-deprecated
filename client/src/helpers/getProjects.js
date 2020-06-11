import axios from 'axios';
import {
  fetchProjectsBegin,
  fetchProjectsSuccess,
  fetchProjectsFailure,
} from '../actions';

// function fetchProjects() {
//   return async (dispatch) => {
//     dispatch(fetchProjectsBegin());
//     let response = await axios('http://localhost:5000/api');
//     response = response.data;
//     handleErrors(response);
//     console.log(response);
//     dispatch(fetchProjectsSuccess(response));
//   };
// }

function fetchProjects() {
  return (dispatch) => {
    dispatch(fetchProjectsBegin());
    return fetch('http://localhost:5000/api')
      .then(handleErrors)
      .then((res) => {
        res.json();
        // dispatch(fetchProjectsSuccess(res));
        // return res;
      })
      .then((json) => {
        dispatch(fetchProjectsSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchProjectsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  console.log('ERROR -->', response, 'response');
  return response;
}

export default fetchProjects;
