import { connect } from 'react-redux';
import { createDialog, editDialog, deleteDialog, moveDialog, openModal, closeModal } from '../../actions/dialogs';
import Table from './table';

const mapStateToProps = ({ dialogs }) => ({
  index: dialogs.index,
  modalIsOpen: dialogs.modal.isOpen,
  modalFormType: dialogs.modal.formType,
  modalFormInput: dialogs.modal.formInput,
  modalHandleSubmit: dialogs.modal.handleSubmit
});

const mapDispatchToProps = dispatch => ({
  createDialog: dialog => dispatch(createDialog(dialog)),
  editDialog: idx => dialog => dispatch(editDialog(dialog, idx)),
  deleteDialog: idx => dispatch(deleteDialog(idx)),
  moveDialog: (fromIdx, toIdx) => dispatch(moveDialog(fromIdx, toIdx)),
  openModal: (handleSubmit, formType, formInput) => dispatch(openModal(handleSubmit, formType, formInput)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);
