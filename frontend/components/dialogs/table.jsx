import React from 'react';
import Modal from './modal';
import TableRow from './table_row';

export default (props) => (
  <section>
    <div className='dialog-table'>
      {props.index.map((dialog, idx) => (
        <TableRow
          key={idx}
          idx={idx}
          dialog={dialog}
          openModal={props.openModal}
          editDialog={props.editDialog}
          deleteDialog={props.deleteDialog} />
      ))}
    </div>
    <button onClick={() => props.openModal(props.createDialog, 'add')}>Add</button>
    <Modal
      modalIsOpen={props.modalIsOpen}
      closeModal={props.closeModal}
      handleSubmit={props.modalHandleSubmit}
      formType={props.modalFormType}
      formInput={props.modalFormInput}
    />
  </section>
);
