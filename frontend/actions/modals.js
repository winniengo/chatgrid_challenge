// type constants
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

// action creators
export const openModal = modalType => ({
  type: OPEN_MODAL,
  modalType
});

export const closeModal = modalType => ({
  type: CLOSE_MODAL,
  modalType
});
