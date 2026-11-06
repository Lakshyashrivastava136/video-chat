import React from 'react';
import './GroupCallButton.css';

const GroupCallButton = ({ onClickHandler, label }) => {
  const isLeave = label === 'Leave room';

  return (
    <button
      onClick={onClickHandler}
      className={`group_call_button${isLeave ? ' group_call_button--leave' : ''}`}
    >
      { label }
    </button>
  );
};

export default GroupCallButton;
