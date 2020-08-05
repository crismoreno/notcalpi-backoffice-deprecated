import {
  fetchProjectSuccess,
  fetchProjectRequest,
} from '../../actions/projects';
import axios from 'axios';

const url = '/api';
let user = JSON.parse(localStorage.getItem('user'));

function fetchProject(projectId) {
  return (dispatch) => {
    dispatch(fetchProjectRequest());
    const projectData = axios({
      method: 'get',
      url: `${url}/project/${projectId}`,
      headers: { Authorization: 'Bearer ' + user.token },
    });
    const projectTags = axios({
      method: 'get',
      url: `${url}/projecttags/${projectId}`,
      headers: { Authorization: 'Bearer ' + user.token },
    });
    const projectCodingLangs = axios({
      method: 'get',
      url: `${url}/projectcodinglangs/${projectId}`,
      headers: { Authorization: 'Bearer ' + user.token },
    });
    const projectMadeAts = axios({
      method: 'get',
      url: `${url}/projectmadeat/${projectId}`,
      headers: { Authorization: 'Bearer ' + user.token },
    });
    Promise.all([
      projectData,
      projectTags,
      projectCodingLangs,
      projectMadeAts,
    ]).then((values) => {
      dispatch(fetchProjectSuccess(values));
    });
  };
}

export default fetchProject;
