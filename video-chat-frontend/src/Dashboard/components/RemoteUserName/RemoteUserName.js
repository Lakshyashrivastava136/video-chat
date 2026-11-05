import React from 'react';

const styles = {
  name: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    padding: '6px 14px',
    borderRadius: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#e6e5e8',
    fontSize: '16px'
  }
};

const RemoteUserName = ({ username }) => {
  if (!username) {
    return null;
  }

  return <div style={styles.name}>{username}</div>;
};

export default RemoteUserName;