import React from 'react';
import { MdVideocam } from 'react-icons/md';
import { callToOtherUser } from '../../../utils/webRTC/webRTCHandler';
import { callStates } from '../../../store/actions/callActions';

const getAvatarColor = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return `hsl(${Math.abs(hash) % 360}, 45%, 42%)`;
};

const ActiveUsersListItem = (props) => {
  const { activeUser, callState } = props;
  const username = activeUser.username || 'Guest';
  const canCall = callState === callStates.CALL_AVAILABLE;

  const handleListItemPressed = () => {
    if (canCall) {
      callToOtherUser(activeUser);
    }
  };

  return (
    <button
      type='button'
      className='active_user_list_item'
      onClick={handleListItemPressed}
      disabled={!canCall}
      title={canCall ? `Call ${username}` : 'You are busy right now'}
    >
      <span
        className='active_user_list_avatar'
        style={{ backgroundColor: getAvatarColor(username) }}
      >
        {username.trim().charAt(0).toUpperCase()}
      </span>
      <span className='active_user_list_text'>{username}</span>
      <MdVideocam className='active_user_list_call_icon' />
    </button>
  );
};

export default ActiveUsersListItem;
