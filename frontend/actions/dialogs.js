// type constants
export const CREATE_DIALOG = "CREATE_DIALOG";
export const EDIT_DIALOG = "EDIT DIALOG";
export const DELETE_DIALOG = "DELETE DIALOG";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

// action creators
export const createDialog = dialog => ({
  type: CREATE_DIALOG,
  dialog
});

export const editDialog = dialog => ({
  type: EDIT_DIALOG,
  dialog
});

export const deleteDialog = id => ({
  type: DELETE_DIALOG,
  id
});

export const openModal = (formType, formInput) => ({
  type: OPEN_MODAL,
  formType,
  formInput
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
