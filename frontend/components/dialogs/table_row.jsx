import React from 'react';
import Row from './row';

export default ({ idx, dialog, openModal, editDialog, deleteDialog }) => {
    const handleEdit = () => openModal(editDialog(idx), 'edit', dialog);
    const handleDelete = () => deleteDialog(idx);

    return (
      <Row
        dialog={dialog}
        handleEdit={handleEdit}
        handleDelete={handleDelete} />
    );
}
