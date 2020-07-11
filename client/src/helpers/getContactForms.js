import { fetchContactFormsSuccess } from '../actions/contactForms';
import { authHeader } from './authHeader';

const url = '/api';

function fetchContactForms() {
  return (dispatch) => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    };
    return fetch(`${url}/getForms`, requestOptions).then((response) => {
      response.json().then((data) => {
        dispatch(fetchContactFormsSuccess(data));
        return data;
      });
    });
  };
}

export default fetchContactForms;
