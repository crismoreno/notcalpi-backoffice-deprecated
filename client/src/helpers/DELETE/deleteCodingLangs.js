import { authHeader } from '../authHeader';
import { fetchCodingLangs } from '../GET/getCategories';

const url = '/api';

function deleteCodingLang(codingLangId) {
  return (dispatch) => {
    const requestOptions = {
      method: 'DELETE',
      headers: authHeader(),
    };
    return fetch(
      `${url}/deletecodinglang/${codingLangId}`,
      requestOptions
    ).then(dispatch(fetchCodingLangs()));
  };
}

export default deleteCodingLang;
