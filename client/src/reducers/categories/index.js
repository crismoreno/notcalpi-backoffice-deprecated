import { combineReducers } from 'redux';
import tags from './tags';
import codingLangs from './codingLangs';
import madeAts from './madeAts';

export default combineReducers({
  tags,
  codingLangs,
  madeAts,
});
