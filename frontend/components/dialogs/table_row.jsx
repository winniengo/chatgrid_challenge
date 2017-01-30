// export default ({ idx, dialog, openModal, editDialog, deleteDialog }) => {
//     const handleEdit = () => openModal(editDialog(idx), 'edit', dialog);
//     const handleDelete = () => deleteDialog(idx);
//
//     return (
//       <Row
//         dialog={dialog}
//         handleEdit={handleEdit}
//         handleDelete={handleDelete} />
//     );
// }

import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import { merge } from 'lodash';
import Row from './row';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};

const rowSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const collectSource = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

const rowTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return; // don't replace dialogs with themselves
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;


    // only perform the move when the mouse has crossed half of the items height
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return; // when dragging downwards, only move when the cursor is below 50%
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return; // when dragging upwards, only move when the cursor is above 50%
    }

    props.moveRow(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  }
}

const collectTarget = connect => ({
  connectDropTarget: connect.dropTarget(),
});

class TableRow extends Component {
  render () {

    const { index, dialog, openModal, editDialog, deleteDialog } = this.props;
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;

    const handleEdit = () => openModal(editDialog(index), 'edit', dialog);
    const handleDelete = () => deleteDialog(index);

    return connectDropTarget(connectDragSource(
      <div style={merge({}, style, { opacity })}>
        <Row
          dialog={dialog}
          handleEdit={handleEdit}
          handleDelete={handleDelete} />
      </div>
    ));
  }
}

export default DropTarget(
  'row',
  rowTarget,
  collectTarget
)(DragSource('row', rowSource, collectSource)(TableRow));
