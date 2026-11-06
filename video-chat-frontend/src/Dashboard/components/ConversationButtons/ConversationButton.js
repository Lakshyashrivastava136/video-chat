import React from 'react';

const ConversationButton = ({ onClickHandler, label, variant, children }) => {
  const className = `conversation_button${variant ? ` conversation_button--${variant}` : ''}`;

  return (
    <button
      type='button'
      className={className}
      onClick={onClickHandler}
      title={label}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default ConversationButton;
