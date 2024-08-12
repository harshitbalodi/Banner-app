// import React, { useState, useEffect } from 'react';

// const Banner = ({ description, link, countdownTime, isVisible }) => {
//   const [timeRemaining, setTimeRemaining] = useState(countdownTime);

//   useEffect(() => {
//     if (isVisible && countdownTime > 0) {
//       const timer = setInterval(() => {
//         setTimeRemaining(prev => prev > 0 ? prev - 1 : 0);
//       }, 1000);

//       return () => clearInterval(timer);
//     }
//   }, [isVisible, countdownTime]);

//   if (!isVisible) return null;

//   return (
//     <div className="banner">
//       <p>{description}</p>
//       <p>Time Remaining: {timeRemaining} seconds</p>
//       {link && <a href={link} target="_blank" rel="noopener noreferrer">Click Here</a>}
//     </div>
//   );
// };

// export default Banner;


import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return <div className="countdown">{formatTime(timeLeft)}</div>;
};

export default CountdownTimer;