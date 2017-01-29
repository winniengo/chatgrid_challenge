import { combineReducers } from 'redux';
import modals from './modals';
import dialogs from './dialogs';

export default combineReducers({
  dialogs,
  modals
});
