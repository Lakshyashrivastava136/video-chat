import React from 'react';

const UsernameInput = (props) => {
  const { username, setUsername } = props;

  return (
    <div className='login-page_input_container'>
      <label className='login-page_label' htmlFor='username'>Your name</label>
      <input
        id='username'
        placeholder='e.g. Riya'
        type='text'
        autoFocus
        autoComplete='off'
        maxLength={20}
        value={username}
        onChange={(event) => { setUsername(event.target.value); }}
        className='login-page_input'
      />
    </div>
  );
};

export default UsernameInput;
