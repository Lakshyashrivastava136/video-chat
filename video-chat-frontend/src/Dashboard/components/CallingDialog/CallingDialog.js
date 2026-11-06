import React from 'react';
import './CallingDialog.css';
import { hangUp } from '../../../utils/webRTC/webRTCHandler';

const CallingDialog = () => {
  const handleHangUpButtonPressed = () => {
    hangUp();
  };

  return (
    <div className='direct_calling_dialog'>
      <span className='direct_calling_dialog_text'>Calling…</span>
      <button className='direct_calling_dialog_cancel' onClick={handleHangUpButtonPressed}>
        Cancel call
      </button>
    </div>
  );
};

export default CallingDialog;
