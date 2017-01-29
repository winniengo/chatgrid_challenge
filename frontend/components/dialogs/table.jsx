import React from 'react';
import Modal from './modal';
import Row from './row';

export default (props) => (
  <section>
    <div className='dialog-table'>
      {props.index.map((dialog, idx) => (
        <Row
          key={idx}
          dialog={dialog}
          handleEdit={() => props.openModal(props.editDialog(idx), 'edit', dialog)}
          handleDelete={() => props.deleteDialog(idx)} />
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
