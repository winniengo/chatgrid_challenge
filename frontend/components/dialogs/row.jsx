import React from 'react';

export default ({ dialog, editDialog, deleteDialog }) => (
  <div className='dialog-row'>
    <span>{dialog}</span>
    <section>
      <img src='https://res.cloudinary.com/dbgp4ftst/image/upload/v1485562764/icons/edit.png'/>
      <img src='https://res.cloudinary.com/dbgp4ftst/image/upload/v1485563005/icons/delete.png'/>
    </section>
  </div>
);
