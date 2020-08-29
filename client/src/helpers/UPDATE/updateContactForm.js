import fetchContactForms from '../GET/getContactForms';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function updateContactForm(data, idToUpdate, callback) {
  return (dispatch) => {
    const { state } = data;
    axios({
      method: 'put',
      url: `${url}/updatecontactform/${idToUpdate}`,
      data: qs.stringify({
        state,
      }),
      headers: authHeader(),
    })
      .then(function (response) {
        dispatch(fetchContactForms());
        callback(null, 'ContactForm was updated successfully');
      })
      .catch(function (err) {
        callback(err, null);
      });
  };
}

export { updateContactForm };
