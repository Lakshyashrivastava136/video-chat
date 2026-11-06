import React, { useState, useEffect } from 'react';

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
    <button className='theme_toggle' onClick={toggleTheme}>
      {theme === 'light' ? 'Dark mode' : 'Light mode'}
    </button>
  );
};

export default ThemeToggle;
