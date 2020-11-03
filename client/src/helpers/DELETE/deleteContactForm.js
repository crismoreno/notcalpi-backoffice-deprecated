import { authHeader } from '../authHeader';
import fetchContactForms from '../GET/getContactForms';

const url = '/api/deletecontactform';

function deleteContactForm(messageId) {
  return (dispatch) => {
    const requestOptions = {
      method: 'DELETE',
      headers: authHeader(),
    };
    return fetch(`${url}/${messageId}`, requestOptions).then(
      dispatch(fetchContactForms())
    );
  };
}

export default deleteContactForm;
