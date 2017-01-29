import React from 'react';
import Modal from 'react-modal';
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

export default ({ dialog, handleEdit, handleDelete }) => (
  <div className='dialog-row'>
    <span>{dialog}</span>
    <section>
      <img
        src='https://res.cloudinary.com/dbgp4ftst/image/upload/v1485562764/icons/edit.png'
        onClick={handleEdit} />
      <img
        src='https://res.cloudinary.com/dbgp4ftst/image/upload/v1485563005/icons/delete.png'
        onClick={handleDelete} />
    </section>
  </div>
);
