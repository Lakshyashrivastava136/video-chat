import React, { useEffect } from 'react';

const styles = {
  box: {
    position: 'absolute',
    top: 'calc(50% - 75px)',
    left: 'calc(50% - 150px)',
    width: '300px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    backgroundColor: '#282C34',
    color: '#e6e5e8',
    fontSize: '18px',
    textAlign: 'center',
    zIndex: 10
  },
  duration: {
    marginTop: '10px',
    fontSize: '28px',
    fontFamily: 'monospace'
  }
};

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
    <div style={styles.box}>
      <span>
        Call ended{callSummary.username ? ` with ${callSummary.username}` : ''}
      </span>
      <span style={styles.duration}>{formatDuration(callSummary.duration)}</span>
    </div>
  );
};

export default CallSummaryDialog;