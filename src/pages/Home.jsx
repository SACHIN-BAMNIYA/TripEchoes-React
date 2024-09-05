import React from 'react';
import styled from 'styled-components';

// Styled Components
const HomeContainer = styled.div`
  background-color: #e7caec; /* Light pastel purple */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  text-align: center;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('https://ibb.co/NCSpZBk'); 
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3); 
    z-index: -1;
  }
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 1;
`;

const Tagline = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SubTagline = styled.p`
  font-size: 1.5rem;
  color: #cb71db;
  font-weight: 400;
  animation: fadeInUp 1.2s ease-out;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CallToAction = styled.a`
  margin-top: 2rem;
  display: inline-block;
  background-color: #8e24aa; /* Pastel purple */
  padding: 1rem 2rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #6a1b9a;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage />
      <OverlayContent>
        <Tagline>Explore the World with Us</Tagline>
        <SubTagline>Discover, share, and experience new adventures</SubTagline>
        <CallToAction href="/explore">Start Your Journey</CallToAction>
      </OverlayContent>
    </HomeContainer>
  );
};

export default Home;
