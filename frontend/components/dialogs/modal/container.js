import { connect } from 'react-redux';
import { createDialog, openModal, closeModal } from '../../../actions/dialogs';
import ModalForm from './modal_form';

const mapStateToProps = ({ dialogs }) => ({
  isOpen: dialogs.modal.isOpen,
  formType: dialogs.modal.formType,
  formInput: dialogs.modal.formInput,
  handleSubmit: dialogs.modal.handleSubmit
});

const mapDispatchToProps = dispatch => ({
  createDialog: dialog => dispatch(createDialog(dialog)),
  openModal: (handleSubmit, formType, formInput) => dispatch(openModal(handleSubmit, formType, formInput)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalForm);
