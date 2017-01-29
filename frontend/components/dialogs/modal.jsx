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

export default ({ modalIsOpen, closeModal, handleSubmit, formType, formInput }) => (
  <ReactModal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="" >
    <button onClick={closeModal}>close</button>
    <Form
      handleSubmit={handleSubmit}
      formType={formType}
      formInput={formInput} />
  </ReactModal>
);
