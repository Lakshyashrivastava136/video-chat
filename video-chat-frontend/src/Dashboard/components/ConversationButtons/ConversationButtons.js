import React from 'react';
import { MdCallEnd, MdMic, MdMicOff, MdVideocam, MdVideocamOff, MdScreenShare, MdStopScreenShare } from 'react-icons/md';
import ConversationButton from './ConversationButton';
import { switchForScreenSharingStream, hangUp } from '../../../utils/webRTC/webRTCHandler';

import './ConversationButtons.css';

const ConversationButtons = (props) => {
  const {
    localStream,
    localCameraEnabled,
    localMicrophoneEnabled,
    setCameraEnabled,
    setMicrophoneEnabled,
    screenSharingActive,
    groupCall
  } = props;

  const handleMicButtonPressed = () => {
    const micEnabled = localMicrophoneEnabled;
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicrophoneEnabled(!micEnabled);
  };

  const handleCameraButtonPressed = () => {
    const cameraEnabled = localCameraEnabled;
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  const handleScreenSharingButtonPressed = () => {
    switchForScreenSharingStream();
  };

  const handleHangUpButtonPressed = () => {
    hangUp();
  };

  return (
    <div className='conversation_buttons'>
      <ConversationButton
        onClickHandler={handleMicButtonPressed}
        label={localMicrophoneEnabled ? 'Mute microphone' : 'Unmute microphone'}
        variant={localMicrophoneEnabled ? '' : 'off'}
      >
        {localMicrophoneEnabled ? <MdMic /> : <MdMicOff />}
      </ConversationButton>
      <ConversationButton
        onClickHandler={handleCameraButtonPressed}
        label={localCameraEnabled ? 'Turn camera off' : 'Turn camera on'}
        variant={localCameraEnabled ? '' : 'off'}
      >
        {localCameraEnabled ? <MdVideocam /> : <MdVideocamOff />}
      </ConversationButton>
      {!groupCall && (
        <ConversationButton
          onClickHandler={handleScreenSharingButtonPressed}
          label={screenSharingActive ? 'Stop sharing screen' : 'Share screen'}
          variant={screenSharingActive ? 'on' : ''}
        >
          {screenSharingActive ? <MdStopScreenShare /> : <MdScreenShare />}
        </ConversationButton>
      )}
      {!groupCall && (
        <ConversationButton
          onClickHandler={handleHangUpButtonPressed}
          label='Hang up'
          variant='danger'
        >
          <MdCallEnd />
        </ConversationButton>
      )}
    </div>
  );
};

export default ConversationButtons;
