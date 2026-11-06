import React from 'react';
import { acceptIncomingCallRequest, rejectIncomingCallRequest } from '../../../utils/webRTC/webRTCHandler';

import './IncomingCallDialog.css';

const IncomingCallDialog = ({ callerUsername }) => {
  const handleAcceptButtonPressed = () => {
    acceptIncomingCallRequest();
  };

  const handleRejectButtonPressed = () => {
    rejectIncomingCallRequest();
  };

  const initial = (callerUsername || '?').trim().charAt(0).toUpperCase();

  return (
    <div className='direct_call_dialog'>
      <span className='direct_call_dialog_avatar'>{initial}</span>
      <span className='direct_call_dialog_caller_name'>{callerUsername}</span>
      <span className='direct_call_dialog_hint'>is calling you</span>
      <div className='direct_call_dialog_button_container'>
        <button className='direct_call_dialog_accept_button' onClick={handleAcceptButtonPressed}>
          Accept
        </button>
        <button className='direct_call_dialog_reject_button' onClick={handleRejectButtonPressed}>
          Decline
        </button>
      </div>
    </div>
  );
};

export default IncomingCallDialog;
