import React from 'react';

const SubmitButton = ({ disabled }) => {
  return (
    <button type='submit' className='login-page_button' disabled={disabled}>
      Start chatting
    </button>
  );
};

export default SubmitButton;
