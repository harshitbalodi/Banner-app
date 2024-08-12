import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CountdownTimer from './CountdownTimer';

const BannerWrapper = styled.div`
  background-color: ${props => props.theme.bannerBg};
  color: ${props => props.theme.bannerText};
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BannerContent = styled.div`
  flex-grow: 1;
`;

const BannerLink = styled.a`
  color: ${props => props.theme.bannerText};
  text-decoration: underline;
  margin-left: 15px;
`;

const Banner = ({ isVisible, description, link, timer }) => {
  const [showBanner, setShowBanner] = useState(isVisible);

  useEffect(() => {
    setShowBanner(isVisible);
  }, [isVisible]);

  const handleTimerComplete = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <BannerWrapper>
      <BannerContent>
        <p>{description}</p>
        {link && <BannerLink href={link}>Learn More</BannerLink>}
      </BannerContent>
      <CountdownTimer initialTime={timer} onComplete={handleTimerComplete} />
    </BannerWrapper>
  );
};

export default Banner;