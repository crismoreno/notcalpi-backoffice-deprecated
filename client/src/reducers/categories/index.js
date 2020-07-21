import { combineReducers } from 'redux';
import tags from './tags';
import codingLangs from './codingLangs';
import madeAts from './madeAts';
import tagsByProject from './tagsByProject';
import codingLangsByProject from './codingLangsByProject';
import madeAtsByProject from './madeAtsByProject';

export default combineReducers({
  tags,
  codingLangs,
  madeAts,
  tagsByProject,
  codingLangsByProject,
  madeAtsByProject,
});
