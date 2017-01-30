// type constants
import {
  CREATE_DIALOG,
  EDIT_DIALOG,
  DELETE_DIALOG,
  MOVE_DIALOG,
  OPEN_MODAL,
  CLOSE_MODAL } from '../constants/dialogs';

// action creators
export const createDialog = dialog => ({
  type: CREATE_DIALOG,
  dialog
});

export const editDialog = (dialog, idx) => ({
  type: EDIT_DIALOG,
  dialog,
  idx
});

export const deleteDialog = idx => ({
  type: DELETE_DIALOG,
  idx
});

export const moveDialog = (fromIdx, toIdx) => ({
  type: MOVE_DIALOG,
  fromIdx,
  toIdx
});

export const openModal = (handleSubmit, formType, formInput) => ({
  type: OPEN_MODAL,
  handleSubmit,
  formType,
  formInput
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});
