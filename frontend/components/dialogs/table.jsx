import React from 'react';
import Modal from 'react-modal';
import Row from './row';
import Form from './form';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default ({ dialogs, createDialog, editDialog, deleteDialog, modalIsOpen, openModal, closeModal }) => (
  <section>
    <div className='dialog-table'>
      {dialogs.map((dialog, idx) => (
        <Row
          key={idx}
          dialog={dialog}
          editDialog={editDialog}
          deleteDialog={deleteDialog} />
      ))}
    </div>
    <button onClick={openModal}>Add</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Dialog Form" >
      <button onClick={closeModal}>close</button>
      <Form handleSubmit={createDialog} btnText='add dialog' />
    </Modal>
  </section>
);
