import { fetchTagsSuccess } from '../actions';

const url = '/api';

function fetchTags() {
  return (dispatch) => {
    return fetch(`${url}/tagslist`).then((response) => {
      response.json().then((data) => {
        dispatch(fetchTagsSuccess(data));
        return data;
      });
    });
  };
}

export { fetchTags };
