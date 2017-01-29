// type constants
export const CREATE_DIALOG = "CREATE_DIALOG";
export const EDIT_DIALOG = "EDIT DIALOG";
export const DELETE_DIALOG = "DELETE DIALOG";

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
