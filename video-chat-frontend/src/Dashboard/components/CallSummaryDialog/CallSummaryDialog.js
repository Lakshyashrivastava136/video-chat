import React, { useEffect } from 'react';

const pad = (n) => String(n).padStart(2, '0');

const formatDuration = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return hours > 0
    ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(minutes)}:${pad(seconds)}`;
};

const CallSummaryDialog = ({ callSummary, clearCallSummary }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      clearCallSummary();
    }, 4000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [callSummary]);

  return (
    <div className='call_summary'>
      <span className='call_summary_text'>
        {callSummary.username ? `Call with ${callSummary.username} ended` : 'Call ended'}
      </span>
      <span className='call_summary_duration'>{formatDuration(callSummary.duration)}</span>
    </div>
  );
};

export default CallSummaryDialog;
