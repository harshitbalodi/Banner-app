import { useState } from 'react';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

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
    <DashboardWrapper>
      <h2>Banner Control Dashboard</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            Banner Visibility:
            <Input
              type="checkbox"
              checked={isVisible}
              onChange={(e) => setIsVisible(e.target.checked)}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>Banner Description:</Label>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Banner Timer (seconds):</Label>
          <Input
            type="number"
            value={timer}
            onChange={(e) => setTimer(parseInt(e.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <Label>Banner Link:</Label>
          <Input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Update Banner</Button>
      </Form>
    </DashboardWrapper>
  );
};

export default Dashboard;