import { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CountdownTimer = ({ initialTime, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return <TimerWrapper>{formatTime(timeLeft)}</TimerWrapper>;
};

export default CountdownTimer;