import { authHeader } from '../authHeader';
import fetchProjects from '../GET/getProjects';

const url = '/api/deleteproject';

function deleteProject(projectId) {
  return (dispatch) => {
    const requestOptions = {
      method: 'DELETE',
      headers: authHeader(),
    };
    return fetch(`${url}/${projectId}`, requestOptions).then(
      dispatch(fetchProjects())
    );
  };
}

export default deleteProject;
