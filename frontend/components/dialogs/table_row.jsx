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

const cardSource = {
  beginDrag(props) {
    props.updateFromIndex(props.index);

    return {
      id: props.id,
      index: props.index,
    };
  },

  endDrag(props, monitor) {
    if (monitor.didDrop()) { // drop was handled by a compatible drop target
      props.moveDialog(props.fromIndex, props.index); // update store
    }
  }
};

const collectSource = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return; // don't replace rows with themselves
    }

    // determine rectangle on screen,
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // get vertical middle,
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // determine mouse position
    const clientOffset = monitor.getClientOffset();

    // get pixels on the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // only perform the move when the mouse has crossed half of the items height
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return; // when dragging downwards, only move when the cursor is below 50%
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return; // when dragging upwards, only move when the cursor is above 50%
    }

    props.swapRows(dragIndex, hoverIndex); // update table state

    monitor.getItem().index = hoverIndex;
  },
};

const collectTarget = connect => ({
  connectDropTarget: connect.dropTarget(),
});

class TableRow extends Component {
  render() {
    const {
      index,
      dialog,
      openModal,
      editDialog,
      deleteDialog,
      isDragging,
      connectDragSource,
      connectDropTarget,
    } = this.props;

    const handleEdit = () => openModal(editDialog(index), 'edit', dialog);
    const handleDelete = () => deleteDialog(index);

    const opacity = isDragging ? 0 : 1;

    return connectDropTarget(connectDragSource(
      <div style={merge({}, style, {opacity})}>
        <Row
          dialog={dialog}
          handleEdit={handleEdit}
          handleDelete={handleDelete} />
      </div>
    ));
  }
};

const DraggableTableRow = DragSource('card', cardSource, collectSource)(TableRow);
const DroppableDraggableTableRow = DropTarget('card', cardTarget, collectTarget)(DraggableTableRow);

export default DroppableDraggableTableRow;
