import fetchProjects from '../GET/getProjects';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function createProject(body, callback) {
  return (dispatch) => {
    const {
      title,
      customer,
      collaborators,
      completion_date,
      orderby,
      link_to_prod,
      link_to_repo,
      link_to_download,
      video,
      tags,
      codingLangs,
      madeats,
      description,
    } = body;

    let { show, is_featured } = body;

    if (is_featured === true) {
      is_featured = 1;
    } else {
      is_featured = 0;
    }
    if (show === true) {
      show = 1;
    } else {
      show = 0;
    }

    // console.log(
    //   'is_featured: ' +
    //     is_featured +
    //     'show: ' +
    //     show +
    //     'tags: ' +
    //     tags +
    //     'codingLangs' +
    //     codingLangs +
    //     'madeats: ' +
    //     madeats
    // );

    axios({
      method: 'post',
      url: `${url}/createproject`,
      data: qs.stringify({
        title,
        customer,
        collaborators,
        completion_date,
        orderby,
        link_to_prod,
        link_to_repo,
        link_to_download,
        video,
        tags,
        codingLangs,
        madeats,
        show,
        is_featured,
        description,
      }),
      headers: authHeader(),
    })
      .then(function (response) {
        dispatch(fetchProjects(response.data));
        callback(null, 'Project was created successfully');
      })
      .catch(function (err) {
        callback(err, null);
      });
  };
}

export { createProject };
