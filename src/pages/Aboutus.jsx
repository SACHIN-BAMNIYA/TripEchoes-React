import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  background-color: #fce4ec; 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
  text-align: center;
  animation: slideIn 1s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #d81b60;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <Section>
        <Title>About Us</Title>
        <Text>
          Welcome to our Trip Blog website! We are passionate travelers who want to 
          share and explore experiences from all over the world. Whether you are looking 
          for your next adventure or want to inspire others with your journeys, this is 
          the right platform for you.
        </Text>
      </Section>
      <Section>
        <Title>Our Mission</Title>
        <Text>
          Our mission is to create a community where travelers can come together, 
          exchange stories, and discover new places. We believe in making travel 
          accessible and fun for everyone. Join us in this exciting journey!
        </Text>
      </Section>
    </AboutContainer>
  );
};

export default AboutUs;
