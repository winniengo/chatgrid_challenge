import { CREATE_DIALOG, EDIT_DIALOG, DELETE_DIALOG, OPEN_MODAL, CLOSE_MODAL } from '../actions/dialogs';
import { merge } from 'lodash';

const defaultState = {
  isOpen: false,
  formType: '',
  formInput: '',
  handleSubmit: null,
};

const modal = (state = defaultState, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      console.log(action);
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
  switch(action.type) {
    case CREATE_DIALOG:
      return [...state, action.dialog];
    case EDIT_DIALOG:
      return [
        ...state.slice(0, action.idx),
        action.dialog,
        ...state.slice(action.idx + 1)
      ];
    case DELETE_DIALOG:
     return [
       ...state.slice(0, action.idx),
       ...state.slice(action.idx + 1)
     ];
    default:
      return state;
  }
}

export default (state = {}, action) => ({
  index: index(state.index, action),
  modal: modal(state.modal, action)
});
