import { connect } from 'react-redux';
import { createDialog, editDialog, deleteDialog } from '../../actions/dialogs';
import Table from './table';

const mapStateToProps = ({ dialogs }) => ({
  dialogs
});

const mapDispatchToProps = dispatch => ({
  createDialog: dialog => dispach(createDialog(dialog)),
  editDialog: dialog => dispach(editDialog(dialog)),
  deleteDialog: id => dispach(deleteDialog(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
