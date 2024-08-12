// // src/components/Dashboard.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Dashboard = ({ updateBannerSettings }) => {
//   const [description, setDescription] = useState('');
//   const [countdown, setCountdown] = useState(60);
//   const [link, setLink] = useState('');
//   const [isVisible, setIsVisible] = useState(true);

//   const handleSubmit = async () => {
//     const data = { description, countdown, link, isVisible };
//     try{
//       await axios.post('http://localhost:3000/api/update-banner', data);
//     }catch(err){
//       console.log(err);
//     }
//     // await axios.post('http://localhost:3000/api/update-banner', data);
//     updateBannerSettings(data);
//   };

//   return (
//     <div className="dashboard">
//       <h2>Dashboard</h2>
//       <label>
//         Banner Description:
//         <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
//       </label>
//       <label>
//         Banner Countdown (seconds):
//         <input type="number" value={countdown} onChange={e => setCountdown(e.target.value)} />
//       </label>
//       <label>
//         Banner Link:
//         <input type="text" value={link} onChange={e => setLink(e.target.value)} />
//       </label>
//       <label>
//         Banner Visible:
//         <input type="checkbox" checked={isVisible} onChange={e => setIsVisible(e.target.checked)} />
//       </label>
//       <button onClick={handleSubmit}>Update Banner</button>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';

const Dashboard = ({ updateBannerSettings }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(0);
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBannerSettings({ isVisible, description, timer, link });
  };

  return (
    <div className="dashboard">
      <h2>Banner Control Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Banner Visibility:
          <input
            type="checkbox"
            checked={isVisible}
            onChange={(e) => setIsVisible(e.target.checked)}
          />
        </label>
        <label>
          Banner Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Banner Timer (seconds):
          <input
            type="number"
            value={timer}
            onChange={(e) => setTimer(parseInt(e.target.value))}
          />
        </label>
        <label>
          Banner Link:
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
        <button type="submit">Update Banner</button>
      </form>
    </div>
  );
};

export default Dashboard;