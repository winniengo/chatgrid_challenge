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
    <img
      src='https://res.cloudinary.com/dbgp4ftst/image/upload/v1485806236/add_ywlozp.png'
      onClick={() => openModal(createDialog, 'add')} />
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="" >
      <div className='dialog-modal-form'>
        <img
          src='https://res.cloudinary.com/dbgp4ftst/image/upload/v1485806342/close_xzmwii.png'
          onClick={closeModal} />
        <Form
          handleSubmit={handleSubmit}
          formType={formType}
          formInput={formInput} />
      </div>
    </ReactModal>
  </section>
);
