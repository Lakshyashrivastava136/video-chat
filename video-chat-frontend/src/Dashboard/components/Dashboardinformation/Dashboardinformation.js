import React from 'react';

import './Dashboardinformation.css';

const DashboardInformation = ({ username }) => {
  return (
    <div className='dashboard_info_text_container'>
      <h1 className='dashboard_info_text_title'>
        Ready when you are{username ? `, ${username}` : ''}.
      </h1>
      <p className='dashboard_info_text_description'>
        Pick someone from the list on the right to start a video call,
        or create a room to talk with a group.
      </p>
    </div>
  );
};

export default DashboardInformation;
