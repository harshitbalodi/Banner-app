import styled from 'styled-components';

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SliderLabel = styled.label`
  margin-right: 10px;
`;

const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 50px;
  height: 24px;
  background-color: #ccc;
  outline: none;
  border-radius: 12px;
  transition: 0.4s;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background-color: white;
    transition: 0.4s;
  }

  &:checked {
    background-color: #2196F3;
  }

  &:checked:before {
    transform: translateX(26px);
  }
`;

const NightModeSlider = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <SliderWrapper>
      <SliderLabel>Night Mode:</SliderLabel>
      <SliderInput
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
    </SliderWrapper>
  );
};

export default NightModeSlider;