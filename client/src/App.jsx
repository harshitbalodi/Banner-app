import  { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import NightModeSlider from './components/NightModeSlider';

const lightTheme = {
  background: '#f0f0f0',
  text: '#333',
  bannerBg: '#e0e0e0',
  bannerText: '#333',
};

const darkTheme = {
  background: '#333',
  text: '#f0f0f0',
  bannerBg: '#555',
  bannerText: '#f0f0f0',
};

const AppWrapper = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  min-height: 100vh;
  padding: 20px;
  transition: all 0.3s ease;
`;

const App = () => {
  const [bannerSettings, setBannerSettings] = useState({
    isVisible: false,
    description: '',
    timer: 0,
    link: '',
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchBannerSettings();
  }, []);

  const fetchBannerSettings = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URI}/api/banner-settings`);
      const data = await response.json();
      setBannerSettings(data);
    } catch (error) {
      console.error('Error fetching banner settings:', error);
    }
  };
console.log(import.meta.env.VITE_APP_BACKEND_URI);
  const updateBannerSettings = async (newSettings) => {
    
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URI}/api/banner-settings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSettings),
      });
      const data = await response.json();
      setBannerSettings(data);
    } catch (error) {
      console.error('Error updating banner settings:', error);
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppWrapper>
        <NightModeSlider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Banner {...bannerSettings} />
        <Dashboard updateBannerSettings={updateBannerSettings} />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;