import React from 'react';

const RemoteUserName = ({ username }) => {
  if (!username) {
    return null;
  }

  return <div className='remote_user_name'>{username}</div>;
};

export default RemoteUserName;
