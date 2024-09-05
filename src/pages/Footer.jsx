import React from 'react';
import styled from 'styled-components';

// Styled Components
const FooterContainer = styled.footer`
  width: 100%;
  background-color: #f5f5dc; /* Light beige pastel color */
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  border-top: 1px solid #ddd;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

const FooterLinks = styled.div`
  margin: 1rem 0;
  font-size: 0.875rem;
`;

const FooterLink = styled.a`
  color: #004d99; /* Darker blue for links */
  text-decoration: none;
  margin: 0 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactEmail = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; 2024 Your Website Name. All rights reserved.
        <br />
        by SACHiN BAMNiYA
      </FooterText>
      <FooterLinks>
        <FooterLink href="/about">About Us</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinks>
      <ContactEmail>
        Contact us: <a href="mailto:info@tripwebsite.com">info@tripwebsite.com</a>
      </ContactEmail>
    </FooterContainer>
  );
};

export default Footer;
