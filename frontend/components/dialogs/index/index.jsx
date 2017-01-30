import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'react/lib/update';

import IndexItem from './index_item.jsx';

class DialogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.index.map((dialog, id) => ({ dialog, id })),
      fromIndex: null
    };

    this.swapIndexItems = this.swapIndexItems.bind(this);
    this.updateFromIndex = this.updateFromIndex.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.index.map((dialog, id) => ({ dialog, id }))
    });
  }

  swapIndexItems(fromIndex, toIndex) {
    const draggedIndexItem = this.state.items[fromIndex];

    this.setState(update(this.state, {
      items: {
        $splice: [
          [fromIndex, 1],
          [toIndex, 0, draggedIndexItem],
        ],
      },
    }));
  }

  updateFromIndex(idx) {
    this.setState({fromIndex: idx});
  }

  render() {
    const { openModal, editDialog, deleteDialog, moveDialog } = this.props;

    return (
      <div className='dialog-index'>
        {this.state.items.map(({ id, dialog }, idx) => (
          <IndexItem
            key={id}
            id={id}
            index={idx}
            dialog={dialog}
            fromIndex={this.state.fromIndex}
            swapIndexItems={this.swapIndexItems}
            updateFromIndex={this.updateFromIndex}
            openModal={openModal}
            editDialog={editDialog}
            deleteDialog={deleteDialog}
            moveDialog={moveDialog}
          />
        ))}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DialogIndex);
