import { fetchContactFormsSuccess } from '../actions/contactForms';

const url = '/api';

function fetchContactForms() {
  return (dispatch) => {
    return fetch(`${url}/getForms`).then((response) => {
      response.json().then((data) => {
        dispatch(fetchContactFormsSuccess(data));
        return data;
      });
    });
  };
}

export default fetchContactForms;
