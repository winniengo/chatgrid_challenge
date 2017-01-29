import { connect } from 'react-redux';
import { createDialog, editDialog, deleteDialog, openModal, closeModal } from '../../actions/dialogs';
import Table from './table';

const mapStateToProps = ({ dialogs }) => ({
  index: dialogs.index,
  modalIsOpen: dialogs.modal.isOpen,
  modalFormType: dialogs.modal.formType,
  modalFormInput: dialogs.modal.formInput
});

const mapDispatchToProps = dispatch => ({
  createDialog: dialog => dispatch(createDialog(dialog)),
  editDialog: dialog => dispatch(editDialog(dialog)),
  deleteDialog: id => dispatch(deleteDialog(id)),
  openModal: (formType, formInput) => dispatch(openModal(formType, formInput)),
  closeModal: () => dispatch(closeModal())
});

const mergeProps = (stateProps, dispatchProps) => ({
  handleSubmit: stateProps.modalFormType === 'add' ? dispatchProps.createDialog : dispatchProps.editDialog,
  formType: stateProps.modalFormType,
  formInput: stateProps.modalFormInput,
  index: stateProps.index,
  modalIsOpen: stateProps.modalIsOpen,
  deleteDialog: dispatchProps.deleteDialog,
  openModal: dispatchProps.openModal,
  closeModal: dispatchProps.closeModal
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Table);
