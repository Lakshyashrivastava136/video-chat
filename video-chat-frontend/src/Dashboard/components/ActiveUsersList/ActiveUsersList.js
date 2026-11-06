import React from 'react';
import ActiveUsersListItem from './ActiveUsersListItem';
import { connect } from 'react-redux';

import './ActiveUsersList.css';

const ActiveUsersList = ({ activeUsers, callState }) => {
  return (
    <div className='active_user_list_container'>
      <div className='active_user_list_header'>
        <span className='active_user_list_title'>People online</span>
        <span className='active_user_list_count'>{activeUsers.length}</span>
      </div>
      {activeUsers.length === 0 && (
        <p className='active_user_list_empty'>
          Nobody else is online yet. To test a call, open this app in a
          second window and log in with a different name.
        </p>
      )}
      {activeUsers.map((activeUser) =>
        <ActiveUsersListItem
          key={activeUser.socketId}
          activeUser={activeUser}
          callState={callState}
        />)}
    </div>
  );
};

const mapStateToProps = ({ dashboard, call }) => ({
  ...dashboard,
  ...call
});

export default connect(mapStateToProps)(ActiveUsersList);
