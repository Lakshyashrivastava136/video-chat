let audioContext = null;
let intervalId = null;

const playBeep = (ctx, startTime, frequency, duration) => {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;

  // quick fade in and out so the beep does not click
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.25, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.05);
};

const playRingPattern = () => {
  if (!audioContext) {
    return;
  }
  const now = audioContext.currentTime;
  playBeep(audioContext, now, 880, 0.25);
  playBeep(audioContext, now + 0.35, 660, 0.25);
};

export const stopRingtone = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
};

export const startRingtone = () => {
  stopRingtone();
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContextClass();
    audioContext.resume();
    playRingPattern();
    intervalId = setInterval(playRingPattern, 2000);
  } catch (err) {
    console.log('could not play ringtone', err);
  }
};