import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'react/lib/update';
import Modal from './modal';

import TableRow from './table_row.jsx';

const style = {
  width: 400,
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.index.map((dialog, id) => ({ dialog, id })),
      fromIndex: null
    };

    this.swapRows = this.swapRows.bind(this);
    this.updateFromIndex = this.updateFromIndex.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      rows: nextProps.index.map((dialog, id) => ({ dialog, id }))
    });
  }

  swapRows(fromIndex, toIndex) {
    const draggedRow = this.state.rows[fromIndex];

    this.setState(update(this.state, {
      rows: {
        $splice: [
          [fromIndex, 1],
          [toIndex, 0, draggedRow],
        ],
      },
    }));
  }

  updateFromIndex(idx) {
    this.setState({fromIndex: idx});
  }

  render() {
    const { openModal, createDialog, editDialog, deleteDialog, moveDialog } = this.props;

    return (
      <div style={style}>
        {this.state.rows.map(({ id, dialog}, idx) => (
          <TableRow
            key={id}
            id={id}
            index={idx}
            dialog={dialog}
            fromIndex={this.state.fromIndex}
            swapRows={this.swapRows}
            updateFromIndex={this.updateFromIndex}
            openModal={openModal}
            editDialog={editDialog}
            deleteDialog={deleteDialog}
            moveDialog={moveDialog}
          />
        ))}
        <button onClick={() => openModal(createDialog, 'add')}>Add</button>
        <Modal
          modalIsOpen={this.props.modalIsOpen}
          closeModal={this.props.closeModal}
          handleSubmit={this.props.modalHandleSubmit}
          formType={this.props.modalFormType}
          formInput={this.props.modalFormInput}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Table);
