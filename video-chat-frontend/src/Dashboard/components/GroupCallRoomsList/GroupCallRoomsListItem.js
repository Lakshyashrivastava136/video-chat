import React from 'react';
import * as webRTCGroupCallHandler from '../../../utils/webRTC/webRTCGroupCallHandler';

const GroupCallRoomsListItem = ({ room }) => {
  const handleListItemPressed = () => {
    webRTCGroupCallHandler.joinGroupCall(room.socketId, room.roomId);
  };

  return (
    <button
      type='button'
      onClick={handleListItemPressed}
      className='group_calls_list_item'
      title={`Join ${room.hostName}'s room`}
    >
      <span className='group_calls_list_dot' />
      {room.hostName}&apos;s room
    </button>
  );
};

export default GroupCallRoomsListItem;
