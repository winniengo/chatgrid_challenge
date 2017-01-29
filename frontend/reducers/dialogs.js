import { CREATE_DIALOG, EDIT_DIALOG, DELETE_DIALOG, OPEN_MODAL, CLOSE_MODAL } from '../actions/dialogs';
import { merge } from 'lodash';

const defaultState = {
  isOpen: false,
  formType: '',
  formInput: ''
};

const modal = (state = defaultState, action) => {
  let nextState;
  switch(action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        formType: action.formType,
        formInput: action.formInput
      };
    case CLOSE_MODAL:
      return merge({}, defaultState);
    default:
      return state;
  }
}

const index = (state = [], action) => {
  switch(action.type) {
    case CREATE_DIALOG:
    case EDIT_DIALOG:
    case DELETE_DIALOG:
    default:
      return state;
  }
}

export default (state = {}, action) => ({
  index: index(state.index, action),
  modal: modal(state.modal, action)
});
