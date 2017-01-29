import { CREATE_DIALOG, EDIT_DIALOG, DELETE_DIALOG } from '../actions/dialogs';
import { merge } from 'lodash';

const dialogs = (state = [], action) => {
  switch(action.type) {
    case CREATE_DIALOG:
      return [...state, action.dialog];
    case EDIT_DIALOG:
    case DELETE_DIALOG:
    default:
      return state;
  }
};

export default dialogs;
