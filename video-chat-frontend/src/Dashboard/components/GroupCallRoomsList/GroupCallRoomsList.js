import React from 'react';
import GroupCallRoomsListItem from './GroupCallRoomsListItem';
import { connect } from 'react-redux';
import './GroupCallRoomsList.css';

const GroupCallRoomsList = (props) => {
  const { groupCallRooms } = props;
  return (
    <>
      <span className='group_calls_list_label'>Open rooms</span>
      {groupCallRooms.length === 0 && (
        <span className='group_calls_list_empty'>
          No rooms yet. Create one to talk with a group.
        </span>
      )}
      {groupCallRooms.map(room => <GroupCallRoomsListItem key={room.roomId} room={room} />)}
    </>
  );
};

const mapStoreStateToProps = ({ dashboard }) => (
  {
    ...dashboard
  }
);

export default connect(mapStoreStateToProps)(GroupCallRoomsList);
