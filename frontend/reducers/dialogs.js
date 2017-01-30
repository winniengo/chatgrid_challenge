import {
  CREATE_DIALOG,
  EDIT_DIALOG,
  DELETE_DIALOG,
  MOVE_DIALOG,
  OPEN_MODAL,
  CLOSE_MODAL } from '../constants/dialogs';
import update from 'react/lib/update';
import { merge, take, drop } from 'lodash';

const defaultState = {
  isOpen: false,
  formType: '',
  formInput: '',
  handleSubmit: null,
};

const modal = (state = defaultState, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        handleSubmit: action.handleSubmit,
        formType: action.formType,
        formInput: action.formInput,
      };
    case CREATE_DIALOG:
    case EDIT_DIALOG:
    case CLOSE_MODAL:
      return merge({}, defaultState); // reset form
    default:
      return state;
  }
}

const index = (state = [], action) => {
  let nextState;
  switch(action.type) {
    case CREATE_DIALOG:
      nextState = state.slice(0);
      nextState.push(action.dialog);
      return nextState;
    case EDIT_DIALOG:
      nextState = state.slice(0, action.idx);
      nextState.push(action.dialog);
      return nextState.concat(state.slice(action.idx + 1));
    case DELETE_DIALOG:
      nextState = state.slice(0, action.idx);
     return nextState.concat(state.slice(action.idx + 1));
    case MOVE_DIALOG:
      const movedDialog = state[action.fromIdx];
      nextState = state.slice(0);
      nextState.splice(action.fromIdx, 1)
      nextState.splice(action.toIdx, 0, movedDialog);
      return nextState;
    default:
      return state;
  }
}

export default (state = {}, action) => ({
  index: index(state.index, action),
  modal: modal(state.modal, action)
});
