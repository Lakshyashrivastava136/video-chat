import React, { useState, useEffect } from 'react';

const styles = {
  timer: {
    position: 'absolute',
    top: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '6px 14px',
    borderRadius: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#e6e5e8',
    fontSize: '16px',
    fontFamily: 'monospace'
  }
};

const pad = (n) => String(n).padStart(2, '0');

const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return hours > 0
    ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(minutes)}:${pad(seconds)}`;
};

const CallTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div style={styles.timer}>{formatTime(seconds)}</div>;
};

export default CallTimer;