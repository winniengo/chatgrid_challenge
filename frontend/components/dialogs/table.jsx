import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Modal from './modal';
import TableRow from './table_row';

class Table extends Component {
  render() {
    return (
      <section>
        <div className='dialog-table'>
          {this.props.index.map((dialog, index) => (
            <TableRow
              key={idx}
              index={index}
              dialog={dialog}
              openModal={this.props.openModal}
              editDialog={this.props.editDialog}
              deleteDialog={this.props.deleteDialog} />
          ))}
        </div>
        <button onClick={() => this.props.openModal(this.props.createDialog, 'add')}>Add</button>
        <Modal
          modalIsOpen={this.props.modalIsOpen}
          closeModal={this.props.closeModal}
          handleSubmit={this.props.modalHandleSubmit}
          formType={this.props.modalFormType}
          formInput={this.props.modalFormInput}
        />
      </section>
    );
  }
}

export default DragDropContext(HTML5Backend)(Table);
