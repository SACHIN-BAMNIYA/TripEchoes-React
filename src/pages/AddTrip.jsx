import React, { useState } from 'react';
import styled from 'styled-components';

const AddTripContainer = styled.div`
  padding: 2rem;
  box-sizing: border-box;
  background-color: #fff3e0; /* Light pastel orange */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #ff5722;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 95%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 2px solid #ffccbc; /* Light orange border */
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #ff5722; /* Orange focus */
  }
`;

const Textarea = styled.textarea`
  width: 95%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 2px solid #ffccbc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  resize: vertical;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #ff5722;
  }
`;

const FileInput = styled.input`
  width: 95%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 2px solid #ffccbc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #ff5722;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e64a19;
  }
`;

const ErrorMessage = styled.p`
  color: #d32f2f;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const SuccessMessage = styled.p`
  color: #388e3c;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const AddTrip = () => {
  const [tripName, setTripName] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // State for image
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set the selected image
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!tripName || !destination || !startDate || !endDate || !description) {
      setError('All fields are required.');
      setSuccess('');
      return;
    }

    
    setError('');
    setSuccess('Trip added successfully!');

    
    setTripName('');
    setDestination('');
    setStartDate('');
    setEndDate('');
    setDescription('');
    setImage(null); 
  };

  return (
    <AddTripContainer>
      <Title>Add a New Trip</Title>
      <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        
        <Input 
          type="text" 
          placeholder="Trip Name" 
          value={tripName} 
          onChange={(e) => setTripName(e.target.value)} 
        />
        <Input 
          type="text" 
          placeholder="Destination" 
          value={destination} 
          onChange={(e) => setDestination(e.target.value)} 
        />
        <Input 
          type="date" 
          placeholder="Start Date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
        />
        <Input 
          type="date" 
          placeholder="End Date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
        />
        <Textarea 
          placeholder="Description" 
          rows="5" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <FileInput 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
        />
        <Button type="submit">Add Trip</Button>
      </Form>
    </AddTripContainer>
  );
};

export default AddTrip;
