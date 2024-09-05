import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #e6f7ff; /* Light blue pastel color */
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #004d99; /* Darker blue for header */
`;


const AccordionContainer = styled.div`
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #ddd;
`;

const AccordionTitle = styled.div`
  padding: 1rem;
  background-color: #cce0ff; /* Slightly darker blue pastel for title */
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: #004d99;
  transition: background-color 0.3s;

  &:hover {
    background-color: #99c2ff; /* Hover effect */
  }
`;

const AccordionContent = styled.div`
  padding: 1rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #f9f9f9;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
  background-color:#cce0ff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f0f8ff; /* Light blue pastel for inputs */
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f0f8ff; /* Light blue pastel for textarea */
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #004d99;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003366;
  }
`;

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <PageContainer>
      <Header>Help & Support</Header>
      <AccordionContainer>
        <AccordionItem>
          <AccordionTitle onClick={() => toggleAccordion(0)}>
            What is this website about?
          </AccordionTitle>
          <AccordionContent isOpen={openIndex === 0}>
            <p>This website is a platform for sharing and documenting travel experiences and memories with friends.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle onClick={() => toggleAccordion(1)}>
            How do I create a new trip?
          </AccordionTitle>
          <AccordionContent isOpen={openIndex === 1}>
            <p>To create a new trip, go to the 'Add Trip' section and fill out the form with your trip details.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle onClick={() => toggleAccordion(2)}>
            Can I edit my trip details?
          </AccordionTitle>
          <AccordionContent isOpen={openIndex === 2}>
            <p>Yes, you can edit your trip details by navigating to the 'My Trips' section and selecting the trip you want to update.</p>
          </AccordionContent>
        </AccordionItem>
        {/* Add more */}
      </AccordionContainer>

      <ContactForm>
        <h2>Contact Us</h2>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" rows="5" required />
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </PageContainer>
  );
};

export default Help;
