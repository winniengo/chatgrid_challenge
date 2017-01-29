import { CREATE_DIALOG, EDIT_DIALOG, DELETE_DIALOG } from '../actions/dialogs';
import { merge } from 'lodash';

const dialogs = (state = {}, action) => {
  switch(action) {
    case CREATE_DIALOG:
    case EDIT_DIALOG:
    case DELETE_DIALOG:
    default:
      return state;
  }
};

export default dialogs;

// dialogs = {
//   1: {
//     content:
//     order:
//   }
//   2: {
//     content:
//     order:
//   }
// }
