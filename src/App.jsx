import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import { invoke } from '@tauri-apps/api/tauri';
import { ThemeContext } from './context.js';
import Page from './pages/index';

function App() {
  const [theme, setTheme] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load_colortheme() {
      setLoading(true);
      setTheme(await invoke('get_colortheme'));
      setLoading(false);
    }

    load_colortheme();
  }, []);

  document.body.style.backgroundColor = theme.darkBg;

  return (
    <ThemeContext.Provider value={{ loading, theme }}>
      <Page />
    </ThemeContext.Provider>
  );
}

export default App;
