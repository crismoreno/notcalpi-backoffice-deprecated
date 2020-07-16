import { authHeader } from '../authHeader';
import { fetchMadeAts } from '../GET/getCategories';

const url = '/api/deletemadeat';

function deleteMadeAt(madeAtId) {
  return (dispatch) => {
    const requestOptions = {
      method: 'DELETE',
      headers: authHeader(),
    };
    return fetch(`${url}/${madeAtId}`, requestOptions).then(
      dispatch(fetchMadeAts())
    );
  };
}

export default deleteMadeAt;
