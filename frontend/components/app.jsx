import React from 'react';
import DialogModalContainer from './dialogs/modal/container';
import DialogIndexContainer from './dialogs/index/container';

export default () => (
  <div className='app'>
    <DialogIndexContainer />
    <DialogModalContainer />
  </div>
);
