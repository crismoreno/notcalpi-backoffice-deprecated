import fetchProjects from '../GET/getProjects';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function updateProject(body, idToUpdate, callback) {
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
      description,
    } = body;

    let { show, is_featured, tags, codinglangs, madeats } = body;

    switch (is_featured) {
      case true:
        is_featured = 1;
        break;
      case 'checked':
        is_featured = 1;
        break;
      case false:
        is_featured = 0;
        break;
      case null:
        is_featured = 0;
        break;
      case '':
        is_featured = 0;
        break;
      default:
        is_featured = null;
        break;
    }

    switch (show) {
      case true:
        show = 1;
        break;
      case 'checked':
        show = 1;
        break;
      case false:
        show = 0;
        break;
      case null:
        show = 0;
        break;
      case '':
        show = 0;
        break;
      default:
        show = null;
        break;
    }

    if (tags && Array.isArray(tags) && tags.length) {
      tags = tags.toString();
    } else {
      tags = '';
    }
    if (codinglangs && Array.isArray(codinglangs) && codinglangs.length) {
      codinglangs = codinglangs.toString();
    } else {
      codinglangs = '';
    }
    if (madeats && Array.isArray(madeats) && madeats.length) {
      madeats = madeats.toString();
    } else {
      madeats = '';
    }

    console.log(
      'tags: ' + tags + ' codinglangs: ' + codinglangs + ' madeats: ' + madeats
    );

    axios({
      method: 'put',
      url: `${url}/updateproject/${idToUpdate}`,
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
        codinglangs,
        madeats,
        show,
        is_featured,
        description,
      }),
      headers: authHeader(),
    })
      .then(function (response) {
        dispatch(fetchProjects(response.data));
        callback(null, 'Project was updated successfully');
      })
      .catch(function (err) {
        callback(err, null);
      });
  };
}

export { updateProject };
