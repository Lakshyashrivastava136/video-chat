import React, { useState, useEffect } from 'react';

const styles = {
  button: {
    position: 'fixed',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '6px 16px',
    borderRadius: '20px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: '#282c34',
    color: '#e6e5e8',
    fontSize: '14px',
    zIndex: 5
  }
};

const getSavedTheme = () => {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  } catch (err) {
    return 'dark';
  }
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getSavedTheme);

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
    try {
      localStorage.setItem('theme', theme);
    } catch (err) {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button style={styles.button} onClick={toggleTheme}>
      {theme === 'light' ? 'Dark mode' : 'Light mode'}
    </button>
  );
};

export default ThemeToggle;