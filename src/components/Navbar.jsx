import React, { useState } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled Components
const NavbarContainer = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(10px); /* Glass effect */
  border: 1px solid rgba(255, 255, 255, 0.2); 
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: rgba(76, 76, 76, 0.8);
  margin: 0;
  margin-right: 150px;
  cursor: pointer;
  animation: ${slideDown} 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap; 
  animation: ${slideDown} 0.5s ease-in-out;
  width: auto; 

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const NavLink = styled.a`
  color:  rgba(34, 34, 34, 0.8);;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 510;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #000000;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  transition: color 0.3s ease;

  &:hover {
    color: #b2dfdb;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>TripEchoes</Logo>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? '❌' : '☰'}
      </MenuButton>
      <NavLinks isOpen={isOpen}>
        <NavLink href="#Home">Home</NavLink>
        <NavLink href="#Aboutus">About</NavLink>
        <NavLink href="#Explore">Explore</NavLink>
        <NavLink href="#AddTrip">Add Trip</NavLink>
        <NavLink href="#Help">Help</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
