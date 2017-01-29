import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modals';
import { merge } from 'lodash';

const defaultState = {
  dialogs: false
}

const modals = (state = defaultState, action) => {
  let nextState;
  switch(action.type) {
    case OPEN_MODAL:
      nextState = merge({}, state);
      nextState[action.modalType] = true;
      return nextState;
    case CLOSE_MODAL:
      nextState = merge({}, state);
      nextState[action.modalType] = false;
      return nextState;
    default:
      return state;
  }
};

export default modals;
