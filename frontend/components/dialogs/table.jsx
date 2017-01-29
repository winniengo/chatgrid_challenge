import React from 'react';
import Row from './row';

export default ({ dialogs, createDialog, editDialog, deleteDialog }) => (
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
    <button>New Dialog</button>
  </section>
);
