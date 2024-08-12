// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Banner from './components/Banner';
// import Dashboard from './components/Dashboard';

// const App = () => {
//   const [bannerSettings, setBannerSettings] = useState({
//     description: '',
//     countdown: 60,
//     link: '',
//     isVisible: true
//   });

//   useEffect(() => {
//     try {
//       axios.get('http://localhost:3000/api/banner-settings')
//         .then(response => setBannerSettings(response.data))
//         .catch(error => console.error('Error fetching banner settings:', error));
//     } catch (error) {
//       console.log(error);
//     }

//   }, []);

//   const updateBannerSettings = (newSettings) => {
//     setBannerSettings(newSettings);
//   };

//   return (
//     <div>
//       <Banner {...bannerSettings} />
//       <Dashboard updateBannerSettings={updateBannerSettings} />
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';

const App = () => {
  const [bannerSettings, setBannerSettings] = useState({
    isVisible: false,
    description: '',
    timer: 0,
    link: '',
  });

  useEffect(() => {
    // Fetch initial banner settings from the server
    fetchBannerSettings();
  }, []);

  const fetchBannerSettings = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/banner-settings');
      const data = await response.json();
      setBannerSettings(data);
    } catch (error) {
      console.error('Error fetching banner settings:', error);
    }
  };

  const updateBannerSettings = async (newSettings) => {
    try {
      const response = await fetch('http://localhost:3000/api/banner-settings', {
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
    <div className="app">
      <Banner {...bannerSettings} />
      <Dashboard updateBannerSettings={updateBannerSettings} />
    </div>
  );
};

export default App;