// export const POST_FILE = "POST_FILE";
// export const RECEIVE_FILE = "RECEIVE_FILE";
//
// export const createFile = file => ({
//   type: POST_FILE,
//   file
// });
//
// export const receiveFile = file => ({
//   type: RECIEVE_FILE,
//   file
// });

export const CREATE_DIALOG = "CREATE_DIALOG";
export const EDIT_DIALOG = "EDIT DIALOG";
export const DELETE_DIALOG = "DELETE DIALOG";

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
