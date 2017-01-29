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
          handleEdit={() => props.openModal('edit', dialog)}
          handleDelete={() => props.deleteDialog(dialog)} />
      ))}
    </div>
    <button onClick={() => props.openModal('add')}>Add</button>
    <Modal
      modalIsOpen={props.modalIsOpen}
      closeModal={props.closeModal}
      handleSubmit={props.handleSubmit}
      formType={props.formType}
      formInput={props.formInput}
    />
  </section>
);
