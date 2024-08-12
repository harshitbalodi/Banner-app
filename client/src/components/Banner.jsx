// import './Banner.css';

// const Banner = ({ description, link, countdown, isVisible }) => {
//   if (!isVisible) return null;

//   return (
//     <div className="banner">
//       <p>{description}</p>
//       {countdown && <p>Time Remaining: {countdown}</p>}
//       {link && <a href={link} target="_blank" rel="noopener noreferrer">Click Here</a>}
//     </div>
//   );
// };

// export default Banner;


import CountdownTimer from './CountdownTimer';

const Banner = ({ isVisible, description, link, timer }) => {
  if (!isVisible) return null;

  return (
    <div className="banner">
      <p>{description}</p>
      {link && <a href={link}>Learn More</a>}
      <CountdownTimer initialTime={timer} />
    </div>
  );
};

export default Banner;