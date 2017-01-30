import React from 'react';

export default ({ dialog, handleEdit, handleDelete }) => (
  <div className='dialog-item'>
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
