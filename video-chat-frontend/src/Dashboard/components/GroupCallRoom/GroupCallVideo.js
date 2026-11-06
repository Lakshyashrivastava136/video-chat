import React, { useRef, useEffect } from 'react';

const GroupCallVideo = ({ stream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const remoteGroupCallVideo = videoRef.current;
    remoteGroupCallVideo.srcObject = stream;
    remoteGroupCallVideo.onloadedmetadata = () => {
      remoteGroupCallVideo.play();
    };
  }, [stream]);

  return (
    <div className='group_call_video'>
      <video ref={videoRef} autoPlay className='group_call_video_element' />
    </div>
  );
};

export default GroupCallVideo;
