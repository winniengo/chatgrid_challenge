import { connect } from 'react-redux';
import {editDialog, deleteDialog, moveDialog, openModal } from '../../../actions/dialogs';
import Index from './index';

const mapStateToProps = ({ dialogs }) => ({
  index: dialogs.index,
});

const mapDispatchToProps = dispatch => ({
  editDialog: idx => dialog => dispatch(editDialog(dialog, idx)),
  deleteDialog: idx => dispatch(deleteDialog(idx)),
  moveDialog: (fromIdx, toIdx) => dispatch(moveDialog(fromIdx, toIdx)),
  openModal: (handleSubmit, formType, formInput) => dispatch(openModal(handleSubmit, formType, formInput)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
