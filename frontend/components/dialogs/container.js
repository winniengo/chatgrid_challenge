import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modals';
import { createDialog, editDialog, deleteDialog } from '../../actions/dialogs';
import Table from './table';

const mapStateToProps = ({ dialogs, modals }) => ({
  modalIsOpen: modals.dialogs,
  dialogs
});

const mapDispatchToProps = dispatch => ({
  createDialog: dialog => dispatch(createDialog(dialog)),
  editDialog: dialog => dispatch(editDialog(dialog)),
  deleteDialog: id => dispatch(deleteDialog(id)),
  openModal: () => dispatch(openModal('dialogs')),
  closeModal: () => dispatch(closeModal('dialogs'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
