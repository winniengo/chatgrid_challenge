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

export const editDialog = (dialog, idx) => ({
  type: EDIT_DIALOG,
  dialog,
  idx
});

export const deleteDialog = idx => ({
  type: DELETE_DIALOG,
  idx
});

export const openModal = (handleSubmit, formType, formInput) => ({
  type: OPEN_MODAL,
  handleSubmit,
  formType,
  formInput
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
