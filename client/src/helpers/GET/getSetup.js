import { fetchSetupSuccess } from '../../actions/setup';
import { authHeader } from '../authHeader';

const url = '/api';

function fetchSetup() {
  return (dispatch) => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    };
    return fetch(url + '/getsetup', requestOptions).then((response) => {
      response.json().then((data) => {
        dispatch(fetchSetupSuccess(data));
        return data;
      });
    });
  };
}

export default fetchSetup;
