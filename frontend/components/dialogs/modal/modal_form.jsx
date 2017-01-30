import React from 'react';
import ReactModal from 'react-modal';
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

export default ({ isOpen, handleSubmit, formType, formInput, openModal, closeModal, createDialog }) => (
  <section>
    <button onClick={() => openModal(createDialog, 'add')}>Add</button>
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="" >
      <button onClick={closeModal}>close</button>
      <Form
        handleSubmit={handleSubmit}
        formType={formType}
        formInput={formInput} />
    </ReactModal>
  </section>
);
